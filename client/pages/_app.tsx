import { AppProps } from 'next/app'
import CartProvider from '@store/Cart'

import 'semantic-ui-css/semantic.min.css'
import '../globals.css'
import { ApolloProvider, ApolloClient, gql, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: "https://api.escuelajs.co/graphql",
  cache: new InMemoryCache()
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  )
}

export default MyApp
