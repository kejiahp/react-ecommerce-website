import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {mobile} from '../Responsive' 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: "50px"
    })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 2;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex:6 })}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    /* ${mobile({fontSize:"20px"})} */
    ${mobile({display:"none"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft: "10px"})}
`

const Navbar = () => {
    const {quantity} = useSelector(state=>state.cart)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{ color:"gray", fontSize:16 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    KEJIAH.P
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    <Link to='/register'>
                        REGISTER
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login">
                        SIGN IN
                    </Link>
                </MenuItem>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar