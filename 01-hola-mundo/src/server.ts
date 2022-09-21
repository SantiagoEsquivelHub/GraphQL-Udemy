import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema/index";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

// Express app
const app = express();
// Permitimos peticiones de cualquier origen (Cross Origin Resource Sharing / Intercambio de recursos de origen cruzado)
app.use("*", cors());

app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

/* app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
); */

const PORT = 4000;
const httpServer = createServer(app);

httpServer.listen(PORT, () =>
  console.log(`GraphQL listening on http://localhost:${PORT}/graphql`)
);
