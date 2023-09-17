const multer = require("multer"),
fs = require('fs');

if (!fs.existsSync("./media_files")) {
  fs.mkdirSync("./media_files");
}

// Define a function for the file filter
const fileFilter = (req, file, cb) => {
  // Check the file type or other criteria to decide if it should be accepted
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    // Accept the file
    cb(null, true);
  } else {
    // Reject the file
    cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
  }
};

//multer.diskStorage() creates a storage space for storing files.
const mediaStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./media_files");
   
  },
  fileFilter,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = {
  mediaUpload: multer({ storage: mediaStorage }),
};