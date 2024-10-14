import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"; 
import AppRoutes from "./Routes"; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <AppRoutes setIsLoggedIn={setIsLoggedIn} />
        </Router>
    );
}

export default App;
