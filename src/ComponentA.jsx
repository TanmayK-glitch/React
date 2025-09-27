import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Tanmay");
    return (
        <>
            <div className="box">
                <h1>{`Hello ${user}`}</h1>
                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>
            </div>
        </>
    );
}

export default ComponentA