import { Link } from 'react-router-dom';

const BlogList = ({blogWatever, title}) => {
    // (props)  --- destructure ---
    // const blogs = props.blogWatever;
    // const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
           {blogWatever.map((blogzss) => (
               <div className="blog-preview" key={blogzss.id}>
                   <Link to ={`/blogs/${blogzss.id}`}>
                    <h2>{blogzss.title}</h2>
                    <p>Written by: {blogzss.author}</p>
                   </Link>
                </div>
           ))}
        </div>
     );
}
 
export default BlogList;