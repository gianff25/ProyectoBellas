
import { Navigate} from "react-router-dom";


const PrivateRoute = ({children, logeado, redirectTo, isRol}) => {

    if(logeado == 1 && isRol == false){
        return <Navigate to={redirectTo} />
    }

    return logeado == 1 ? children : <Navigate to={redirectTo} /> 

}
export default PrivateRoute;