import React from "react";
import { Link, replace } from "react-router-dom";
import axios from "../../api/axios";
import { useNavigate, Navigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { redirect } from "react-router-dom";

function ReviewCard({ review }) {
    let navigate = useNavigate();
    // let history = useHistory();

    const handleDelete = (id) => {
        // JSON.stringify(user) séréalisation en Symfony
        // Pas besoin en Laravel
        axios
            .delete(`/reviews/${id}`)

            .then((res) => {
                return window.location.reload();
                // return  <Navigate to="/" replace={true} />
                // return redirect("/");
            })
            .catch((error) => {
                console.log("eeeeeeeeeeeeeee", error);
            });
    };

    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{review.rating}</h5>
                    <p className="card-text">{review.description}</p>
                    <p className="card-text">{review.productId}</p>
                    <Link
                        to={`/review/${review.id}`}
                        className="btn btn-primary"
                    >
                        Détail
                    </Link>
                    <Link
                        to={`/review/${review.id}/edit`}
                        className="btn btn-warning ml_2"
                    >
                        Modifier
                    </Link>
                    <button
                        onClick={() => handleDelete(review.id)}
                        className="btn btn-danger ml_2"
                    >
                        Effacer
                    </button>
                </div>
            </div>
        </>
    );
}

export default ReviewCard;
