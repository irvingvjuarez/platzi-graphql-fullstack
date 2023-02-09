import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      price
    }
  }
`

export const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(id: $id) {
      title
      id
    }
  }
`
