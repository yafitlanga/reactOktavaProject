import React from "react";
import { Link } from "react-router-dom"; 

function Footer() {
    return(
        <footer>
        <p>כתובת, טלפון</p>
        <p>mail</p>
        <p>שעות פתיחה</p>        
        <Link to={"contactUs"}>צור קשר</Link><br></br>
        <Link to={"concerts"}>הופעות</Link>
        </footer>
    )
}

export default Footer;