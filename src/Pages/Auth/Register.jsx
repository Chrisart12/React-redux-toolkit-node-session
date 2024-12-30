import NavBar  from '../../Components/Nav/NavBar';
import { useState } from "react";
import Title from '../../Components/Title';
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import Select from "../../Components/Forms/Select";
import { useNavigate  } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from '../../redux/category/categoryAction'
import axios from '../../api/axios';
import Textarea from '../../Components/Forms/Textarea';


export default function Index() {

 
  let navigate = useNavigate();
//   const dispatch = useDispatch();

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
//   const [categories, setCategories] = useState([])


const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !email || !password || !passwordConfirm ) {
        console.log("Tous les champs ne sont pas remplis")    
        return
    }

    // On vérifie si le mot de passe confirm correspond
    if (password != passwordConfirm) {

        console.log("Le mot de passe n'est pas identique")
        return
    }

    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    };

    console.log("OK !")

    console.log("OK !", user)

    // JSON.stringify(user) séréalisation en Symfony
    // Pas besoin en Laravel
    axios.post(`/users/addUser`, user)
    
        .then(res => {
            if (res.data) {
                console.log("resultat", res.data)
                return navigate("/user")
            }
            
        }).catch(error => {
            console.log("user", error);
        })

}

    return (
      <>
      <NavBar />
        <div className="container"  style={{ marginTop: '90px' }}>

        <Title title="Créer un produit" showTitle={true} />

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
              <InputLabel
                  htmlFor="firstname"
                  className="form-label"
                  label="Prénom"
              />
              <Input
                  className="form-control form-control-md"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom" 
                  value={firstname}
                  // onChange={setTitle}
                  onChange={(e) => setFirstname(e.target.value)}
                  required

              />
          </div>
          <div className="mb-4">
              <InputLabel
                  htmlFor="lastname"
                  className="form-label"
                  label="Lastname"
              />
              <Input
                  className="form-control form-control-md"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname" 
                  value={lastname}
                  // onChange={setTitle}
                  onChange={(e) => setLastname(e.target.value)}
                  required
              />
          </div>

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

          <div className="mb-4">
              <InputLabel
                  htmlFor="passwordConfirm"
                  className="form-label"
                  label="Confirmation mot de passe"
              />
              <Input
                  className="form-control form-control-md"
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="Confirmation mot de passe" 
                  value={passwordConfirm}
                  // onChange={setTitle}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
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
