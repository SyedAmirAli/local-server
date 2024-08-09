import React from "react";
import MessagesComponent from "./components/messages";
import TopMenuAction from "./components/header/TopMenuAction";

interface AppTypes {}

const App: React.FC<AppTypes> = () => {
    return (
        <div
            id="custom-scrollbar"
            className="h-screen overflow-x-hidden overflow-y-scroll bg-slate-950"
        >
            <TopMenuAction />
            <MessagesComponent />
        </div>
    );
};

export default App;
