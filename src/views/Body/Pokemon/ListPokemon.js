import "./ListPokemon.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImagePokemon } from "./ImagePokemon";

export const ListPokemon = () => {
    const [dataPokemon, setDataPokemon] = useState([]);
    const [quantity, setQuantity] = useState('10');

    const handleOnClickSelect = (event) => {
        setQuantity(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // use fetch
                // let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
                // res.json().then(json => {
                //     setDataPokemon(json.results)
                // })

                let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=0`);
                let data = res && res.data && res.data.results ? res.data.results : [];
                setDataPokemon(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="select-quantity">
                <select value={quantity} onChange={(event) => handleOnClickSelect(event)}>
                    <option value={10}>10</option>
                    <option value={100}>100</option>
                    <option value={500}>500</option>
                </select>
            </div>
            <h1>List Pokemon</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name Pokemon</th>
                        <th>Image</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataPokemon && dataPokemon.length > 0 &&
                        dataPokemon.map((item, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td><ImagePokemon url={item.url} /></td>
                                    <td><button>Detail</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}