import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
// Programmatic Redirects


const BlogDetails = () => {
    const { id } = useParams();   // Route parameter
    const { data: blogss, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id); // Reusing Custom Hooks

    // Delete an article/blog
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blogss.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
           { isLoading && <div>Loading...</div> }
           { error && <div>{error}</div> }
           { blogss && (
               <article>
                   <h2>{ blogss.title }</h2>
                   <p>Written by: { blogss.author }</p>
                   <div>{ blogss.body }</div>
                   <button onClick={handleClick}>Delete</button>
               </article>
           )}
        </div>
     );
}
 
export default BlogDetails;