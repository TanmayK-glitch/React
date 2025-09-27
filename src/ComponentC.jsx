import { use, useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentC() {

    const user = useContext(UserContext);
    return (
        <>
            <div className="box">
                <h1>{`Nikal ${user}`}</h1>
            </div>
        </>
    );
}

export default ComponentC