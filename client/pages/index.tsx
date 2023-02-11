import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Link from "next/link"
import { GetProductsDocument, Product } from '@service/graphql'
import { useQuery } from '@apollo/client'
import { client } from '@service/client.apollo'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{ products: Product[] }> = async () => {
  const { data } = await client.query({
    query: GetProductsDocument
  })

  if (data) {
    return {
      props: { products: data.products }
    }
  } else {
    throw new Error("Error while fetching static data")
  }
}

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ products }) => {
  // const { loading, error, data } = useQuery(GetProductsDocument)

  // console.log({ data })

  return (
    <Layout title="Home">
      <KawaiiHeader />

      <div className='grid grid-cols-3 gap-2'>
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
      </div>
    </Layout>
  )
}

export default HomePage
