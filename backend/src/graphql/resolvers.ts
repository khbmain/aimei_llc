import { uploadFile, uploadFileS3 } from "../services/fileService";
import { createLesson } from "../services/lessonService";
import {
  listUsers,
  loginUser as login,
  me,
  register,
  registerConfirm,
  registerUser,
} from "../services/userService";
import { NODE_ENV } from "../utils/constants";

export default {
  Query: {
    // user
    me,
    listUsers,
    // create data
    createLesson,
  },
  Mutation: {
    // // user
    login,
    register,
    registerConfirm,

    // file
    uploadFile: NODE_ENV === "development" ? uploadFile : uploadFileS3,
  },
};
