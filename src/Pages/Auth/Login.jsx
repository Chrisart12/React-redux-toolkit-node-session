import NavBar from "../../Components/Nav/NavBar";
import { useState } from "react";
import Title from "../../Components/Title";
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/user/userAction'
import { getAuth } from '../../redux/auth/authAction'
// import { categoryList } from '../../redux/category/categoryAction'
import axios from "../../api/axios";

export default function Index() {
    let navigate = useNavigate();
    //   const dispatch = useDispatch();

    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Redux state
    const { loading, error } = useSelector((state) => state.user)


    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            console.log("Tous les champs ne sont pas remplis");
            return;
        }

        const user = {
            email: email,
            password: password,
        };

        dispatch(login(user))
        .then((result) => {
            if (result.payload) {
console.log("rrrrrrrrrrr", result.payload)
               dispatch(getAuth(result.payload)) 

                setEmail('')
                setPassword('')
                return navigate("/product");
            }
        }).catch((error) => {
            console.log("user", error);
        });

        // // JSON.stringify(user) séréalisation en Symfony
        // // Pas besoin en Laravel
        // axios.defaults.withCredentials = true
        // axios
        //     .post(`/auths/login`, user)
        //     .then((res) => {
        //         if (res.data) {
        //             console.log("resultat fff", res.data);
        //             return navigate("/product");
        //         }
        //     })
        //     .catch((error) => {
        //         console.log("user", error);
        //     });
    };

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginTop: "90px" }}>
                <Title title="Se connecter" showTitle={true} />

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="email"
                            className="form-label"
                            label="Email"
                        />
                        <Input
                            className="form-control form-control-md"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            // onChange={setTitle}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabel
                            htmlFor="password"
                            className="form-label"
                            label="Password"
                        />
                        <Input
                            className="form-control form-control-md"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            // onChange={setTitle}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-success btn-block btn-lg  text-body"
                        >
                            { loading? 'Loading...' : 'Valider'}    
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
