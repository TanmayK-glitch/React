function userGreeting(props){
    const welcomeMsg = <h2> Welcome {props.name}!!</h2>
    const loginMsg = <h2> Please Log in to continue..</h2>

    return(props.isLoggedin ? welcomeMsg : loginMsg);
}

export default userGreeting