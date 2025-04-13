import { gql } from "apollo-server-express";

export default gql`
  type Query {
    # user
    me: User
    listUsers(role: String, name: String): [User]
    # lesson
    createLesson(input: LessonInput): Lesson
  }

  type Mutation {
    # user
    login(phone: String!, password: String!): String
    register(
      phone: String
      firstname: String
      lastname: String
      password: String
      email: String
    ): String
    registerConfirm(otp: String): String

    # file uplaod
    uploadFile(file: Upload!): String
  }

  scalar Upload

  type User {
    _id: ID
    username: String
    phone: String
    email: String
    status: String
    firstname: String
    lastname: String
    profilePic: String
    role: String
    gender: String
    createdAt: String
    updatedAt: String
  }

  type Lesson {
    _id: ID
    title: String
    description: String
    content: String
    videoUrl: String
    thumbnailUrl: String
    duration: Int
    createdBy: User
    createdAt: String
    updatedAt: String
    status: String
    tags: [String]
    category: String
  }

  input UserInput {
    username: String!
    phone: String!
    email: String
    status: String
    firstname: String!
    lastname: String!
    profilePic: String
    gender: String
    password: String!
    role: String!
  }

  input LessonInput {
    title: String!
    description: String!
    content: String!
    videoUrl: String!
    thumbnailUrl: String!
    duration: Int!
    createdBy: ID
    status: String
    tags: [String]
    category: String
  }
`;

export interface UserInputInterface {
  username: string;
  phone: string;
  email: string;
  status: string;
  firstname: string;
  lastname: string;
  profilePic: string;
  password: string;
  role: string;
  phoneOtp: string;
  phoneOtpExpire: Date;
}
