import React from 'react'

function Home() {
    return (
        <>
            <p>Home</p>
            <div>
                <Link to={"/host"}>Host</Link>
            </div>
            <div>
                <Link to={"/guest"}>Guest</Link>
            </div>
        </>
    )
}

export default Home