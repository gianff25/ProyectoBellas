
import { Navigate} from "react-router-dom";


const PrivateRoute = ({children, logeado, redirectTo, isRol, isRegistro}) => {

    // if(logeado == 1 && isRol == false){
    //     return <Navigate to={redirectTo} />
    // }

    if(logeado === 0 && isRegistro === true){
        return children;
    }
    return logeado === 1 ? children : <Navigate to={redirectTo} /> 

}
export default PrivateRoute;