import { asyncHandeler } from "../utils/asyncHandeler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

import { uploadOnCloudnary } from "../utils/cloudinary.js";
const registerUser = asyncHandeler(async (req, res) => {
  //get user detail
  // validation -not empty
  //check if user already exist : username ,email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  //create user object - create entry in db
  // remove password and referesh token field from response
  //check for user creation
  // return response

  const { userName, email, fullName, password } = req.body;
  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "Please add your Name");
  }
  const existedUser = User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already exist");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImg[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudnary(avatarLocalPath);
  const coverImg = await uploadOnCloudnary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }
  if (!coverImg) {
    throw new ApiError(400, "coverImage is required");
  }

  const user = await User.create({
    userName: userName.toLowerCase(),
    avatar: avatar.url,
    fullName,
    password,
    email,
    coverImg: coverImg?.url || "",
  });
});

export { registerUser };
