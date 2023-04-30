import { useEffect, useState } from "react";
import { BASE_API } from "../config";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log('inside token' , user);
    const email = user?.user?.email;
    const displayName = user?.user?.displayName;
    const creationTime = user?.user?.metadata?.creationTime;
    const lastLogin = user?.user?.metadata?.lastSignInTime;
    const currentUser = {
      email,
      displayName,
      creationTime,
      lastLogin,
    };
    if (email) {
      fetch(`${BASE_API}/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('inside useToken' ,  data)
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
