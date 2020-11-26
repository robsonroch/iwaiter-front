import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';

import UsuarioService from '../app/service/usuarioService';
import LocalStorageService from '../app/service/localstorageService'
import { msgErro } from '../components/toastr'

import 'bootswatch/dist/flatly/bootstrap.css'

class Login extends React.Component {

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }


    entrar = async () => {

        try {
            const response = await this.service.autenticar({
                email: this.state.email,
                senha: this.state.senha
            })
            console.log(response);
            LocalStorageService.addItem("_usuario_logado", response.data)
            this.props.history.push('/home')
            
        } catch (error) {
            msgErro(error.response.data);
        }
        
    }

   /* entrar = () => {

        axios.post(
            'http://localhost:9090/api/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => { this.props.history.push('/home') })
            .catch(erro => { this.setState({mensagemErro: erro.response.data}) })
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.senha)
    }

    another way

    entrar = async () => {

        try {
            const response = await axios.post(
                'http://localhost:9090/api/usuarios/autenticar', {
                email: this.state.email,
                senha: this.state.senha
            })
            localStorage.setItem("_usuario_logado", JSON.stringify(response.data))
            this.props.history.push('/home')
            
        } catch (error) {
            console.log(error);
            this.setState({mensagemErro: error.response.data})
        }
            
    }*/


    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px', border: '1px solid black' }}>
                    <div className="bs-docs-section">
                        <Card title='Login'>
                            <div className="row">
                                <span>{this.state.mensagemErro}</span>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
                                                <FormGroup label='Email: *' htmlFor='exampleInputEmail1'>
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o Email" ></input>
                                                </FormGroup>
                                                <FormGroup label='Senha: *' htmlFor='exampleInputPassword'>
                                                    <input type="password"
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({ senha: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputPassword"
                                                        placeholder="Password" ></input>
                                                </FormGroup>
                                                <button onClick={this.entrar} type="button"
                                                    className="btn btn-success">Entrar</button>
                                                <button
                                                    onClick={this.prepareCadastrar}
                                                    type="button"
                                                    className="btn btn-danger">Cadastrar</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Login);
