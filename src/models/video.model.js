import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
  {
    videoFile: {
      type: string,
      required: true,
    },
    thumbnai: {
      type: string,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    isPublished:{
      type:Boolean,
      default:true,
    },
    views:{
      type:Number,
      requred:true,
      default:0
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    }
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
