import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api.escuelajs.co/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          product: {
            read(_, {args, toReference}) {
              return toReference({
                __typename: "Product",
                id: args?.id
              })
            }
          }
        }
      }
    }
  })
})
