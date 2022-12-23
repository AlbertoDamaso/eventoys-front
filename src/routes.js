import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/signup" element={ <SignUp/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;