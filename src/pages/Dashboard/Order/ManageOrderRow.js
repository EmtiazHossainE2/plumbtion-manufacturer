import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, paid, pipeName } = order;
  // console.log(order);

  const handlePending = () => {
    const url = `${BASE_API}/all-order/order/${_id}`;
    Swal.fire({
      text: "Are you sure this product is shipped ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Shipped",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => {
            if (res.status === 403) {
              Swal.fire({
                text: "Your are unable to  shipped",
                icon: "error",
                confirmButtonText: "Okay",
              });
            }
            return res.json();
          })
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                text: `Successfully Shipped`,
                icon: "success",
                confirmButtonText: "Thank you.",
              });
            }
          });
      }
    });
  };

  const handleDelete = () => {
    const url = `${BASE_API}/all-order/${_id}`;
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
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((data) => {
          // console.log(data);
          if (data.status) {
            Swal.fire({
              text: `Successfully Delete `,
              icon: "success",
              confirmButtonText: "Okay",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order?.pipeName}</td>
      <td>{order?.email}</td>
      <td>
        {order.orderQuantity} <small>/ps</small>
      </td>
      <td>$ {order.totalPrice}</td>
      <td>
        {paid ? (
          <p>
            <span className="text-success">Paid</span>
          </p>
        ) : (
          <span className="text-error">Unpaid</span>
        )}
      </td>
      <td>
        {paid ? (
          <>
            {order?.process ? (
              <h2 className="text-green-500">Shipped</h2>
            ) : (
              <button
                onClick={handlePending}
                className="btn btn-error text-white btn-xs font-bold"
              >
                Pending
              </button>
            )}
          </>
        ) : (
          <button
            disabled
            className="btn btn-error text-white btn-xs font-bold"
          >
            Pending
          </button>
        )}
      </td>
      <td>
        <button
          disabled={paid}
          onClick={handleDelete}
          className="  btn-xs font-bold  disabled:text-[#a09d9d] disabled:cursor-not-allowed text-red-400"
        >
          <span className="text-2xl ">
            <RiDeleteBin5Line />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
