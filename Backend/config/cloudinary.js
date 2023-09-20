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
        await Promise.all(
            media.map(async (mediaContent, index) => {
              try {
                const uniquePublicId = `Foodblog9ja/Media/${Date.now()}_${index}`;
                const result = await cloudinary.uploader.upload(mediaContent.path, {
                  public_id: uniquePublicId,
                });
                mediaDetails.push(result);
                fs.unlink(mediaContent.path);
              } catch (error) {
                console.error(error);
              }
            })
          );
        return mediaDetails;
    }

    async deleteMedia(media){
      await Promise.all(
        media.map(async (mediaContent) => {
          try {
            await cloudinary.uploader.destroy(mediaContent.public_id, (err) => {
              if(err){
                throw new Error(`error deleting asset: ${err}`);
              }
            });
          } catch(error){
            console.error(error);
          }
        })
      )
    }
}
const cloudinaryConfig = new CloudinaryConfig()
module.exports = cloudinaryConfig;