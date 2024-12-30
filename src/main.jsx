import React from 'react'
import './assets/sass/app.scss';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductIndex from './Pages/Product/Index.jsx'
import ProductShow from './Pages/Product/Show.jsx'
import ProductEdit from './Pages/Product/Edit.jsx'
import ProductCreate from './Pages/Product/Create.jsx'

import ReviewIndex from './Pages/Review/Index.jsx'
import ReviewCreate from './Pages/Review/Create.jsx'

import Register from './Pages/Auth/Register.jsx'
import Login from './Pages/Auth/Login.jsx'
import UserIndex from './Pages/User/Index.jsx'
import UserShow from './Pages/User/Show.jsx'


// import EditTitle from './Pages/Title/EditTitle.jsx'
// import Timer from './Pages/Timer/Timer.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Pemret de faire fonctionner le dropdown, dans boostrap 5 data-toggle="dropdown" must change to data-bs-toggle="dropdown"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import TheUseMemo from './Pages/TheHooks/TheUseMemo.jsx'
// import TheUseRef from './Pages/TheHooks/TheUseRef.jsx'

import { Provider } from "react-redux";
import {store} from './redux'


import CounterShow from './Pages/Test/Counter.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/product',
    element: <ProductIndex />,
  },
  {
    path: '/product/:id',
    element: <ProductShow/>,
  },
  {
    path: '/product/:id/edit',
    element: <ProductEdit/>,
  },
  {
    path: '/product/create',
    element: <ProductCreate />,
  },
  {
    path: '/review',
    element: <ReviewIndex />,
  },
  {
    path: '/review/create',
    element: <ReviewCreate/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <UserIndex />,
  },
  {
    path: '/user/:id',
    element: <UserShow/>,
  },


  {
    path: '/count',
    element: <CounterShow/>,
  },
  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

