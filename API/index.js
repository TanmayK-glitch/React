import { use } from "react";

export const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
    });

    const data = await response.json();

    return data;
};

export const userData = async () => {
    const user = await fetch('https://randomuser.me/api/', {
        method: 'GET',
    });

    const userDetails = await user.json();

    return userDetails;
};