import * as gql from "graphql"

// serve side
let root = {
    hello: () => {
        return "Hello world"
    }
};


// client side
let schema = gql.buildSchema(`
type Query{
    hello:String
}
`);
console.log("schema",schema);


// query
(async function query() {
    let res = await gql.graphql(schema, `{hello}`, root);
    console.log(res)
})()