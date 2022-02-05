import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrips = async () => {
            setIsPending(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();

                setIsPending(false);
                setData(json);
                setError(null);
            } catch (err) {
                setIsPending(false);
                setError('Could not fetch data');
                console.log(err.message);
            }
        };
        fetchTrips();
    }, [url]);

    return { data, isPending, error };
}