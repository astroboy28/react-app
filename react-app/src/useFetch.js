import { useState, useEffect } from "react";

// Custom hooks should start with the keyword "use" i.e. "useFetch" 
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not get the data');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error }
}
 
export default useFetch;