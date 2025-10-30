function Button(props){
    return(
        <>
        <button 
        onClick={props.onClick}
        value={props.value}
        className="p-1 m-1 border-1 rounded shadow cursor-pointer">
        {props.children ?? props.value ?? 'Button'}
        </button>
        </>
    );
}

export default Button;