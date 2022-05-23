import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import auth from "../../Firebase/firebase.init";
import useCheckAdmin from "../../hooks/useCheckAdmin";



const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useCheckAdmin(user)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        Swal.fire({
            text: ' Please login your admin email .',
            icon: 'error',
            confirmButtonText: 'Okay'
        })
        signOut(auth)
        localStorage.removeItem('accessToken')
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }


    return children;
};

export default RequireAdmin;