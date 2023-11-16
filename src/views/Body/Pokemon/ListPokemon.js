import "./ListPokemon.scss";
import { ImagePokemon } from "./ImagePokemon";
import { useFetch } from "../../../customize/fetch";

export const ListPokemon = () => {
    const { data: dataPokemon, loading, isError } = useFetch(' https://pokeapi.co/api/v2/pokemon?limit=$500&offset=0')

    return (
        <>
            <h1>List Pokemon</h1>
            {
                loading === false && dataPokemon && dataPokemon.length > 0 &&
                <table id="customers">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name Pokemon</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataPokemon.map((item, index) => {
                                return (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td><ImagePokemon url={item.url} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }

            {
                loading === true &&
                <div className="loader"></div>
            }

            {
                isError === true &&
                <h1 style={{ color: 'red' }}>Something wrong...</h1>
            }


        </>
    )
}