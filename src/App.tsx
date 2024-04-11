import './App.css'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import ProductList from './Pages/ProductList/ProductList';

function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products/:id", element: <ProductList /> },
        { path: "/product/:id", element: <Product /> },
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
