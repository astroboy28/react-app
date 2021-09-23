import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('Mario');

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
           {blogs && <BlogList blogWatever={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;