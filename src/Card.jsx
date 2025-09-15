import profilePic from '/src/1.jpg'
function Card(){
    return(
        <div className="cardContainer">
            <img alt="Profile Picture" src={profilePic}></img>
            <h2> Tanmay Kangule</h2>
            <p>As a Software Engineer, I specialize in designing, developing, and maintaining scalable and efficient software solutions.</p>
            <button> Hire Me</button>
        </div>
    );
}

export default Card