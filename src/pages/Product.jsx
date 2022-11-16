import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Annoncement'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getSingleProduct } from '../ApiCalls'
import { useState } from 'react'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection:"column"})}
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer =styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")

  const handleQunatity = (type) => {
    if(type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    }
    else{
      quantity < 10 && setQuantity(quantity + 1)
    }
  }

  const handleCartSubmit = () => {
    //update cart
  }

  const {data, isFetching, isLoading, isError, error} = useQuery("single-product", ()=>getSingleProduct(id), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data
    }
  })

  if(isLoading, isFetching) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    console.log(error)
    return <div></div>
  }

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImageContainer>
          <Image src={data.img}/>
        </ImageContainer>

        <InfoContainer>
          <Title>{data.title}</Title>
          <Desc>{data.desc}</Desc>
          <Price>$ {data.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {data.color?.map(item => (
                <FilterColor color={item} key={item} onClick={()=>setColor(item)}/>
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
              {data.size?.map(item => (
                <FilterSizeOption key={item}>{item}</FilterSizeOption>
              ))}
              </FilterSize>
            </Filter>

          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQunatity('dec')}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQunatity('asc')}/>
            </AmountContainer>
            <Button onClick={handleCartSubmit}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product