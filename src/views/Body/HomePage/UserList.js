import { useState } from "react";
import { toast } from "react-toastify";

export const UserList = (props) => {
    const { users, deleteUser } = props
    const [check, setCheck] = useState(false)

    const onClickButtonShow = () => {
        setCheck(true)
    }

    const onClickButtonHide = () => {
        setCheck(false)
    }

    const onclickButtonDelete = (user) => {
        let checkDelete = window.confirm('Do you want to delete user' + user.name);
        if (checkDelete) {
            deleteUser(user.id);
            toast.success('Delete user success')
            return;
        }
        toast.error('Delete user failed')
    }

    return (
        <>
            <div className="list-user">
                <h2>List user</h2>
                {check === false ?
                    <>
                        <button className="btn-show" onClick={() => onClickButtonShow()}>Show</button>
                    </>
                    :
                    <>
                        {users && users.length > 0 ?
                            <table className="list-user-item" border={1}>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Address</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                                <td><button onClick={() => onclickButtonDelete(user)}>X</button></td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                            :
                            <></>
                        }
                        <button className="btn-show" onClick={() => onClickButtonHide()}>Hide</button>
                    </>
                }

            </div>
        </>
    )
}