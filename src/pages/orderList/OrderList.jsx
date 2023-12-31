import React, { useEffect, useState } from 'react'
import PageMenu from '../../components/pageMenu/PageMenu'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from 'react-confirm-alert'
import { deleteOrder, getOrders } from '../../redux/features/auth/orderSlice'
import { useSelector } from 'react-redux'
import { FILTER_ORDERS, selectOrders } from '../../redux/features/auth/filterSlice'
import ChangeStatus from '../../components/changeRole/ChangeStatus'
import { shortenText } from '../profile/Profile';


const OrderList = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const filteredOrders = useSelector(selectOrders)
    const {orders, isLoading, isLoggedIn, isSuccess, message} = useSelector((state) => state.order);


    useEffect(() => {
        dispatch(getOrders())

    }, [dispatch]);

    const removeOrder = async (id) => {
        await dispatch(deleteOrder(id));
        dispatch(getOrders());
      };

    const confirmDelete = (id) => {
        confirmAlert({
          title: "Delete This Order",
          message: "Are you sure to do delete this order?",
          buttons: [
            {
              label: "Delete",
              onClick: () => removeOrder(id),
            },
            {
              label: "Cancel",
              onClick: () => alert("Click No"),
            },
          ],
        });
      };

      useEffect(() => {
        dispatch(FILTER_ORDERS({orders, search}))
      }, [dispatch, orders, search])


  return (
    <section className='top'>
        <div className='container'>
            <PageMenu/>
            {/* <OrderStats/> */}

            <div className='user-list'>
                <div className='table'>

                    <div className='--flex-between'>
                        <span>
                            <h3>All Orders</h3>
                        </span>
                        {/* <span>
                            <SearchOrder value={search} onChange={(e) => {
                                setSearch(e.target.value)
                            }}/>
                        </span> */}
                    </div>

                        {!isLoading && orders?.length === 0 ? 
                        (
                            <p>No Order found</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Destination</th>
                                        <th>Change Status</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>

                                <tbody>
                                   {filteredOrders?.map((order, index) => {
                                    const {_id, additional_info, status, destination} = order;
                                    return(
                                        <tr key={_id}>
                                                <td>{index + 1}</td>
                                                <td>{shortenText(additional_info, 8)}</td>
                                                <td>{status}</td>
                                                <td>{destination}</td>
                                                <td>
                                                    <span>
                                                        <ChangeStatus _id={_id} status={status}/>
                                                    </span>
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

export default OrderList