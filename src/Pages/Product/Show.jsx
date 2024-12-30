import React, { useState, useEffect } from 'react'
import NavBar  from '../../Components/Nav/NavBar';
import axios from '../../api/axios'
import ProductCard from '../../Components/Product/ProductCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Index() {

    const params = useParams();
    const [product, setProducts] = useState([])

    useEffect(() => {
        const getProductsData = async() => {
        const {data} = await axios.get(`products/${params.id}`)

        setProducts(data)

        }

        getProductsData()
    }, [])


    return (
        <>
            <NavBar />
            
            <div className='container mt_10'>
            <Link to='/product/create' className="btn btn-primary mb_3">Créer un produit</Link>
                <ProductCard product={product} key={product.id}/>
            </div>
        </>
    )
}

export default Index
