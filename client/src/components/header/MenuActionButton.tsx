import React from "react";

interface MenuActionButtonTypes {
    title: string;
    isActive: boolean;
    showCallback: () => void;
    hideCallback: () => void;
    activeColor: string;
    notActiveColor: string;
}

const MenuActionButton: React.FC<MenuActionButtonTypes> = ({
    title,
    isActive,
    showCallback,
    hideCallback,
    activeColor,
    notActiveColor,
}) => {
    function changeHandler() {
        if (isActive) {
            hideCallback();
        } else {
            showCallback();
        }
    }

    return (
        <label
            htmlFor="check-form-show-hide"
            className="flex gap-1 items-center justify-center cursor-pointer"
            onClick={changeHandler}
        >
            <span
                className="block w-7 h-7 rounded-full border-[3px] p-1 border-solid"
                style={{ borderColor: isActive ? activeColor : notActiveColor }}
            >
                {isActive && (
                    <span
                        className="block w-full h-full rounded-full"
                        style={{
                            backgroundColor: isActive
                                ? activeColor
                                : notActiveColor,
                        }}
                    ></span>
                )}
            </span>
            <input
                type="checkbox"
                className="appearance-none"
                onChange={changeHandler}
            />
            <span
                className="block text-lg text-red font-semibold"
                style={{ color: isActive ? activeColor : notActiveColor }}
            >
                {title}
            </span>
        </label>
    );
};

export default MenuActionButton;
