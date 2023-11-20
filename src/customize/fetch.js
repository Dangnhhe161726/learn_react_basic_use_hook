import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                // use fetch
                // let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
                // res.json().then(json => {
                //     setdata(json.results)
                // })

                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                let data = res && res.data && res.data.results ? res.data.results : [];
                setdata(data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('>> error', error.message)
                } else {
                    setIsError(true);
                    setLoading(false);
                }
            }
        };

        setTimeout(async () => { fetchData() }, 3000);
        //Cancel token use when request api
        return () => {
            ourRequest.cancel();
        }
    }, [url]);

    return {
        data, loading, isError
    }
}