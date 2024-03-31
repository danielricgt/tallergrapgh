import {
  GraphQLString,
  graphql,
  graphqlSync,
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/User";
import bcrypt from "bcryptjs";
import { MessageType } from "../typeDefs/Message";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { name, username, password } = args;

    const encryptPassword = await bcrypt.hash(password, 10);
    const result = await Users.insert({
      idUsers: name,
      username: username,
      password: encryptPassword,
    });
    console.log(result);

    return { ...args, id: result.identifiers[0].id, password: encryptPassword };
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await Users.delete(id);
    console.log(result);
    if (result.affected === 1) return true;
    return false;
  },
};
export const UPDATE_USER = {
  type: MessageType,
  args: {
    idUsers: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "UserImput",
        fields:{
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
       },
      }),
    },
  },
  async resolve(_: any, { idUsers, input }: any) {
    const userFound = await Users.findOne({ where: { idUsers } });
    if (!userFound)
      return {
        success: false,
        message: "User not Found",
      };
    console.log(userFound);

    const isMatch = await bcrypt.compare(input.oldPassword, userFound.password);
    console.log(isMatch);

    if (!isMatch)
      return {
        success: false,
        message: "Password not correct",
      };
    const newPasswordHash = await bcrypt.hash(input.newPassword, 10);

    const response = await Users.update(
      { idUsers },
      { username: input.username, idUsers: input.name, password: newPasswordHash }
    );
    console.log(response);

    if (response.affected === 0) return false;

    return {
      success: true,
      message: "User updated sucessfully",
    };
  },
};
