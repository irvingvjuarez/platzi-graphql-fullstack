import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "@service/gql.queries"
import { useProductQuery } from "@service/graphql"

export const useProduct = (id: string) => {
  return useProductQuery({
    variables: {id}
  })
}
