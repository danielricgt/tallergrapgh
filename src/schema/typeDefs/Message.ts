import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
  graphql,
} from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  },
});
