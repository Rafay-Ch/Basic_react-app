import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Person A');
  const[pending, setPending]=useState(false);
  const history=useHistory();

  const handlesubmit = (e) =>{
      e.preventDefault();
      const blog ={title,body,author}
      setPending(true)
      fetch('http://localhost:8000/blogs',
      {
          method:'POST',
          headers: { "Content-type": "application/json"},
          body : JSON.stringify(blog)
      }
      ).then(()=>{
      console.log('new blog added');
      setPending(false);
      //history(-1)
      history.push('/');
      }
      )

  } 

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="person A">Person A</option>
          <option value="person B">Person B</option>
        </select>
        { !pending && <button>Add Blog</button> }
        { pending && <button disabled>Adding Blog......</button> }
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
export default Create;