import { Link, NavLink } from "react-router-dom";
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios'
import { getAuth } from '../../redux/auth/authAction'


export default function NavBar() {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    // Redux state
    const { user } = useSelector((state) => state.auth);

    function handleLogout(){
        axios.defaults.withCredentials = true // permet de gérer les page nécessitant la connexion
        axios.post(`auths/logout`)
            .then((res) => {
                if(res.data.authorized == false) {

                    dispatch(getAuth(null)) 

                    return navigate("/login");
                
                }
                
            })
            .catch((error) => {
                console.log("user", error.status);
            });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand pl_4" href="/home">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/product">
                            Produits
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user">
                            utilisateurs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/review">
                            Reviews
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/count">
                            Count
                        </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="/">
                                Action
                            </a>
                            <a className="dropdown-item" href="/">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">
                                Something else here
                            </a>
                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav pr_4">
                    {user && user.authorized ? (
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {user.user.firstname}
                            </a>
                            <div
                                className="dropdown-menu dropdown_menu_custom mr_5"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="/">
                                    Profil
                                </a>
                                
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item" onClick={handleLogout}>
                                    Se déconnecter
                                </div>
                            </div>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
            </div>
        </nav>
    );
}
