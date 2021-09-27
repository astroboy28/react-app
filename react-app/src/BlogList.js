import { Link } from 'react-router-dom';

const BlogList = ({blogsssss}) => {
    // (props)  --- destructure ---
    // const blogs = props.blogWatever;
    // const title = props.title;


    return ( 
        <div className="blog-list">
           {blogsssss.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                   <Link to ={`/blogs/${blog.id}`}>
                      <h2>{blog.title}</h2>
                      <p>Written by: {blog.author}</p>
                   </Link>
                </div>
           ))}
        </div>
     );
}
 
export default BlogList;