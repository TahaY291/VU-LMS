import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [nav, setNav] = useState(false)
    const [index, setIndex] = useState(false)
    const [courseName, setCourseName] = useState("")
    return(
        <UserContext.Provider value={{user, setUser, nav, setNav, index, setIndex, courseName, setCourseName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider