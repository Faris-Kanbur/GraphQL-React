const { ApolloServer } = require('apollo-server');
const {mainCards, animals, categories} = require('./db')
const typeDefs = require('./schema')


const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent,args,ctx) => {
      let animal = animals.find((animal) => {
        return animal.slug === args.slug
      })
      return animal
    },

    categories: () => categories,
    category: (parent,args,ctx) => {
      let category = categories.find((category) => {
        return category.slug === args.slug
      }) 
      return category
    },
  },
  Category : {
    animals: (parent, args, ctx) => {
      return animals.filter(animal => {
        return animal.category === parent.id
      })
    }
  },
  Animal : {
    category: (parent, args, ctx) => {
      return categories.find(category => {
        return category.id === parent.category
      })
    }
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});