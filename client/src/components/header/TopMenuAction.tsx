import React from "react";
import MenuActionButton from "./MenuActionButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    hideMessageForm,
    showMessageForm,
} from "../../redux/header/headerSlice";

const TopMenuAction: React.FC = () => {
    const dispatch = useAppDispatch();
    const { messageForm, messageList } = useAppSelector(
        (state) => state.headers.topMenu
    );

    function showMessageFormCallback() {
        dispatch(showMessageForm());
    }
    function hideMessageFormCallback() {
        dispatch(hideMessageForm());
    }

    return (
        <div className="p-4 w-full flex items-center justify-center">
            <div className="flex gap-2 lg:gap-32 flex-col lg:flex-row items-center justify-center rounded-2xl lg:justify-around p-4 lg:py-4 lg:px-6 bg-slate-800 border border-dashed border-slate-600">
                <MenuActionButton
                    title={messageForm.title}
                    isActive={messageForm.isActive}
                    activeColor={messageForm.activeColor}
                    notActiveColor={messageForm.notActiveColor}
                    showCallback={showMessageFormCallback}
                    hideCallback={hideMessageFormCallback}
                />
                <MenuActionButton
                    activeColor={messageList.activeColor}
                    notActiveColor={messageList.notActiveColor}
                    title={messageList.title}
                    isActive={messageList.isActive}
                    showCallback={() => null}
                    hideCallback={() => null}
                />
            </div>
        </div>
    );
};

export default TopMenuAction;
