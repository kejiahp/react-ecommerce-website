import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center
    ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    ${mobile({ width:"100%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: white;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 20px 0px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: white;
`

const Login = () => {
  return (
    <Container>

      <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
              <Input placeholder="username"/>
              <Input placeholder="password"/>
              <Button>LOGIN</Button>
              <Link href='#'>DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <Link href='#'>CREATE A NEW ACCOUNT</Link>
          </Form>
      </Wrapper>

    </Container>
  )
}

export default Login