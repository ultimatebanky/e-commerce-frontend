import React, { useEffect, useState } from 'react'
import './UserList.scss'
import PageMenu from '../../components/pageMenu/PageMenu'
import UserStats from '../../components/userStats/UserStats'
import Search from '../../components/search/Search'
import { FaTrashAlt } from 'react-icons/fa'
import ChangeRole from '../../components/changeRole/ChangeRole'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../../redux/features/auth/authSlice'
import { shortenText } from '../profile/Profile';
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from 'react-confirm-alert'
import { FILTER_USERS, selectUsers } from '../../redux/features/auth/filterSlice'


const UserList = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const {users, isLoading, isLoggedIn, isSuccess, message} = useSelector((state) => state.auth);

    const filteredUsers = useSelector(selectUsers)

    useEffect(() => {
        dispatch(getUsers())

    }, [dispatch]);

    const removeUser = async (id) => {
        await dispatch(deleteUser(id));
        dispatch(getUsers());
    };

    const confirmDelete = (id) => {
        confirmAlert({
          title: "Delete This User",
          message: "Are you sure to do delete this user?",
          buttons: [
            {
              label: "Delete",
              onClick: () => removeUser(id),
            },
            {
              label: "Cancel",
              onClick: () => alert("Click No"),
            },
          ],
        });
      };

      useEffect(() => {
        dispatch(FILTER_USERS({ users, search}))
      }, [dispatch, users, search])


  return (
    <section className='top'>
        <div className='container'>
            <PageMenu/>
            {/* <UserStats/> */}

            <div className='user-list'>
                <div className='table'>

                    <div className='--flex-between'>
                        <span>
                            <h3>All users</h3>
                        </span>
                        {/* <span>
                            <Search value={search} onChange={(e) => {
                                setSearch(e.target.value)
                            }}/>
                        </span> */}
                    </div>

                        {!isLoading && users?.length === 0 ? 
                        (
                            <p>No user found</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>s/n</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>

                                        <th>Change Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredUsers?.map((user, index) => {

                                        const {_id, name, email, role} = user;

                                        return (

                                            <tr key={_id}>
                                                <td>{index + 1}</td>
                                                <td>{shortenText(name, 9)}</td>
                                                <td>{email}</td>
                                                <td>{role}</td>
                                                
                                                <td>
                                                    <ChangeRole _id={_id} email={email}/>
                                                </td>
                                                <td>
                                                    <span>
                                                        <FaTrashAlt size={28} color='red' onClick= {() => confirmDelete(_id)}/>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                         )}
                </div>
            </div>


        </div>
    </section>
  )
}

export default UserList