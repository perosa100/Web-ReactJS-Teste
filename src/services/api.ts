import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-boost'

const httpLink = createHttpLink({
  uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'fliperdevtest2020'
  }
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link: httpLink,
  cache
})
