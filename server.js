const { ApolloServer } = require( '@apollo/server');
const { startStandaloneServer } = require( '@apollo/server/standalone')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } =  startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);