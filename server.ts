const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
import schema from './src/graphql/schema/schema'

var app = Express();

Mongoose.connect("mongodb://localhost/thepolyglotdeveloper");

app.use("/graphql", ExpressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Listening at :3000...");
});