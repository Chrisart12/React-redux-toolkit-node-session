import React, { useState, useEffect } from 'react'
import NavBar  from '../../Components/Nav/NavBar';
import axios from '../../api/axios'
import ReviewCard from '../../Components/Review/ReviewCard';
import { Link } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { checkAuthentication } from "../../redux/auth/authAction";

import { checkIfAuthenticated }  from '../../helpers/checkIfAuthenticated.js'


function Index() {
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getReviewsData = async() => {

        // Function helpers permettant de vérifier si l'utilisateur est connecté
        checkIfAuthenticated(navigate, dispatch)

      // dispatch(checkAuthentication())
      //       .then((result) => {
      //           if (!result.payload.authorized) {
      //               return navigate("/login");
      //           }
      //       })
      //       .catch((error) => {
      //           console.log("user", error);
      // });


      axios.defaults.withCredentials = true
      // const {data} = await axios.get('reviews/allReviews')
      axios.get(`reviews/allReviews`)
            .then((res) => {
              console.log("resultat fff", res.data);
                if (res.data) {
                  setReviews(res.data)
                }
            })
            .catch((error) => {
              // Si l'utilisateur n'est pas connecté, on fait une redirection vers la page login
              if (error.status === 403) {
                return navigate("/login");
              }
                console.log("userddddddddddddd", error.status);
            });

    }

    getReviewsData()
  }, [])


  return (
    <>
      <NavBar />
        <div className='container mt_10'>
        <Link to='/review/create' className="btn btn-primary mb_3">Créer un review</Link>
            {
                reviews.map((review) => (
                    <ReviewCard review={review} key={review.id}/>
                ))
            }
        </div>
    </>
  )
}

export default Index