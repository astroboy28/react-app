import { useParams } from "react-router";

const BlogDetails = () => {
    const {idzzz} = useParams();

    return ( 
        <div className="blog-details">
            <h1>This is a Blog Details Page - {idzzz} </h1>
        </div>
     );
}
 
export default BlogDetails;