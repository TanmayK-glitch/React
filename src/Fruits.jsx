function Food(){
    const fruit1 = "Orange";
    const fruit2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{fruit1}</li>
            <li>{fruit2.toUpperCase()}</li>
            <hr></hr>
            <br></br>
        </ul>
    );
}

export default Food