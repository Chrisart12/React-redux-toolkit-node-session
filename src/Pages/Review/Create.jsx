import NavBar from "../../Components/Nav/NavBar";
import { useState, useEffect } from "react";
import Title from "../../Components/Title";
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import Select from "../../Components/Forms/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { categoryList } from '../../redux/category/categoryAction'
import axios from "../../api/axios";
import Textarea from "../../Components/Forms/Textarea";
// import { checkAuthentication } from "../../redux/auth/authAction";


import { checkIfAuthenticated }  from '../../helpers/checkIfAuthenticated.js'


export default function Index() {
 
    let navigate = useNavigate();
    const dispatch = useDispatch();


    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [productId, setProductId] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        // Function helpers permettant de vérifier si l'utilisateur est connecté
        checkIfAuthenticated(navigate, dispatch)

        // console.log(' checkIfAuthenticated()',  checkIfAuthenticated())
        // dispatch(checkAuthentication())
        //     .then((result) => {
        //         if (!result.payload.authorized) {
        //             return navigate("/login");
        //         }
        //     })
        //     .catch((error) => {
        //         console.log("user", error);
        //     });


        const getProductsData = async () => {
            axios.defaults.withCredentials = true
            const { data } = await axios.get("products/allProducts");

            setProducts(data);
        };

        getProductsData();
    }, []);


 

    const handleSubmit = (event) => {
        event.preventDefault();

        const review = {
            rating: rating,
            description: description,
            productId: productId,
        };

        console.log('review', review)

        // JSON.stringify(user) séréalisation en Symfony
        // Pas besoin en Laravel
        axios
            .post(`/reviews/addReview`, review)

            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    return navigate("/review");
                }
            })
            .catch((error) => {
                console.log("eeeeeeeeeeeeeee", error);
            });
    };

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginTop: "90px" }}>
                <Title title="Créer un review" showTitle={true} />

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="rating"
                            className="form-label"
                            label="Rating"
                        />
                        <Input
                            className="form-control form-control-md"
                            type="text"
                            name="rating"
                            id="rating"
                            placeholder="Rating"
                            value={rating}
                            // onChange={setTitle}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabel
                            htmlFor="description"
                            className="form-label"
                            label="Description"
                        />
                        <Textarea
                            className="form-control form-control-md"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={description}
                            // onChange={setTitle}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="product"
                            className="form-label"
                            label="Produit"
                        />
                        <Select
                            className="form-select"
                            name="productId"
                            defaultValue="null"
                            label="Choisir un produit"
                            onChange={(e) => setProductId(e.target.value)}
                            items={products.map((product) => (
                                <option value={product.id} key={product.id}>
                                    {product.title}
                                </option>
                            ))}
                            required="required"
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-success btn-block btn-lg  text-body"
                        >
                            Valider
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
