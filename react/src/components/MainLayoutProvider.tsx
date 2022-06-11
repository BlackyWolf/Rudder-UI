import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface MainLayoutState {
    heading: string;
    setHeading: Dispatch<SetStateAction<string>>;
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const defaultState: MainLayoutState = {
    heading: 'Rudder UI',
    setHeading: () => {},
    showSidebar: false,
    setShowSidebar: () => {}
};

const MainLayoutContext = createContext<MainLayoutState>(defaultState);

export const useMainLayout = () => useContext(MainLayoutContext);

type Properties = PropsWithChildren<{}>

export const MainLayoutProvider = ({ children }: Properties) => {
    const [heading, setHeading] = useState('Rudder UI');
    const [showSidebar, setShowSidebar] = useState(false);

    const state = {
        heading, setHeading,
        showSidebar, setShowSidebar
    };

    return (
        <MainLayoutContext.Provider value={state}>
            {children}
        </MainLayoutContext.Provider>
    );
};
