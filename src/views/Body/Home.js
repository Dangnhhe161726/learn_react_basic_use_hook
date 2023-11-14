import { useState } from "react";
import "./Home.scss"
import { toast } from "react-toastify";

export const Home = () => {
    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'Hong Dang', address: 'Ha Noi' },
        { id: 2, name: 'Thu Thuy', address: 'Ha Noi' }
    ])
    const handelOnchangeAddress = (event) => {
        setAddressInput(event.target.value)
    }

    const handelOnchangeName = (event) => {
        setNameInput(event.target.value)
    }

    const handleOnclick = (event) => {
        event.preventDefault()
        if (!nameInput || !addressInput) {
            toast.error('name and address not empty!')
            return;
        }
        let user = { id: Math.floor(Math.random() * 1000), name: nameInput, address: addressInput }
        // console.log('>> check intput user:', user)
        setUsers([...users, user])
        setNameInput('')
        setAddressInput('')
        toast.success('create user success!');
        console.log('>>>>>>>>>>>>>>>>>>')
    }

    return (
        <>
            <div className="list-user">
                <h2>List user</h2>
                <table className="list-user-item" border={1}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 &&
                            users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}><button className="btn-show">Show</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="add-user">
                <form>
                    <label className="name">Name:</label>
                    <input type="text" value={nameInput} onChange={(event) => handelOnchangeName(event)} />
                    <br />
                    <label className="address">Address:</label>
                    <input type="text" value={addressInput} onChange={(event) => handelOnchangeAddress(event)} />
                    <br />
                    <button type="submit" onClick={(event) => handleOnclick(event)}>Click me</button>
                </form>
            </div>
        </>
    )
}

