import express from "express";
import schema from "./schema";
import graphqlHTTP from "express-graphql";

const app = express();

app.get('/', function(req,res){
res.send("graphQL")

})
const root = {friend: () => {
    return{
        "id": 1092131,
        "firstName": "Hans",
        "lastName": "Mery",
        "gender": "male",
        "language": "English",
        "email": "a@a.dk",
    }

}}

app.use("/graphql", graphqlHTTP({
schema: schema,
rootValue: root,
graphiql: true,

}),)
app.listen(3010, () => console.log("it in on 3010"))