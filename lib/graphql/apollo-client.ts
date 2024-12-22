import { ApolloClient, InMemoryCache, HttpLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-unfetch';

const httpLink = createHttpLink({
  uri: "https://api.rt.radianceteam.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  // link: new HttpLink({
  //   uri: "https://api.rt.radianceteam.com/graphql",
  //   fetch,
  // }),
  cache: new InMemoryCache(),
});

export default client;