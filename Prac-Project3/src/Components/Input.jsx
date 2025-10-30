function Input(props) {
    return (
        <>
            <input onChange={props.onChange}
                placeholder="Enter City"
                value={props.value}
                className="p-2 m-2 border-2 rounded-2xl">
            </input>
        </>
    );
}

export default Input;