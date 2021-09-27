import { useParams } from "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {
    const { id } = useParams();   // Route parameter
    const { data: blogss, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id); // Reusing Custom Hooks

    return ( 
        <div className="blog-details">
           { isLoading && <div>Loading...</div> }
           { error && <div>{error}</div> }
           { blogss && (
               <article>
                   <h2>{ blogss.title }</h2>
                   <p>Written by: { blogss.author }</p>
                   <div>{ blogss.body }</div>
               </article>
           )}
        </div>
     );
}
 
export default BlogDetails;