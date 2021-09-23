import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not get the data');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <div className="home">
           {isLoading && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {blogs && <BlogList blogWatever={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;