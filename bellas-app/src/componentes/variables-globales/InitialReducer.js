
const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}

const initialState = {
    logeado: localStorage.getItem('logeado'),
    rol: 1,
}

const InitialReducer = (state, action) => {


    switch(action.type){
        case types.authLogin:
            return {logeado: localStorage.getItem('logeado')};
        case types.authLogout:
            return {logeado: localStorage.getItem('logeado')};
        default:
            return state;
    }
}
export {types}
export {initialState}
export default InitialReducer;