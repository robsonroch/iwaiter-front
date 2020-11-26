import ApiService from '../apiservice'

import User from '../models/usuario'

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`);
    }

    salvar(user){
        return this.post('/', user);        
    }
}

export default UsuarioService;