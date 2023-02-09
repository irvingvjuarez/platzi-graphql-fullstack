import axios from 'axios'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import client from '@service/client'
import { GetAllAvocadosDocument } from '@service/graphql'
import type { AvocadoFragment } from '@service/graphql'
import { useEffect } from 'react'
import { useQuery } from "react-query"

const requester = axios.create({
  baseURL: "https://api.escuelajs.co",
  headers: {
    "Content-Type": "application/json"
  }
})

const useProducts = () => {
  return useQuery("products", async () => {
    const res = await requester.post<Product[]>("/graphql", {
      query: `
        query {
          products {
            id
            title
            price
          }
        }
      `
    })

    return res.data
  })
}

const HomePage = () => {
  const {status, data} = useProducts()

  console.log(data)

  return (
    <Layout title="Home">
      <KawaiiHeader />
      {/* <ProductList products={products} /> */}
    </Layout>
  )
}

export default HomePage
