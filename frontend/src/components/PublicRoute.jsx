import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const PublicRoute = ({children}) => {
    const {authUser} = useSelector((store)=>store.user);

    if(authUser){
        return <Navigate to='/' replace/>
    }

    return children;
}

export default PublicRoute