import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PublicRoute({children}){
    const isAuth = useSelector( (state) => state.auth.isAuth );

    if(isAuth){
        return <Navigate to="/DashboardPage" replace/>
    }

    return children
}

export default PublicRoute