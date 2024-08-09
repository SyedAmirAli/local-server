import React, { useEffect } from "react";
import { fetchGetMessage } from "../../redux/message/messageSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MessageItem from "./MessageItem";

interface MessageListType {}

const MessageList: React.FC<MessageListType> = () => {
    const dispatch = useAppDispatch();
    useEffect(function () {
        dispatch(fetchGetMessage());
    }, []);

    const { /* isLoading, isError, error, */ data } = useAppSelector(
        (state) => state.messages
    );
    // console.log({ isLoading, isError, error, data });

    return (
        <div className="w-full bg-slate-950 text-slate-50 flex items-center justify-center 2xl:py-10">
            <div className="bg-slate-900 p-6 pt-2 border border-solid border-slate-700 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.1)] w-full">
                {data.map((message) => (
                    <MessageItem key={message.id} message={message} />
                ))}
            </div>
        </div>
    );
};

export default MessageList;
