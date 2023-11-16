import axios from "axios";
import { useEffect, useState } from "react";

export const ImagePokemon = (props) => {
    const [img, setImg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = props.url
                let res = await axios.get(url);
                setImg(res.data.sprites.other.dream_world.front_default)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [props]);

    return (
        <>
            <img src={img} alt="pokemon" height={50} width={50} />
        </>
    )
}