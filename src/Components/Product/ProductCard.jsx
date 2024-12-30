import React from "react";
import { Link, replace } from "react-router-dom";
import axios from "../../api/axios";
import { useNavigate, Navigate   } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { redirect } from "react-router-dom";

function ProductCard({ product }) {

  let navigate = useNavigate();
  // let history = useHistory();
    
    const handleDelete = (id) => {
    
      // JSON.stringify(user) séréalisation en Symfony
      // Pas besoin en Laravel
      axios
          .delete(`/products/${id}`)

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
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} €</p>
                    <p className="card-text">{product.description}</p>
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary"
                    >
                        Détail
                    </Link>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-warning ml_2"
                    >
                        Modifier
                    </Link>
                    <button onClick={() => handleDelete(product.id)} 
                        className="btn btn-danger ml_2"
                    >
                        Effacer
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
