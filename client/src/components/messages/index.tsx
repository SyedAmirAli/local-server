import React, { useEffect } from "react";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    deleteMessage,
    unshiftMessage,
} from "../../redux/message/messageSlice";
interface MessageComponentsType {}

const MessagesComponent: React.FC<MessageComponentsType> = () => {
    const dispatch = useAppDispatch();
    const { messageForm } = useAppSelector((state) => state.headers.topMenu);

    useEffect(
        function () {
            const handleStoredMessage = (data: any) => {
                dispatch(unshiftMessage(data));
            };
            const handleDeletedMessage = (data: any) => {
                dispatch(deleteMessage(data));
            };

            window.socket.on("stored-message", handleStoredMessage);
            window.socket.on("deleted-message", handleDeletedMessage);

            // Cleanup the WebSocket listener on unmount
            return () => {
                window.socket.off("stored-message", handleStoredMessage);
                window.socket.off("deleted-message", handleDeletedMessage);
            };
        },
        [dispatch]
    );

    return (
        <div className="flex flex-col 2xl:flex-row gap-4 2xl:gap-10 p-2 bg-slate-950 text-slate-50 items-start justify-center">
            {messageForm.isActive && <AddMessage />}
            <MessageList />
        </div>
    );
};

export default MessagesComponent;
