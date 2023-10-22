export default function Home(props) {
    if(props.loggedIn) {
        return <logged in></logged>
    } else {
        return <not logged in></not>
    }
}