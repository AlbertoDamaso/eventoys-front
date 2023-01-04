import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./screens/Home";
import RegisterPerson from "./screens/RegisterPerson";
import ChangePerson from "./screens/ChangePerson";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/person" element={ <RegisterPerson/> }/>
                <Route path="/changeperson/:id" element={ <ChangePerson/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;