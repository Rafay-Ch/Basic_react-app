import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const{pending,error,data:blog} = UseFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handle = () => {
        fetch('http://localhost:8000/blogs/' + blog.id ,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="BlogDetails">
            <h1>Blog Details - {id}</h1>
            { error && <div>{error}</div> }
            { pending && <div> Laoding.....</div>}
            {
                blog && (
                    <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={handle}>Delete</button>
                    </article>
                )
            }

        </div>
     );
}
 
export default BlogDetails;