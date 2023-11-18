import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // use fetch
                // let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
                // res.json().then(json => {
                //     setdata(json.results)
                // })

                let res = await axios.get(url);
                let data = res && res.data && res.data.results ? res.data.results : [];
                setdata(data);
                setLoading(false);
                console.log('>> get api', data)
            } catch (error) {
                setIsError(true);
                setLoading(false);
            }
        };
        setTimeout(async () => { fetchData() }, 3000);

    }, [url]);

    return {
        data, loading, isError
    }
}