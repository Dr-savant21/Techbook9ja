const cloudinary = require("cloudinary").v2;
const fs = require('fs').promises;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

class CloudinaryConfig{
    async createMedia(media){
        let mediaDetails = [];
        media.forEach(async(mediaContent) => {
            try {
                const result = await cloudinary.uploader.upload(
                    mediaContent.path,
                    { public_id: "Foodblog9ja/Media" }
                );
                mediaDetails.push(result);
                console.log(mediaContent.path);
                fs.unlink(mediaContent.path);
            } catch (error) {
                console.error(error);
            }
        })
        return mediaDetails;
    }

    async deleteMedia(media){
        await cloudinary.api.delete_resources(media, (error, result) => {
            if (error) {
                console.error('Error deleting media:', error);
            } else {
                mediaDetails.push(result);
                console.log('Deleted media:', result);
            }
        });
    }
}
const cloudinaryConfig = new CloudinaryConfig()
module.exports = cloudinaryConfig;