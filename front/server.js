const bodyParser = require('body-parser');
const request = require('request');
const fs = require("fs");
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')
const express = require('express');
const app = express();


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
	type User {
		id: Int
		name: String
	}

	type Query {
		users: [User]
	}
`);

let users = [
	{id: 0, name: 'Max'},
	{id: 1, name: 'Vera'},
	{id: 2, name: 'Bonya'}
];

// The root provides a resolver function for each API endpoint
var root = {
	users
};


app.use(cors());

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
