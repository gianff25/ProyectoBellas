
const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}

const initialState = {
    logeado: localStorage.getItem('logeado'),
    rol: 1,
}

const urls = {
    Citas: 'https://localhost:7183/api/Citas',
    Servicios: 'https://localhost:7183/api/Servicios' ,
    Roles: 'https://localhost:7183/api/Rols',
    Usuarios: 'https://localhost:7183/api/Usuarios' 
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
export {urls}
export {initialState}
export default InitialReducer;