//FIRST WE CREATE COMPONENTS FOLDER AND THE UNDER CREATE FILE Layout.js ,LgRegistration.js
//Login.js,Registration.js,TotalLists.js,Updatedt.js and the create under node file server.js

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LgRegistration from "./components/LgRegistration";
import Login from "./components/Login";
import Registration from "./components/Registration";
import TotalList from "./components/TotalList";
import Updatedt from "./components/Updatedt";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<Layout />} >

                            <Route index element={<Registration />} />
                            <Route path="/registration" element={<Registration />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/totalList" element={<TotalList />} />
                            <Route path="/LgRegistration" element={<LgRegistration />} />
                            <Route path="/updatedt/:user_id" element={<Updatedt />} />

                        </Route>

                    </Routes>
                </BrowserRouter>
            </div>
            </div>
            );
}
export default App;