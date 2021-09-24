import { useState, useEffect } from 'react';  // this import is not needed here so it should be deleted...
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');


    return ( 
        <div className="home">
           {isLoading && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {blogs && <BlogList blogWatever={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;
