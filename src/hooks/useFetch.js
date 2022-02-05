import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const fetchTrips = async () => {
            setIsPending(true);

            const response = await fetch(url);
            const json = await response.json();

            setIsPending(false);
            setData(json);
        };
        fetchTrips();
    }, [url]);

    return { data, isPending };
}