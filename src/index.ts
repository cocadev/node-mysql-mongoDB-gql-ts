import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

import './datasources/config';
import './datasources/mysqlDB';

const server = new ApolloServer({
    typeDefs: gql`
        ${typeDefs}
    `,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
