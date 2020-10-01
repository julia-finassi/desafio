import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//inicial state
const initialState = {
    users: [
        {id: 1, name: 'user one'},
        {id: 2, name: 'user two'},
        {id: 3, name: 'user three'}
    ]
};

//create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext value={{
            users: state.users
        }}>
            {children}
        </GlobalContext>
    )
}
