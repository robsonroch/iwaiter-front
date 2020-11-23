import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

import 'bootswatch/dist/flatly/bootstrap.css'

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>

                    </div>
                    <div className="bs-docs-section">
                        <Card title='Login'>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
                                                <FormGroup label='Email: *' htmlFor='exampleInputEmail1'>
                                                    <input type="email" 
                                                           className="form-control" 
                                                           id="exampleInputEmail1" 
                                                           aria-describedby="emailHelp"
                                                           placeholder="Digite o Email" ></input>
                                                </FormGroup>
                                                <FormGroup label='Senha: *' htmlFor='exampleInputPassword'>
                                                    <input type="password" 
                                                           className="form-control" 
                                                           id="exampleInputPassword"
                                                           placeholder="Password" ></input>
                                                </FormGroup>
                                                <button onclick="window.location.href='home.html'" type="button"
                                                    className="btn btn-success">Entrar</button>
                                                <button onclick="window.location.href='usuarios.html'" type="button"
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

export default Login;
