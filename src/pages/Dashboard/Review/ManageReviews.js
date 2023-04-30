import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import PageTitle from "../../../components/PageTitle";
import auth from "../../../Firebase/firebase.init";
import ManageReviewRow from "./ManageReviewRow";
import { BASE_API } from "../../../config";

const ManageReviews = () => {
  const navigate = useNavigate();

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`${BASE_API}/review`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
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

  console.log(reviews);

  return (
    <div>
      <PageTitle title="Manage Reviews -"></PageTitle>
      <h2 className="md:p-4 text-xl">Manage Reviews {reviews.length} </h2>
      <div className="md:p-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Country </th>
                <th>Rating </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <ManageReviewRow
                  key={index}
                  index={index}
                  review={review}
                  refetch={refetch}
                ></ManageReviewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
