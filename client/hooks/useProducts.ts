import { GET_PRODUCTS } from "@service/gql.queries"
import { useQuery } from "@apollo/client"
import { useGetProductsQuery } from "@service/graphql"

export const useProducts = () => {
  return useGetProductsQuery()
  // return useQuery(GET_PRODUCTS)
}
