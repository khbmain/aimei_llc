import {
  listUsers,
  loginUser as login,
  me,
  registerUser,
} from "../services/userService";

export default {
  Query: {
    // user
    me,

    listUsers,
  },
  Mutation: {
    // // user
    login,
    registerUser,
    // work entry
  },
};
