import { useQuery } from "react-query"
import { requester } from "@service/api"

export const useProduct = (id: string) => {
  return useQuery(["product", id], async () => {
    const res = await requester.post("/graphql", {
      query: `
        query Product($id: ID!) {
          product(id: $id) {
            id
            title
          }
        }
      `,
      variables: { id }
    })

    return res.data.data
  })
}
