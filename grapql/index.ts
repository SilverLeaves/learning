import { ApolloServer, gql } from "apollo-server";

const books = [
  {
    _id: "0",
    title: "哈利波特",
    author: {
      _id: "0"
    }
  },
  {
    _id: "1",
    title: "神器留下",
    author: {
      _id: "1"
    }
  },
  {
    _id: "2",
    title: "热爱生命",
    author: {
      _id: "0"
    }
  },
  {
    _id: "3",
    title: "哆啦A萌",
    author: {
      _id: "1"
    }
  }
];

const authors = [
  {
    _id: "0",
    name: "第一作者",
    books: [
      {
        _id: "0"
      },
      {
        _id: "2"
      }
    ]
  },
  {
    _id: "1",
    name: "第二作者",
    books: [
      {
        _id: "1"
      },
      {
        _id: "3"
      }
    ]
  }
];

const typeDefs = gql`
  "作者类型"
  type Author {
    _id: String
    "名称"
    name: String
    "书籍"
    books: [Book]
  }

  "书籍类型"
  type Book {
    "标题"
    title: String
    author: [Author]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  "根查询节点"
  type Query {
    "书籍列表"
    books: [Book]
    "作者列表"
    author: [Author]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    author: () => authors
  },
  Book: {
    author: (parent, {}, context) => {
      return authors.filter(ele => {
        return ele._id == parent.author._id;
      });
    }
  },
  Author: {
    books: (parent, {}, context) => {
      let searcher = new Set();
      parent.books.forEach(element => {
        searcher.add(element._id);
      });
      return books.filter(ele => {
        return searcher.has(ele._id);
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`${url}`);
});
