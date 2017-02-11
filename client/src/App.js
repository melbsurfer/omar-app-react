import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import AppNav from './AppNav';
import AppWfs from './ImageList';

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
        {/*<div className="grails-logo-container">
          Some text here
          <img className="grails-logo" src={grailsLogo} alt="Grails" />
          <span className="plus-logo">+</span>
          <img className="hero-logo" src={reactLogo} alt="React" />
        </div>*/}

        <Grid>
          <div id="content">
            <section className="row colset-2-its">
              <h1 style={{textAlign: 'center'}}>O2</h1>
              <br/>
              {/*<p>
                Congratulations, you have successfully started your first Grails + React application! While in development mode, changes will be loaded automatically when you edit your React app, without even refreshing the page.
                Below is a list of controllers that are currently deployed in
                this application, click on each to execute its default action:
              </p>*/}
              <p>React</p>

              {/*<div id="controllers" role="navigation">
                <h2>Available Controllers:</h2>
                <ul>
                  {serverInfo.controllers ? serverInfo.controllers.map(controller => {
                    return <li key={controller.name}><a href={SERVER_URL + controller.logicalPropertyName}>{ controller.name }</a></li>;
                  }) : <p>No controllers</p> }
                </ul>
              </div>
              */}
            </section>

          </div>
        </Grid>
        <AppWfs/>
      </div>

    );
  }
}

export default App;
