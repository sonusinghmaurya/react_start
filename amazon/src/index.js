import React from 'react';
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
import ContextProvider from './ContextProvider.jsx';

createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <App/>
    </ContextProvider>
)