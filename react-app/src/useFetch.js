import { useState, useEffect } from "react";

// Custom hooks should start with the keyword "use" i.e. "useFetch" 
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();  // useEffect Cleanup

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not get the data');
                }
                return res.json();
            })
            .then(data => {
                setIsLoading(false);  // Error handling
                setData(data);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {  // useEffect Cleanup
                    console.log('Fetch Aborted');  // useEffect Cleanup
                } else {
                    // auto catches network / connection error
                    setError(err.message);
                    setIsLoading(false);
                }     
            });
        return () => abortCont.abort();  // useEffect Cleanup
    }, [url]);

    return { data, isLoading, error };
}
 
export default useFetch;