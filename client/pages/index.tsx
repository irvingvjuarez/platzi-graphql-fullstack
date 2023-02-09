import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import { useQuery } from '@apollo/client'
import { useProducts } from 'hooks/useProducts'
import Link from "next/link"
import { GET_PRODUCTS } from '@service/gql.queries'

const HomePage = () => {
  // const { status, data: products } = useProducts()
  const { loading, error, data } = useQuery(GET_PRODUCTS)
  console.log({ data })

  return (
    <Layout title="Home">
      <KawaiiHeader />

      {/* <div className='grid grid-cols-3 gap-2'>
        {products?.map((product, index) => {
          if (index <= 10) return (
            <div className="bg-gray-400 p-2 text-center text-white" key={product.id}>
              <Link href={`/product/${product.id}`}>
                {product.title}
              </Link>
            </div>
          )

          return null
        })}
      </div> */}
    </Layout>
  )
}

export default HomePage
