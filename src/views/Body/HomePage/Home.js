import { useState } from "react";
import "./Home.scss"
import { toast } from "react-toastify";
import { UserList } from "./UserList";

export const Home = () => {
    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [users, setUsers] = useState([]);

    const deleteUser = (id) => {
        let currentUsers = users
        currentUsers = currentUsers.filter(item => item.id !== id)
        setUsers(currentUsers)
    }

    const handelOnchangeAddress = (event) => {
        setAddressInput(event.target.value)
    }

    const handelOnchangeName = (event) => {
        setNameInput(event.target.value)
    }

    const handleOnclickSubmit = (event) => {
        event.preventDefault()
        if (!nameInput) {
            toast.error('name not empty!')
            return;
        }
        if (!addressInput) {
            toast.error('address not empty!')
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
            <UserList
                users={users}
                deleteUser={deleteUser}
            />
            <div className="add-user">
                <form>
                    <label className="name">Name:</label><br />
                    <input type="text" value={nameInput} onChange={(event) => handelOnchangeName(event)} /><br />
                    <label className="address">Address:</label><br />
                    <input type="text" value={addressInput} onChange={(event) => handelOnchangeAddress(event)} /><br />
                    <button type="submit" onClick={(event) => handleOnclickSubmit(event)}>Save</button>
                </form>
            </div>
        </>
    )
}

