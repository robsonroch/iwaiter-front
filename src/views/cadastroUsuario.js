import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import {withRouter} from 'react-router-dom';

import 'bootswatch/dist/flatly/bootstrap.css'
import UsuarioService from '../app/service/usuarioService'

import { msgSucesso, msgErro} from '../components/toastr';

class CadastroUsuario extends React.Component {

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    validar(){
        const msgs = []

        if(!this.state.nome){
            msgs.push('O campo nome é obrigatório.')
        }

        if(!this.state.email){
            msgs.push('O campo Email é obrigatório.')
        }else if(!this.state.email.match(/^[a-z0-9.]+[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe um Email válido.')
        }

        if(!this.state.senha || !this.state.senhaRepeticao){
            msgs.push('Digite a senha 2x.')
        }else if(this.state.senha !== this.state.senhaRepeticao){
            msgs.push('As senhas não batem')
        }

        return msgs
    }

    cadastrar = async () => {

        const msgs = this.validar();
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                msgErro(msg)
            })
            return false;
        }

        try {
            const response = await this.service.salvar(usuario);
            msgSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o SVGFEDisplacementMapElement.')
            this.props.history.push('/login')
            
        } catch (error) {
            msgErro(error.response.data)
        }
        console.log(this.state)
    }

    cancelar = () =>{
        this.props.history.push('/login')
    }

    render() {
        return (

            <Card title='Cadastro de Usuario'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <form>
                                <fieldset>
                                    <FormGroup label='Nome: *' htmlFor='inputNome'>
                                        <input type="text"
                                            id="inputNome"
                                            name="nome"
                                            onChange={e => this.setState({ nome: e.target.value })}
                                            className="form-control"
                                            aria-describedby="nomeHelp"
                                            placeholder="Digite seu nome" ></input>
                                    </FormGroup>
                                    <FormGroup label='Email: *' htmlFor='inputEmail'>
                                        <input type="email"
                                            id="inputEmail"
                                            name="email"
                                            onChange={e => this.setState({ email: e.target.value })}
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Digite o Email" ></input>
                                    </FormGroup>
                                    <FormGroup label='Senha: *' htmlFor='inputSenha'>
                                        <input type="password"
                                            id="inputSenha"
                                            name="senha"
                                            onChange={e => this.setState({ senha: e.target.value })}
                                            className="form-control"
                                            placeholder="Password" ></input>
                                    </FormGroup>
                                    <FormGroup label='Confirmação senha: *' htmlFor='inputSenhaRepeticao'>
                                        <input type="password"
                                            id="inputSenhaRepeticao"
                                            name="senha"
                                            onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                                            className="form-control"
                                            placeholder="Password" ></input>
                                    </FormGroup>
                                    <button onClick={this.cadastrar} type="button"
                                        className="btn btn-success">Salvar</button>
                                    <button 
                                        onClick={this.cancelar}
                                        type="button"
                                        className="btn btn-danger">Voltar</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </Card>

        );
    }
}

export default withRouter(CadastroUsuario);
