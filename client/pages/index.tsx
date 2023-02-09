import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import { useProducts } from 'hooks/useProducts'

const HomePage = () => {
  const {status, data} = useProducts()

  console.log({
    data, status
  })

  return (
    <Layout title="Home">
      <KawaiiHeader />
      {/* <ProductList products={products} /> */}
    </Layout>
  )
}

export default HomePage
