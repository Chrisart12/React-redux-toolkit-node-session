import NavBar from "../../Components/Nav/NavBar";
import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import Select from "../../Components/Forms/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from '../../redux/category/categoryAction'
import axios from "../../api/axios";
import Textarea from "../../Components/Forms/Textarea";

import { checkAuthentication } from "../../redux/auth/authAction";

export default function Index() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [published, setPublished] = useState(null);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState([]);
    //   const [categories, setCategories] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            title: title,
            price: price,
            description: description,
            category: category,
            published: published,
        };

        // JSON.stringify(user) séréalisation en Symfony
        // Pas besoin en Laravel
        axios.defaults.withCredentials = true;
        axios.post(`/products/addProduct`, product)

            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    // return navigate("/product")
                }
            })
            .catch((error) => {
                console.log("eeeeeeeeeeeeeee", error);
            });
    };


    useEffect(() => {
        dispatch(checkAuthentication())
            .then((result) => {
                if (!result.payload.authorized) {
                    return navigate("/login");
                }
            })
            .catch((error) => {
                console.log("user", error);
            });
    });

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginTop: "90px" }}>
                <Title title="Créer un produit" showTitle={true} />

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="name"
                            className="form-label"
                            label="Nom du produit"
                        />
                        <Input
                            className="form-control form-control-md"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Titre du produit"
                            value={title}
                            // onChange={setTitle}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="price"
                            className="form-label"
                            label="Prix"
                        />
                        <Input
                            className="form-control form-control-md"
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Prix"
                            value={price}
                            // onChange={setTitle}
                            onChange={(e) => setPrice(e.target.value)}
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
                            htmlFor="category"
                            className="form-label"
                            label="Categorie"
                        />
                        {/* <Select 
                className="form-select" 
                name='category' 
                defaultValue="null" 
                label="Choisir une categorie"
                onChange={(e) => setCategory(e.target.value)}
                  items={categories.map((category) => (
                    <option value={category.slug} key={category.slug}>{category.label}</option>
                    
                ))}
                
                required='required'
              /> */}
                    </div>
                    <div
                        className="mb-4"
                        onChange={(e) => setPublished(e.target.value)}
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            value={false}
                            name="stocked"
                        />{" "}
                        Non
                        <input
                            className="form-check-input"
                            type="radio"
                            value={true}
                            name="stocked"
                        />{" "}
                        Oui
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
