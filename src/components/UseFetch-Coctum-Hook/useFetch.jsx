import React, { useEffect, useState } from "react";

const useFetch = ( url, option = {} ) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async () => {
        setPending(true);
        try {
            const response = await fetch(url, { ...option });
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message)
        } finally {
            setPending(false);
        }
    };
    useEffect(() => { fetchData() }, [url]);

    return { data, error, pending }
};

export default useFetch;
