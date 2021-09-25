import { useState, useEffect } from "react";

// Custom hooks should start with the keyword "use" i.e. "useFetch" 
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();  // useEffect Cleanup

        fetch(url, { signal: abortConst.signal })
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
                if(err.name === 'AbortError') {
                    console.log('LLLLOOOOO');
                } else {
                    setError(err.message);
                    setIsLoading(false);
                }     
            });
        return () => abortConst.abort();  // useEffect Cleanup
    }, [url]);

    return { data, isLoading, error }
}
 
export default useFetch;