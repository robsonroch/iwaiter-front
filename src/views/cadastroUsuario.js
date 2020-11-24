import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import {withRouter} from 'react-router-dom';

import 'bootswatch/dist/flatly/bootstrap.css'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
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
