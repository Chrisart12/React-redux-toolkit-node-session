import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Nav/NavBar";
import axios from "../../api/axios";
import ProductCard from "../../Components/Product/ProductCard";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../Components/Title";
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import Textarea from "../../Components/Forms/Textarea";

function Index() {
    const params = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [published, setPublished] = useState(null);
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await axios.get(`products/${params.id}`);

            if (data) {
                setTitle(data.title)
                setPrice(data.price) 
                setDescription(data.description) 
                setPublished(data.published)  
            }
        };

        getProductsData();
    }, []);

    let navigate = useNavigate();
   
   
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            title: title,
            price: price,
            description: description,
            category: category,
            published: published,
        };

        // JSON.stringify(user) séréalisation en Symfony
        // Pas besoin en Laravel
        axios
            .put(`/products/${params.id}`, data)

            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    return navigate("/product");
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
                            defaultChecked={!published}
                        />{" "}
                        Non
                        <input
                            className="form-check-input"
                            type="radio"
                            value={true}
                            name="stocked"
                            defaultChecked={published}
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

export default Index;
