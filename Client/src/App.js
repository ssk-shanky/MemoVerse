import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./Auth/Auth";
import {GoogleOAuthProvider} from '@react-oauth/google';
import dotenv from 'dotenv';

dotenv.config();
const App = () => (
    <BrowserRouter>
    <GoogleOAuthProvider clientId = {process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN} >
        <Container maxWidth = "lg">
            <Navbar/>
            <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/auth" exact component = {Auth}/>
            </Switch>
        </Container>
    </GoogleOAuthProvider>
    </BrowserRouter>
);

export default App