import React from 'react';
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>} exact></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
