// socketMiddleware.ts

import { Middleware } from "@reduxjs/toolkit";

export interface WebSocketMessage {
    // Define the shape of your WebSocket message
    type: string;
    data: any;
}

export interface WebSocketState {
    socket: any;
    messages: WebSocketMessage[];
}
interface ConnectAction {
    type: "socket/CONNECT";
    payload: string; // URL for WebSocket connection
}

interface MessageReceivedAction {
    type: "socket/MESSAGE_RECEIVED";
    payload: WebSocketMessage;
}

export type SocketAction = ConnectAction | MessageReceivedAction;

const socketMiddleware: Middleware = (store) => (next) => (action: any) => {
    if (action.type === "socket/CONNECT") {
        window.socket.on("connect", () => {
            console.log("Socket.IO connected");
        });

        window.socket.on("message", (data: WebSocketMessage) => {
            store.dispatch({
                type: "socket/MESSAGE_RECEIVED",
                payload: data,
            });
        });

        window.socket.on("disconnect", () => {
            console.log("Socket.IO disconnected");
        });

        window.socket.on("error", (error: Error) => {
            console.error("Socket.IO error", error);
        });

        store.dispatch({
            type: "socket/SET_CONNECTION",
            payload: window.socket,
        });
    }

    return next(action);
};

export default socketMiddleware;
