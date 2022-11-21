import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { StorageRead } from "../utils/Storage";

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(StorageRead(STORAGE_KEY_USER))

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;