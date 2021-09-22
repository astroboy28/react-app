const BlogList = ({blogWatever, title, handleDelete}) => {
    // (props)  --- destructure ---
    // const blogs = props.blogWatever;
    // const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
           {blogWatever.map((blogzss) => (
               <div className="blog-preview" key={blogzss.id}>
                   <h2>{blogzss.title}</h2>
                   <p>Written by: {blogzss.author}</p>
                   <button onClick={() => handleDelete(blogzss.id)}>Delete</button>
               </div>
           ))}
        </div>
     );
}
 
export default BlogList;