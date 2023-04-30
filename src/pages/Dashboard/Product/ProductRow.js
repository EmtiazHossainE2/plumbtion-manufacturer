import React from "react";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";

const ProductRow = ({ product, index, refetch }) => {
  const { _id } = product;
  // console.log(product);

  const handleDelete = () => {
    const url = `${BASE_API}/tool/${_id}`;
    Swal.fire({
      text: `Are you sure to cancel  ?`,
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
      <td>
        {product?.img && (
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={product?.img} alt="User Profile" />
            </div>
          </div>
        )}
      </td>
      <td>{product.name}</td>
      <td>
        {product.available} <small>/ps</small>
      </td>
      <td>
        {product.minOrder} <small>/ps</small>
      </td>
      <td>${product.price}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-error text-white btn-xs font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
