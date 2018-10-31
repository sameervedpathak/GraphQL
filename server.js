var express= require('express');
var app = express();
var	express_graphql = require('express-graphql');
var	{buildSchema} = require('graphql');

//GraphQL schema
var schema = buildSchema(`
		type Query {
			message: String
		}
`);

//root resolver
var root = {
	message: () => 'Hello World !!'
};



//create an express server and graph ql endpoint
app.use('/graphql', express_graphql({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

//default API
app.use('/', function(req,res){
	res.send('Default API !!!');
});

app.listen(4000, () => console.log("Express GraphQl server Now Running On localhost:4000/grapgql"));