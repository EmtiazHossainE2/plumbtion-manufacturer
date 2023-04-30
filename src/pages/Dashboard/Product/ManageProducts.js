import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import PageTitle from "../../../components/PageTitle";
import auth from "../../../Firebase/firebase.init";
import ProductRow from "./ProductRow";
import { BASE_API } from "../../../config";

const ManageProducts = () => {
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(`${BASE_API}/tool`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      // console.log('res', res);
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        Swal.fire({
          text: "Session expired sign in again . .",
          icon: "error",
          confirmButtonText: "Okay",
        });
        navigate("/login");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  // console.log(myOrders);

  return (
    <div>
      <PageTitle title="Manage Product -"></PageTitle>
      <h2 className="md:p-4 text-xl">Manage All Products {products.length}</h2>
      <div className="md:p-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Pipe Name</th>
                <th>Available</th>
                <th>Min Order Quantity</th>
                <th> Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow
                  key={index}
                  index={index}
                  product={product}
                  refetch={refetch}
                ></ProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
