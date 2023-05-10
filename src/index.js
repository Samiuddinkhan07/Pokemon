import React from 'react';
import App from './app'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createRoot }  from 'react-dom/client';
import AppWrapperContext from './Components/context/WrapperContext';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <AppWrapperContext>
        <App/>
        </AppWrapperContext>
    </React.StrictMode>
)

