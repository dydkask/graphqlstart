// const graphQL = require("graphql-yoga");

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

console.log("hello3");

const server = new GraphQLServer({
    // 환경 설정
    typeDefs : "graphql/schema.graphql",
    resolvers
});

server.start( () => console.log("GraphServer Listen "));