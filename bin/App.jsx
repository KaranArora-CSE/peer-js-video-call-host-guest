import React from "react";
import { io } from 'socket.io-client';


const URL = 'http://localhost:3000';
const socket = io(URL);

function App() {
  return <p>Hii from react</p>
}

export default App;