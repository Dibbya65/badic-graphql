import { GraphQLServer, PubSub } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';
import Subscription from './resolvers/Subscription';

const pubsub = new PubSub();

// Resolvers
const resolvers = {
  Query,
  Mutation,
  Subscription,
  Post,
  Comment,
  User,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log('Server is up');
});
