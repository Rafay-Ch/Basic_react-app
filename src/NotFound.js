import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>Sorry</h1>
            <p>Page cannot be found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;