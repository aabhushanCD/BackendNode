import { cloudinary } from "./cloudinary";
import { fs } from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudnary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    }); //file has been uploaded
    console.log("file is uploaded on cloudnary", response.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath); //remove the locally saved temporary file as the upload  operation got failed
    return null;
  }
};

export { uploadOnCloudnary };
