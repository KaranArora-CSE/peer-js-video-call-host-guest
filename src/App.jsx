import React from 'react'

import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Host from './Host'
import Guest from './Guest'
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/host' element={<Host />}></Route>
                <Route path='/guest' element={<Guest />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App