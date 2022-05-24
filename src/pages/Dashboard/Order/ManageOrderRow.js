import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ManageOrderRow = ({ order, index, refetch }) => {
    // console.log(order);
    const { paid } = order

    return (
        <tr >
            <th>{index + 1}</th>
            <td>{order?.pipeName}</td>
            <td>{order?.email}</td>
            <td>{order.orderQuantity} <small>/ps</small></td>
            <td>$ {order.totalPrice}</td>
            <td>
                {paid
                    ?
                    <p><span className='text-success'>Paid</span></p>
                    :
                    <span className='text-error'>Unpaid</span>
                }
            </td>
            <td><button className='btn btn-error text-white btn-xs font-bold'>Pending</button></td>
            <td>
                {paid
                    ?
                    <button disabled className=' btn-xs font-bold'>
                        <span className='text-2xl text-[#cdcccc]'><RiDeleteBin5Line /></span>
                    </button>
                    :
                    <button className='  btn-xs font-bold'>
                        <span className='text-2xl text-red-400'><RiDeleteBin5Line /></span>
                    </button>
                }

            </td>
        </tr>
    );
};

export default ManageOrderRow;