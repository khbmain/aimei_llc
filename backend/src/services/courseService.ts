import { ContentType } from "aws-sdk/clients/cloudsearchdomain";
import { ContextType } from "../graphql/context";
import { Course } from "../models/courseModel";
import { teacherAccess } from "../utils/auth";

export const createCourse = (parent: any, args: any, ctx: ContextType) => {
  teacherAccess(ctx);
  const { title, description, content, videoUrl, thumbnail, userId } =
    args.input;
  const course = new Course({
    title,
    description,
    content,
    videoUrl,
    thumbnail,
    userId,
  });
  return course.save();
};

export const updateCourse = (parent: any, args: any, ctx: ContextType) => {
  const { _id } = args;
  delete args._id;
  return Course.findByIdAndUpdate(_id, args, { new: true });
};

export const getCourse = (parent: any, args: any, ctx: ContentType) => {
  teacherAccess(ctx);
  const { _id } = args;
  // populate user lessons;
  return Course.findById(_id).populate("userId").populate("lessons");
};

export const getCourses = (parent: any, args: any, ctx: ContextType) => {
  teacherAccess(ctx);
  return Course.find(args).populate("urerId", "name").populate("lessons", "");
};
