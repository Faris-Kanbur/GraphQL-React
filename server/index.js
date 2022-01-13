const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type MainCard {
  title:String
  image:String
  # age:Float
  # number:Int
  # boolean: Boolean
}  

type Animal {
  image: String!
  title:String!
  rating: Float
  price:String!
  description: [String!]!
  stock: Int!
  onSale:Boolean
    
}
  
type Query {
    mainCards: [MainCard]
    animal: [Animal!]!
  }




`;

//maincard content
const mainCards = [
  {
    title: 'Best of the Evening',
    image: 'lion',
  },
  {
    title: 'loking for my dream',
    image: 'penguin',
  },
  {
    title: 'Best Behaved',
    image: 'cat',
  },
];




const resolvers = {
  Query: {
    mainCards: () => mainCards,
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});