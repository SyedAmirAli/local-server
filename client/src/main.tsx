import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/index.tsx";

interface MySocket {
    on(event: string, callback: (data: any) => void): void;
    emit(event: string, data: object): void;
    off(event: string, callback: (data: any) => void): void;
}

declare global {
    interface Window {
        socket: MySocket;
        baseUrl: string;
        apiUrl: string;
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
