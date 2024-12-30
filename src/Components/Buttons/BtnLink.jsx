import {Link } from "react-router-dom";

export default function BtnLink({ className = '', link, label }) {
    return (
        
        <Link to={link} className={`btn ` + className}> {label } </Link>
    );

   
}