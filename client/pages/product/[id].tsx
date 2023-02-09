import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader"
import Layout from "@components/Layout/Layout"
import { useProduct } from "hooks/useProduct"
import { useRouter } from "next/router"

const ProductPage = () => {
  const {query: { id }} = useRouter()
  const { data } = useProduct(id as string)
  const product = data ? data.product : {};

  return (
    <Layout title="Product Detail">
      <KawaiiHeader />

      <h2>
        {product?.title}
      </h2>
    </Layout>
  )
}

export default ProductPage
