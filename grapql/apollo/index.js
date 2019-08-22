const {
  ApolloServer,
  gql
} = require('apollo-server');

const books = [{
    _id: "0",
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      _id: "0",
    }
  },
  {
    _id: "1",
    title: 'Jurassic Park',
    author: {
      _id: "1",
    }
  },
];

const authors = [{
    _id: "0",
    name: 'J.K. Rowling',
    books: [{
      _id: "0"
    }]
  },
  {
    _id: "1",
    name: 'Michael Crichton',
    books: [{
      _id: "1"
    }]
  },
];

const typeDefs = gql `
type Author{
  _id:String
  name:String
  books:[Book]
}

  type Book {
    title: String
    author: [Author]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    author: (parent, {}, context) => {
      return authors.filter((ele) => {
        return ele._id == parent.author._id
      })
    }
  },
  Author: {
    books: (parent, {}, context) => {
      let searcher = new Set();
      parent.books.forEach(element => {
        searcher.add(element._id)
      });
      return books.filter((ele) => {
        return searcher.has(ele._id)
      })
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({
  url
}) => {
  console.log(`${url}`);
});