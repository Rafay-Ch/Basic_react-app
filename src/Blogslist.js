import { Link } from "react-router-dom";

const Blogslist = ({blogs ,titleeeee ,delet}) => {
    //const blogs = props.blogs;
    
    return ( 
        <div className="blogs">
            <h2>{titleeeee}</h2>
            {blogs.map((blog)=>(
            <div className="blogspreview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h4>{blog.title}</h4>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    {/* <button onClick={()=>delet(blog.id)}>Delete</button> */}
                </Link>
            </div>
        ))}</div>
        
     );
}
 
export default Blogslist;