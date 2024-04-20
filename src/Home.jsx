import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Home</p>
            <div><Link to={"/host"}>Host</Link></div>
            <div><Link to={"/guest"}>Guest</Link></div>
        </div>
    )
}

export default Home