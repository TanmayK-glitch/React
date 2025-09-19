function Button() {
    const clickEvent = (e) => e.target.textContent = "Clicked";
    return (
        <>
            <button onClick={(e) => clickEvent(e)}>Click Me</button>
        </>
    );
}
export default Button