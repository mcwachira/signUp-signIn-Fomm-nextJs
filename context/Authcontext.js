import React, { useContext } from 'react'

const AuthContext = React.createContext()


//enclosing our children components using authProvider. enabling them to get state  stored in our parent
export function AuthProvider({ children, value }) {

    return (
        <AuthContext.Provider value={value}>

            {children}
        </AuthContext.Provider>
    )
}


//seAuthValue allows us to easily access the value passed to AuthContext.Provider.
export function useAuthValue() {
    return useContext(AuthContext)
}