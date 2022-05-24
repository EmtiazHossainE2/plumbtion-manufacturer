
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageOrderRow = ({ order, index, refetch }) => {
    // console.log(order);
    const { _id, paid,pipeName } = order
    // console.log(order);

    const handleDelete = () => {
        const url = `http://localhost:5000/all-order/${_id}`;
        Swal.fire({
            text: `Are you sure to delete ${pipeName} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                }).then(data => {
                    // console.log(data);
                    if (data.status) {
                        Swal.fire({
                            text: `Successfully Delete `,
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        refetch()
                    }
                })
            }
        })

    }



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
                    <button onClick={handleDelete} className='  btn-xs font-bold'>
                        <span className='text-2xl text-red-400'><RiDeleteBin5Line /></span>
                    </button>
                }

            </td>
        </tr>
    );
};

export default ManageOrderRow;