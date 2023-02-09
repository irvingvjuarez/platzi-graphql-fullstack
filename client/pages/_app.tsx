import { AppProps } from 'next/app'
import CartProvider from '@store/Cart'

import 'semantic-ui-css/semantic.min.css'
import '../globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'


const client = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </QueryClientProvider>
  )
}

export default MyApp
