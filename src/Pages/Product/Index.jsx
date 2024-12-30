import React, { useState, useEffect } from 'react'
import NavBar  from '../../Components/Nav/NavBar';
import axios from '../../api/axios'
import ProductCard from '../../Components/Product/ProductCard';
import { Link } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "../../redux/auth/authAction";


function Index() {

  const [products, setProducts] = useState([])

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    const getProductsData = async() => {

      dispatch(checkAuthentication())
            .then((result) => {
                if (!result.payload.authorized) {
                    return navigate("/login");
                }
            })
            .catch((error) => {
                console.log("user", error);
      });

      axios.defaults.withCredentials = true // permet de gérer les page nécessitant la connexion
      // const {data} = await axios.get('products/allProducts')

      axios.get(`products/allProducts`)
            .then((res) => {
              console.log("resultat fff", res);
                if (res.data) {
                  setProducts(res.data)
                }
            })
            .catch((error) => {
              // Si l'utilisateur n'est pas connecté, on fait une redirection vers la page login
              if (error.status === 403) {
                return navigate("/login");
              }
                console.log("user", error.status);
            });
      // setProducts(data)
    }

    getProductsData()
}, [])

  return (
    <>
      <NavBar />
        <div className='container mt_10'>
        <Link to='/product/create' className="btn btn-primary mb_3">Créer un produit</Link>
            {
                products.map((product) => (
                //  <div>{ product.id }</div>
                    <ProductCard product={product} key={product.id}/>
                ))
            }
        </div>
    </>
  )
}

export default Index

