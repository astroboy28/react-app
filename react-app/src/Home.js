import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogz => blogz.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    return ( 
        <div className="home">
            {/* <p>{ name }</p>
            <button onClick={() => setName('Luigi')}>Click me</button> */}
           {blogs && <BlogList blogWatever={blogs} title="All Blogs" handleDelete={handleDelete}/>}
           {/* <BlogList blogWatever={blogs.filter((blogzzz) => blogzzz.author === 'Berto')} title="By Berto" handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;