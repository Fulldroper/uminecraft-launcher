import React, {useContext, useState} from "react";

const UIContext = React.createContext({
    isAsideOpen: false,
    onAsideToggle: () => {},
});

export const UIContextProvider = ({children}) => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const onAsideToggleHandler = () => {
        setIsAsideOpen(!isAsideOpen);
    }

    return (
        <UIContext.Provider
            value={{
                isAsideOpen: isAsideOpen,
                onAsideToggle: onAsideToggleHandler
            }}
        >
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => useContext(UIContext);
