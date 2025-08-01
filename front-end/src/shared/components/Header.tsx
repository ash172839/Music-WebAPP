import { Link } from "react-router-dom";

const Header = ()=>{
    return (<div>
        <Link to="/">Home</Link> 
        &nbsp;
        <Link to="/login">Login</Link>
        &nbsp;
         <Link to="/register">Register</Link>
             &nbsp;
        {localStorage.token && localStorage.role =='admin' &&  <Link to="/add-songs">Add New Song</Link> }
            &nbsp;
         {localStorage.token && <Link to="/lib">My Library</Link> }
    </div>)
}
export default Header;