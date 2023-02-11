import { AppProps } from 'next/app'
import CartProvider from '@store/Cart'

import 'semantic-ui-css/semantic.min.css'
import '../globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@service/client.apollo'

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
