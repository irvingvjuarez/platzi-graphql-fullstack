import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader"
import Layout from "@components/Layout/Layout"
import { useProduct } from "hooks/useProduct"
import { useRouter } from "next/router"

const ProductPage = () => {
  const {query: { id }} = useRouter()
  const { data: product } = useProduct(id as string)

  console.log(product)

  return (
    <Layout title="Product Detail">
      <KawaiiHeader />

      <h2>{id}</h2>
    </Layout>
  )
}

export default ProductPage
