import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Annoncement'
import NewsLetter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({margin:"0px"})}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilter = (e) => {
    const value = e.target.value
    setFilters(prevFilter => (
      {
        ...prevFilter,
        [e.target.name]: value
      }
    ))
  }

  return (
    <Container>

      <Announcement />
      <Navbar />
      <Title>{cat}</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select defaultValue='color' name='color' onChange={(e)=>handleFilter(e)}>
            <Option value={'color'} disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>

          <Select defaultValue='size' name='size' onChange={(e)=>handleFilter(e)}>
            <Option value={'size'} disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />

    </Container>
  )
}

export default ProductList