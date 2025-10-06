import React from "react";

function UserCard(props) {
    console.log(props.data);
    return (
        <>
            <div>
                <h3>{props.data.name.first} {props.data.name.last}</h3>
                <p>{props.data.phone}</p>
                <p>{props.data.location.city} {props.data.location.state}</p>
            </div>
        </>
    );
}

export default UserCard;