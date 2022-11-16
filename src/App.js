import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList'
import Cart from "./pages/Cart";
import { QueryClientProvider ,QueryClient} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const user = true
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/products" element={<ProductList/>} />

        <Route path="/products/:category" element={<ProductList/>} />

        <Route path="/product/:id" element={<Product/>} />

        <Route path="/cart" element={<Cart/>}/>

        <Route path="/login" element={
          user ? <Navigate to={"/"}/> : <Login/>
        } />

        <Route path="/register" element={
          user ? <Navigate to={"/"}/> : <Register />
        } />

       </Routes>
    </BrowserRouter>
    <ReactQueryDevtools position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
 