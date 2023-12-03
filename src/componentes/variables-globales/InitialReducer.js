
const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}

const initialState = {
    logeado: localStorage.getItem('logeado'),
    rol: 1,
}

const urls = {
    Citas: 'http://appbellasweb.somee.com/api/citas/',
    Servicios: 'http://appbellasweb.somee.com/api/servicios/' ,
    Roles: 'http://appbellasweb.somee.com/api/roles/',
    Usuarios: 'http://appbellasweb.somee.com/api/usuarios/' 
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