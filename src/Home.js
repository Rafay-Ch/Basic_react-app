//import { useState , useEffect} from "react";
import Blogslist from './Blogslist'
import UseFetch from "./UseFetch";
const Home = () => {

    const{pending,error,data}=UseFetch('http://localhost:8000/blogs');

    // const deleteblogt = (id) =>{
    //     const newblog = blogs.filter(blog => blog.id !== id)
    //     setblog(newblog)
    // }
    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { pending && <div> Laoding.....</div>}
            {/* { blogs && <Blogslist blogs={blogs} titleeeee="All blogs" delet={deleteblogt} />} */}
            { data && <Blogslist blogs={data} titleeeee="All blogs" />}
             </div>
        );
    }
 
export default Home;