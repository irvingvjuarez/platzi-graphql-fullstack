import { GET_PRODUCTS } from "@service/gql.queries"
import { useQuery } from "@apollo/client"

export const useProducts = () => {
  return useQuery(GET_PRODUCTS)
}
