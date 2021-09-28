import { useState } from "react";
// Controlled Inputs (forms)
import { useHistory } from "react-router-dom";
// Programmatic Redirects

const Create = () => {
    const [title, setTitle] = useState('');  
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // Submit Events
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        // Making a POST Request
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');  // redirects to home page
        });
    }

    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                       required   
                       value={ title } 
                       onChange = {(e) => setTitle(e.target.value)}          
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={ body } 
                    onChange = {(e) => setBody(e.target.value)} 
                ></textarea>
                <label>Blog author:</label>
                <select
                    value = { author }
                    onChange = {(e) => setAuthor(e.target.value)} 
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Add Blog</button> }
            </form>
        </div>
     );
}
 
export default Create;