import React, { useState, useEffect } from 'react'
import NavBar  from '../../Components/Nav/NavBar';
import axios from '../../api/axios'
import UserCard from '../../Components/User/UserCard';
import { Link } from 'react-router-dom';


function Index() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    const getProductsData = async() => {
      const {data} = await axios.get('users/allUsers')

      setUsers(data)

    }

    getProductsData()
}, [])

console.log('user', users)


  return (
    <>
      <NavBar />
        <div className='container mt_10'>
        <Link to='/user/create' className="btn btn-primary mb_3">Créer un utilisateur</Link>
            {
                users.map((user) => (
                //  <div>{ product.id }</div>
                    <UserCard user={user} key={user.id}/>
                ))
            }
        </div>
    </>
  )
}

export default Index

