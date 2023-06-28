import React, {useContext, useState} from "react";

const UIContext = React.createContext({
    isAsideOpen: false,
    onAsideToggle: () => {},
    AsideToggle: (state) => {}
});

export const UIContextProvider = ({children}) => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const onAsideToggleHandler = () => {
        setIsAsideOpen(value => !value);
    }

    const AsideToggleHandler = (state) => {
        setIsAsideOpen(state);
    }

    return (
        <UIContext.Provider
            value={{
                isAsideOpen: isAsideOpen,
                onAsideToggle: onAsideToggleHandler,
                AsideToggle: AsideToggleHandler
            }}
        >
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => useContext(UIContext);
