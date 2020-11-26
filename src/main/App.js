import React from 'react';

import Navbar from '../components/navbar'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import Rotas from './rotas';

class App extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <div className='container'>
          <Rotas />
        </div>
      </>
    );
  }
}

export default App;
