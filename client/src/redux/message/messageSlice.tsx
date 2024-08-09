import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import type { RootState } from "@reduxjs/toolkit/query";

export interface File {
    id: number;
    size: number;
    path: string;
    filename: string;
    mimetype: string;
    createAt: string;
    updateAt: string;
    description: string;
    files: string[] | null;
}

export interface Message {
    id: number;
    title: string;
    createAt: string;
    updateAt: string;
    description: string;
    files: File[] | null;
}

export interface MessageStateTypes {
    data: Message[];
    isLoading: boolean;
    isError: boolean;
    error?: string | object;
    sendMessage: {
        data: Message;
        isLoading: boolean;
        isError: boolean;
        error?: string | object;
    };
    delete: {
        data: { id: number | undefined };
        isLoading: boolean;
        isError: boolean;
        error?: string | object;
    };
}

interface FetchMessageResponse {
    data: Message[];
}
interface FetchSendMessageResponse {
    data: Message;
    status: string;
}
interface FetchDeleteMessageResponse {
    data: { id: number };
    status: string;
}

const initialState: MessageStateTypes = {
    data: [],
    isError: false,
    isLoading: false,
    error: undefined,
    sendMessage: {
        data: {
            id: 0,
            title: "",
            createAt: "",
            updateAt: "",
            description: "",
            files: null,
        },
        isError: false,
        isLoading: false,
        error: undefined,
    },
    delete: {
        isError: false,
        isLoading: false,
        error: undefined,
        data: { id: undefined },
    },
};

export const fetchGetMessage = createAsyncThunk(
    "message/getMessage",
    async function () {
        const response = await fetch(window.apiUrl + "message/get");

        const data = await response.json();
        return data as FetchMessageResponse;
    }
);

export const fetchSendMessage = createAsyncThunk(
    "message/sendMessage",
    async function (body: FormData) {
        const response = await fetch(window.apiUrl + "message/store", {
            method: "POST",
            body,
        });
        const data = await response.json();
        return data as FetchSendMessageResponse;
    }
);

export const fetchDeleteMessage = createAsyncThunk(
    "message/deleteMessage",
    async function (id: number) {
        const response = await fetch(window.apiUrl + "message/delete/" + id, {
            method: "DELETE",
        });
        const data = await response.json();
        return data as FetchDeleteMessageResponse;
    }
);

const messageSlice = createSlice({
    name: "message/messageSlice",
    initialState,
    reducers: {
        unshiftMessage: function (state, action) {
            if (
                action.payload.status === "success" &&
                !state.data.some(
                    (message) => message.id === action.payload.data.id
                )
            ) {
                state.data.unshift(action.payload.data);
            }
        },

        deleteMessage: function (state, action) {
            const index = state.data.findIndex(
                (message) => message.id === action.payload.data.id
            );
            if (index > -1) {
                state.data.splice(index, 1);
            }
        },
    },
    extraReducers: function (
        builder: ActionReducerMapBuilder<MessageStateTypes>
    ) {
        builder
            .addCase(fetchGetMessage.pending, function (state) {
                state.isError = false;
                state.isLoading = true;
                state.data = [];
            })
            .addCase(fetchGetMessage.fulfilled, function (state, action) {
                state.isError = false;
                state.isLoading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchGetMessage.rejected, function (state) {
                state.isError = true;
                state.isLoading = false;
                state.error = "Server Error!";
            })
            .addCase(fetchSendMessage.pending, function (state) {
                state.sendMessage.isLoading = true;
                state.sendMessage.isError = false;
                state.sendMessage.error = undefined;
            })
            .addCase(fetchSendMessage.fulfilled, function (state, action) {
                state.sendMessage.isLoading = false;
                state.sendMessage.isError = false;
                state.sendMessage.error = undefined;
                state.sendMessage.data = action.payload.data;
                if (
                    action.payload.status === "success" &&
                    !state.data.some(
                        (message) => message.id === action.payload.data.id
                    )
                ) {
                    state.data.unshift(action.payload.data);
                }
            })
            .addCase(fetchSendMessage.rejected, function (state) {
                state.delete.isLoading = false;
                state.delete.isError = true;
                state.delete.error = "Server Error!";
            })
            .addCase(fetchDeleteMessage.pending, function (state) {
                state.delete.isLoading = true;
                state.delete.isError = false;
                state.delete.error = undefined;
            })
            .addCase(fetchDeleteMessage.fulfilled, function (state, action) {
                state.delete.isLoading = false;
                state.delete.isError = false;
                state.delete.error = undefined;
                state.delete.data = action.payload.data;

                const index = state.data.findIndex(
                    (message) => message.id === action.payload.data.id
                );
                if (index > -1) {
                    state.data.splice(index, 1);
                }
            })
            .addCase(fetchDeleteMessage.rejected, function (state) {
                state.delete.isLoading = false;
                state.delete.isError = true;
                state.delete.error = "Server Error!";
            });
    },
});

export const { unshiftMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;

export const selectMessages = (state: RootState<any, any, any>) =>
    state.messages;
