import { Lesson } from "../models/lessonModel";

export const createLesson = async (parent: any, args: any, ctx: any) => {
  const lesson = new Lesson(args.input);
  return lesson.save();
};
