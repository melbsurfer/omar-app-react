import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import AppNav from './AppNav';

import ImageListFilter from './ImageListFilter';
import ImageList from './ImageList';

//import grailsLogo from './images/grails-cupsonly-logo-white.svg';
//import reactLogo from './images/logo.svg';
//import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from './config';
import { CLIENT_VERSION, REACT_VERSION } from './config';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();

    this.state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      }
    }
  }

  render() {
    const serverInfo = this.state.serverInfo;
    const clientInfo = this.state.clientInfo;

    return (
      <div>
        <AppNav serverInfo={serverInfo} clientInfo={clientInfo}/>
        <Grid>
          <div id="content">
            <section className="row colset-2-its">
              <h1 style={{textAlign: 'center'}}>O2</h1>
              <p>React</p>
            </section>
          </div>
        </Grid>
        <ImageListFilter />
        <ImageList />
      </div>

    );
  }
}

export default App;
