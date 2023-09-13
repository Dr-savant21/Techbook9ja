const express = require("express");
const path = require("path");
const fs = require('fs');
const dotenv = require("dotenv");
const morgan = require("morgan");
const generateRandomString = require('./utils/generateSecret');
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
// const exphbs = require("express-handlebars");
// const flash = require('connect-flash');




// load config
dotenv.config({ path: "./config/config.env" });

if (process.env.NODE_ENV === "production") {
  // Read existing .env content
  const envPath = 'config/config.env';
  const envContent = fs.readFileSync(envPath, 'utf8');

  // Generate a random secret
  const newSecret = generateRandomString(64);

  // Update SESSION_SECRET in the .env file
  const updatedEnvContent = envContent.replace(/SESSION_SECRET=.*/, `SESSION_SECRET=${newSecret}`);

  // Write the updated content back to the .env file
  fs.writeFileSync(envPath, updatedEnvContent);
}

// passport config
require("./config/passport")(passport)

connectDB()

const app = express()


// Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Method Override
app.use(
    methodOverride(function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
      }
    })
  )

// Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}
// Handlebars Helpers
// const { formatDate, stripTags, truncate, editIcon, select } = require("./helpers/hbs")

// Handlebars
// app.engine(".hbs", exphbs.engine({ 
//     helpers: { formatDate, stripTags, truncate, editIcon, select },
//     defaultLayout: "main", 
//     extname: ".hbs"
// }))
// app.set("view engine", ".hbs")



// Sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL })
})
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
// app.use(flash());

// Set global variable
app.use((req, res, next) => {
    res.locals.user = req.user || null
    next()
})

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
// app.use("/stories", require("./routes/stories"))



const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`))