import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export interface HeadersStateTypes {
    topMenu: {
        messageForm: {
            title: string;
            isActive: boolean;
            activeColor: string;
            notActiveColor: string;
        };
        messageList: {
            title: string;
            isActive: boolean;
            activeColor: string;
            notActiveColor: string;
        };
    };
}

const initialState: HeadersStateTypes = {
    topMenu: {
        messageForm: {
            title: "Hide The Message Form",
            isActive: true,
            notActiveColor: "#ef4444",
            activeColor: "#f1f5f9",
        },
        messageList: {
            title: "Hide Message List",
            isActive: true,
            notActiveColor: "#ef4444",
            activeColor: "#f1f5f9",
        },
    },
};

const headerSlice = createSlice({
    name: "header/createSlice",
    initialState,
    reducers: {
        showMessageForm: function (state) {
            state.topMenu.messageForm.title = "Hide The Message Form";
            state.topMenu.messageForm.isActive = true;
        },

        hideMessageForm: function (state) {
            state.topMenu.messageForm.title = "Show The Message Form";
            state.topMenu.messageForm.isActive = false;
        },
    },
});

export default headerSlice.reducer;
export const { showMessageForm, hideMessageForm } = headerSlice.actions;
export const selectHeaderTopMenu = (state: RootState<any, any, any>) =>
    state.topMenu;
