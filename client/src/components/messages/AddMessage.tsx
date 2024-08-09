import React, { useState } from "react";
import assets from "../../assets";
import { fetchSendMessage } from "../../redux/message/messageSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
interface AddMessageType {}

export const imageTypeFiles: string[] = [
    "image/jpeg",
    "image/svg",
    "image/png",
    "image/jpg",
    "image/gif",
    "image/webp",
    "image/svif",
];

const AddMessage: React.FC<AddMessageType> = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const { isLoading } = useAppSelector((state) => state.messages.sendMessage);

    function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setDescription(event.target.value);
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }

    const [files, setFiles] = useState<any>([]);

    function filesHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const fileList = event.target.files;
        if (fileList) {
            setFiles(Array.from(fileList));
        }
    }

    function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        event.stopPropagation();
    }

    function dropHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        event.stopPropagation();
        const fileList = event.dataTransfer.files;
        if (fileList) {
            setFiles(Array.from(fileList));
        }
    }

    function fileCancelHandler(index: number) {
        setFiles((files: any) => {
            const newFiles = [...files];
            newFiles.splice(index, 1);
            return newFiles;
        });
    }

    async function formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        for (let i = 0; i < files.length; i++) {
            const element = files[i];
            formData.append("files", element);
        }

        try {
            await dispatch(fetchSendMessage(formData));
        } catch (error) {
        } finally {
            setFiles([]);
            setTitle("");
            setDescription("");
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center bg-slate-950 p-1 lg:p-4 text-slate-100 my-6 lg:my-10">
            <form
                method="POST"
                onSubmit={formSubmitHandler}
                className="bg-slate-800 p-6 lg:p-10 border border-solid border-slate-700 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.1)] rounded-3xl w-full"
            >
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-slate-300 font-bold text-xl lg:text-3xl text-center uppercase">
                        Local Data Share App
                    </h1>
                    <button className="px-3 text-center py-1.5 text-lg uppercase bg-slate-700 font-bold tracking-wide duration-500 rounded-md text-blue-500 border-slate-500 hover:text-slate-100 border border-solid shadow-[0px_2px_4px_0px_rgba(255,255,255,0.1)] hover:bg-blue-500 hover:tracking-wider">
                        send message
                    </button>
                </div>
                <hr className="w-full border-t border-solid border-slate-600 mt-4 mb-6" />
                <div
                    className="w-full gap-4 flex-col p-4 border-4 border-dashed min-h-48 border-slate-500 bg-slate-700/50 rounded-3xl flex items-center justify-center duration-500 hover:border-blue-500 hover:scale-105"
                    onDragOver={dragOverHandler}
                    onDrop={dropHandler}
                >
                    <label
                        htmlFor="file"
                        className="block text-xl font-medium text-slate-300 capitalize tracking-wide"
                    >
                        Input your files here...
                    </label>

                    <input
                        type="file"
                        name="files"
                        id="files"
                        multiple={true}
                        hidden={true}
                        onChange={filesHandler}
                    />
                    <button
                        className="block bg-slate-700 text-slate-100 px-6 py-2 text-lg font-semibold uppercase border-[3px] border-dashed duration-500 tracking-wide hover:tracking-wider hover:bg-blue-500 hover:border-blue-500 border-slate-400 rounded-full"
                        onClick={(event) => {
                            document.getElementById("files")?.click();
                            event.preventDefault();
                        }}
                    >
                        browse here
                    </button>
                </div>

                {files.length > 0 && (
                    <div className="w-full mt-6 px-3 pt-4 pb-2 bg-slate-700/50 border-2 border-slate-500 border-dashed rounded-2xl">
                        <div
                            className="w-full gap-4 flex flex-wrap items-center justify-center max-h-60 overflow-x-hidden pr-2"
                            id="custom-scrollbar"
                        >
                            {Array.from(files).map(
                                (file: any, index: number) => (
                                    <figure
                                        key={index}
                                        className="w-full lg:w-31/100 overflow-hidden border-2 border-dashed p-1 hover:border-red-500 rounded-2xl border-slate-500 group relative"
                                    >
                                        {imageTypeFiles.includes(file.type) ? (
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt="Image"
                                                className="w-full h-24 duration-500 group-hover:scale-105 rounded-2xl py-1 px-1.5"
                                            />
                                        ) : null
                                        /* <iframe
                                                className="w-full h-24 duration-500 group-hover:scale-105 rounded-2xl py-1 px-1.5"
                                                src={URL.createObjectURL(file)}
                                                autoFocus={false}
                                            ></iframe> */
                                        }
                                        <i
                                            className="absolute top-0 right-0 p-0.5 fill-slate-100 m-3 rounded-full border-2 border-dotted bg-transparent border-red-500 hover:border-blue-500 duration-300 group child"
                                            onClick={() =>
                                                fileCancelHandler(index)
                                            }
                                        >
                                            <span className="group-[.child:hover]:bg-red-500 hover:rotate-180 rotate-45 cursor-pointer duration-500 block p-1 rounded-full bg-blue-500">
                                                {assets.svg.xMark(16)}
                                            </span>
                                        </i>
                                    </figure>
                                )
                            )}
                        </div>
                    </div>
                )}

                <div className="w-full flex flex-col mt-6 p-4 bg-slate-700/50 border-2 border-slate-500 border-dashed rounded-2xl gap-1">
                    <label
                        htmlFor="title"
                        className="uppercase text-sm text-slate-300 font-semibold tracking-wide"
                    >
                        Write here a title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setTitle(event.target.value)}
                        className="text-lg bg-slate-800 border border-dashed border-slate-500 px-4 py-2 rounded-xl outline-none focus:border-blue-500"
                        placeholder="e.g My first title."
                    />
                </div>

                <div className="w-full flex flex-col mt-6 p-4 bg-slate-700/50 border-2 border-slate-500 border-dashed rounded-2xl gap-1">
                    <label
                        htmlFor="title"
                        className="uppercase text-sm text-slate-300 font-semibold tracking-wide"
                    >
                        Write here a title
                    </label>
                    <textarea
                        value={description}
                        className="text-lg bg-slate-800 overflow-hidden border border-dashed border-slate-500 px-4 py-2 rounded-xl outline-none focus:border-blue-500 resize-none"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        onChange={descriptionHandler}
                    ></textarea>
                </div>

                {isLoading ? (
                    <div className="flex mt-6 gap-1 w-full items-center justify-center">
                        <div className="p-2 bg-slate-700/50 bg-red-500 border-2 border-slate-500 border-dashed rounded-full block">
                            <i className="fill-slate-100 animate-spin block">
                                {assets.svg.loading(36)}
                            </i>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-col mt-6 p-2 bg-slate-700/50 border-2 border-slate-500 border-dashed rounded-2xl gap-1">
                        <button className="w-full text-center py-1 text-lg uppercase bg-slate-700 font-bold tracking-wide duration-500 rounded-xl text-blue-500 border-blue-500 hover:text-slate-100 border border-dashed hover:bg-blue-500 hover:tracking-wider">
                            send message
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddMessage;

/*  const [storeMessage, { isError, isLoading, isSuccess, error, data }] =
        useStoreMessageMutation();

    console.log("STORE MESSAGE: ", {
        isError,
        isLoading,
        isSuccess,
        error,
        data,
    }); */
// import { useStoreMessageMutation } from "../../redux/message/messageApi";
