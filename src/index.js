import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/fonts.css'
import App from './App/App';
import * as serviceWorker from "./serviceWorker";
import {UIContextProvider} from "./store/ui-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UIContextProvider>
            <App />
        </UIContextProvider>
    </React.StrictMode>
);

serviceWorker.unregister();
