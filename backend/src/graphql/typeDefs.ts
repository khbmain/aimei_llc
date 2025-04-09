import { gql } from "apollo-server-express";

export default gql`
  type Query {
    # user
    me: User
    listUsers(role: string, name: string): [User]
    # lesson
    createLesson(): Lesson

  }

  type Mutation {
    # user
    login(phone: String!, password: String!): String
  }

  type User {
    _id: ID
    username: String
    phone: String
    email: String

    discipline: String
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
    discipline: String
    status: String
    firstname: String!
    lastname: String!
    profilePic: String
    gender: String
    password: String!
    role: String!
  }
`;

export interface UserInputInterface {
  username: string;
  phone: string;
  email: string;
  discipline: string;
  status: string;
  firstname: string;
  lastname: string;
  profilePic: string;
  password: string;
  role: string;
}

export interface PropertyInputInterface {
  name: string;
  desc: string;
  ownerId: string;
  cameraHub: string;
  timeCheckArea: number;
  locationLong: number;
  locationLat: number;
  baseLong: number;
  baseLat: number;
  map: [
    {
      lat: number;
      long: number;
    }
  ];
}
