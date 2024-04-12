import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRECT'
});


const uploadOnChoudinary = async(loaclFilePath) => {
    try {
        if (!loaclFilePath) return null
            //upload the file pn cloudiary
        const response = await cloudinary.uploader.upload(loaclFilePath, {
                resource_type: "auto"
            })
            //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(loaclFilePath) //remove the locally saved tempory file as the upload operation got failed 
        return null;

    }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", { public_id: "olympic_flag" },
    function(error, result) { console.log(result); });