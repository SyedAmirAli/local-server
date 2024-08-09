import React, { useState } from "react";
import {
    fetchDeleteMessage,
    File,
    Message,
} from "../../redux/message/messageSlice";
import assets from "../../assets";
import { imageTypeFiles } from "./AddMessage";
import { useAppDispatch } from "../../redux/hooks";
interface MessageItemType {
    message: Message;
}

const MessageItem: React.FC<MessageItemType> = ({ message }) => {
    const dispatch = useAppDispatch();
    const [isShowDescription, setShowDescription] = useState<boolean>(false);

    async function deleteHandler() {
        const conf = confirm(
            "Are you sure to delete the message for permanently!"
        );

        conf && (await dispatch(fetchDeleteMessage(message.id)));
    }

    return (
        <div className="bg-slate-800 px-3 py-2 text-lg font-semibold mt-4 border border-solid border-slate-600">
            <div className="w-full flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-between">
                <div
                    className="flex gap-4 items-center w-full"
                    onClick={() => setShowDescription(!isShowDescription)}
                >
                    <span className="mt-0.5 block px-4 py-1 rounded-xl border border-solid border-blue-900 text-md bg-blue-500">
                        {message.id}
                    </span>
                    <span className="block">{message.title}</span>
                </div>
                <div
                    className={`flex gap-2 group ${
                        isShowDescription ? "active" : ""
                    }`}
                >
                    <button
                        onClick={deleteHandler}
                        className="bg-slate-900 p-1 border border-dashed border-slate-500 rounded-md duration-500 hover:border-red-500"
                    >
                        <i className="p-2 fill-slate-100 block bg-red-500 rounded-md hover:bg-slate-100 hover:fill-red-500 duration-500">
                            {assets.svg.trash(20)}
                        </i>
                    </button>
                    <button className="bg-slate-900 p-1 border border-dashed border-slate-500 rounded-md duration-500 hover:border-fuchsia-500">
                        <i className="p-2 fill-slate-100 block bg-fuchsia-500 rounded-md hover:bg-slate-100 hover:fill-fuchsia-500 duration-500">
                            {assets.svg.edit(20)}
                        </i>
                    </button>
                    <button
                        onClick={() => setShowDescription(!isShowDescription)}
                        className="bg-slate-900 p-1 border border-dashed border-slate-500 rounded-md duration-500 hover:border-blue-500 group-[.active]:rotate-180"
                    >
                        <i className="p-2 fill-slate-100 block bg-blue-500 rounded-md hover:bg-slate-100 hover:fill-blue-500 duration-500 group-[.active]:bg-slate-100 group-[.active]:fill-blue-500 group-[.active]:hover:bg-blue-500 group-[.active]:hover:fill-slate-100">
                            {assets.svg.chevron(20)}
                        </i>
                    </button>
                </div>
            </div>

            {isShowDescription && (
                <div className="w-full">
                    <div className="w-full border-y border-dashed border-slate-500 my-2 py-3">
                        <p className="text-md leading-5 text-slate-300 font-normal px-2 py-0.5">
                            {message.description}
                        </p>
                    </div>

                    {message.files?.map((file) => (
                        <MessageItemFile key={file.id} file={file} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MessageItem;

interface MessageItemFileType {
    file: File;
}

const MessageItemFile: React.FC<MessageItemFileType> = ({ file }) => {
    const { id, filename, path, mimetype } = file;

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between bg-slate-900 p-2 border border-dashed border-slate-500 rounded my-2">
                <figure className="block p-1 border border-dashed border-slate-500 rounded ">
                    {imageTypeFiles.includes(file.mimetype) ? (
                        <img
                            src={window.apiUrl + path + filename}
                            alt={filename}
                            className="w-10 h-10 block"
                        />
                    ) : (
                        <p className="px-2">
                            <span className="font-mono">{mimetype}</span>
                            <span className="font-normal text-slate-200 px-2">
                                type contents aren't showing
                            </span>
                        </p>
                    )}
                </figure>

                <a
                    href={window.apiUrl + "download/" + id}
                    target="_blank"
                    className="bg-slate-900 p-1 border border-dashed border-slate-500 rounded-md duration-500 hover:border-fuchsia-500"
                    // onClick={handleDownload}
                >
                    <i className="p-1 fill-slate-100 block rounded-md hover:bg-slate-100 hover:fill-fuchsia-500 duration-500">
                        {assets.svg.download(26)}
                    </i>
                </a>
            </div>
        </div>
    );
};
