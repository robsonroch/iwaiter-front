import React from 'react'

import UsuarioService from '../app/service/usuarioService';
import LocalStorageService from '../app/service/localstorageService';

class Home extends React.Component {

    constructor() {
        super();
        this.usuarioService = new UsuarioService();
    }

    state = {
        saldo: 0
    }



    async componentDidMount(){

        const usuarioLogado = LocalStorageService.getItem("_usuario_logado");

        try {
            const response = await this.usuarioService.obterSaldoPorUsuario(usuarioLogado.id);
                this.setState({saldo: response.data})
                console.log(response)

        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de pedidos.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                </p>
            </div>
        )
    }
}

export default Home;