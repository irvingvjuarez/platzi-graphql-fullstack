import { requester } from "@service/api"
import { useQuery } from "react-query"

const defaultQuery = `
  query {
    products {
      id
      title
      price
    }
  }
`

export const useProducts = (query: string = defaultQuery) => {
  return useQuery("products", async () => {
    const res = await requester.post<{data: {products: Product[]}}>("/graphql", {
      query
    })

    return res.data.data.products
  })
}
