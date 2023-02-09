import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader"
import Layout from "@components/Layout/Layout"
import { useProduct } from "hooks/useProduct"
import { useRouter } from "next/router"

const ProductPage = () => {
  const {query: { id }} = useRouter()
  const { data, loading, error } = useProduct(id as string)

  return (
    <Layout title="Product Detail">
      <KawaiiHeader />

      <h2>
        {data?.product.title}
      </h2>
    </Layout>
  )
}

export default ProductPage
