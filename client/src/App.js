import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import AppNav from './AppNav';

import ImageListFilter from './ImageListFilter';

import { WFS_OBJ } from './config';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();

    this.state = {
      wfsObj: WFS_OBJ
    }
  }

  render() {

    return (
      <div>
        <AppNav/>
        <Grid>
          <div id="content">
            <section className="row colset-2-its">
              <h1 style={{textAlign: 'center'}}>O2</h1>
              <p>React</p>
            </section>
          </div>
        </Grid>
        <ImageListFilter wfs={this.state.wfsObj}/>
      </div>

    );
  }
}

export default App;
