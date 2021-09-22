import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My Blog One', body: 'Lorem ipsum...', author: 'Del', id: 1},
        {title: 'My Blog Two', body: 'Lorem ipsum...', author: 'Del', id: 2},
        {title: 'My Blog Three', body: 'Lorem ipsum...', author: 'Berto', id: 3},
        {title: 'My Blog Four', body: 'Lorem ipsum...', author: 'Del', id: 4},
        {title: 'My Blog Five', body: 'Lorem ipsum...', author: 'Berto', id: 5}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogz => blogz.id !== id );
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
           <BlogList blogWatever={blogs} title="All Blogs" handleDelete={handleDelete}/>
           <BlogList blogWatever={blogs.filter((blogzzz) => blogzzz.author === 'Berto')} title="By Berto" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;