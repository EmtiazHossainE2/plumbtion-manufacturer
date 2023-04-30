import React from "react";
import Swal from "sweetalert2";
import demoProfile from "../../../assets/images/demoProfile.png";
import { BASE_API } from "../../../config";

const UserList = ({ user, index, refetch }) => {
  // console.log(user);
  const { email, role } = user;

  const makeAdmin = () => {
    const url = `${BASE_API}/user/admin/${email}`;
    Swal.fire({
      text: "Are you sure to make admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admin",
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
                text: "Your are unable to make Admin",
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
                text: `Successfully added an Admin`,
                icon: "success",
                confirmButtonText: "Thank you.",
              });
            }
          });
      }
    });
  };
  const makeUser = () => {
    const url = `${BASE_API}/user/user/${email}`;
    Swal.fire({
      text: "Are you sure to remove admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove",
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
                text: "Your are unable to remove",
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
                text: `Successfully remove`,
                icon: "success",
                confirmButtonText: "Thank you.",
              });
            }
          });
      }
    });
  };

  const handleDelete = () => {
    const url = `${BASE_API}/user/${email}`;
    Swal.fire({
      text: `Are you sure to delete  ?`,
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
        {user?.photoURL ? (
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} alt="User Profile" />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-12 rounded">
              <img src={demoProfile} alt="Demo Profile" />
            </div>
          </div>
        )}
      </td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <div className="text-lg text-green-500 font-bold">Admin</div>
        ) : (
          <div className="text-md">user</div>
        )}
      </td>
      <td>
        {role === "admin" ? (
          <button onClick={makeUser} className="btn btn-xs">
            Remove Admin
          </button>
        ) : (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={handleDelete} className="btn btn-xs btn-error">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UserList;
