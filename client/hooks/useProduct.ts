import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "@service/gql.queries"

export const useProduct = (id: string) => {
  return useQuery(GET_PRODUCT,{
    variables: { id }
  })
}
