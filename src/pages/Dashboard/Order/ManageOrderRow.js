import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ManageOrderRow = ({ order, index, refetch }) => {
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{order?.pipeName}</td>
            <td>{order?.email}</td>
            <td>{order.orderQuantity} <small>/ps</small></td>
            <td>$ {order.totalPrice}</td>
            <td><span className='text-error'>Unpaid</span></td>
            <td><button className='btn btn-error text-white btn-xs font-bold'>Pending</button></td>
            <td>
                <button className='  btn-xs font-bold'>
                    <span className='text-2xl text-red-400'><RiDeleteBin5Line /></span>
                </button>
            </td>
        </tr>
    );
};

export default ManageOrderRow;