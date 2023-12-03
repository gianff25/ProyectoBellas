import { createContext, useContext, useReducer } from "react";
import InitialReducer, { initialState } from "./InitialReducer";


const InitialContext = createContext();


const InitialProvider = ({children}) => {
    const [state, dispatch] = useReducer(InitialReducer, initialState);

    return (
        <InitialContext.Provider value={[state, dispatch]}>
            {children}
        </InitialContext.Provider>
    )
}

const useLogeado = () => useContext(InitialContext)[0]
const useDispatch = () => useContext(InitialContext)[1]

export {InitialContext, useLogeado, useDispatch}
export default InitialProvider;