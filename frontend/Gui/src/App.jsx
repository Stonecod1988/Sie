import React from 'react'
import './App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router} from "react-router-dom";
import CustomHeader from "./Components/Header";
import CustomFooter from "./Components/Footer";
import BaseRouter from "./routes";


function App() {

    return (
            <Router>
                <CustomHeader/>
                <BaseRouter/>
                <CustomFooter/>
            </Router>
    );
}

export default App
