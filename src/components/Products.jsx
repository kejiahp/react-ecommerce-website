import React, { useState } from 'react'
import Product from './Product'
import styled from 'styled-components'
import {popularProducts} from '../data'
import { useQuery } from 'react-query'
import { getAllProducts } from '../ApiCalls'
import { categoryFilter } from '../utils/filterProductsByCategory'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  const {isLoading, isFetching,data,isError,error} = useQuery("all-products",()=>getAllProducts(cat), {
    refetchOnWindowFocus: false,
    select: (data) => {
      if(cat && sort==="") {
        return categoryFilter(data,filters)
      }
      else if(cat && sort === "newest") {
        const filteredData = categoryFilter(data,filters)
        return filteredData.sort((a,b) => a.createdAT - b.createdAT)
      }
      else if(cat && sort === "asc") {
        const filteredData = categoryFilter(data,filters)
        return filteredData.sort((a,b) => a.price - b.price)
      }
      else if(cat && sort === "desc") {
        const filteredData = categoryFilter(data,filters)
        return filteredData.sort((a,b) => b.price - a.price)
      }
      else{
        return data.data
      }
    }
  })


  if(isLoading || isFetching) {
    return <h1>Loading...</h1>
  }
  if(isError) {
    console.log(error)
    return <div></div>
  }

  return (
    <Container>
        {data.map(item => (
            <Product key={item._id} item={item}/>
        ))}
    </Container>
  )
}

export default Products