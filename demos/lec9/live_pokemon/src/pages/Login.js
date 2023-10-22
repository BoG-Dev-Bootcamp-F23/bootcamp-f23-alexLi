export default function Login( loggedIn, setLoggedIn ) {
    return (
        <div>
            <h1> Auth Page </h1>
            (loggedIn ? 
            <button>Log In</button> :
            <button>Log Out</button>)
        </div>
    )
}