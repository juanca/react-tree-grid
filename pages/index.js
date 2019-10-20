/* global window:false */

import '@babel/polyfill'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import { render } from 'react-dom';

import Example from './example.js';
import Footer from './footer.js';

setTimeout(() => {
  render((
    <React.Fragment>
      <header>
        <h1>
          React ARIA Components
        </h1>
        <p>
          Support this project by <a href="https://github.com/sponsors/juanca">becoming a sponsor</a>. {/* eslint-disable-line max-len */}
        </p>
      </header>
      <Example title="Table of Contents">
        <nav>
          <p>
            List of WAI-ARIA components implemented in React:
          </p>
          <ol>
            <li><a href="./accordions">Accordion</a></li>
            <li><a href="./grids">Grid</a></li>
            <li><a href="./tabs">Tabs</a></li>
          </ol>
        </nav>
      </Example>
      <Footer />
    </React.Fragment>
  ), window.document.getElementById('page'));
}, 100);
