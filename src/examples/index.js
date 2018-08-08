/* global window:false */

import 'babel-polyfill'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import { render } from 'react-dom';

import Example from './example.js';
import AccordionExample from './accordion-example.js';
import GridExample from './grid-example.js';
import TabsExample from './tabs-example.js';

setTimeout(() => {
  render((
    <React.Fragment>
      <header>
        <h1>
          React ARIA Components
        </h1>
      </header>
      <Example title="Table of Contents">
        <nav>
          <p>
            List of WAI-ARIA components implemented in React:
          </p>
          <ol>
            <li>
              Grid
            </li>
            <li>
              Tabs
            </li>
          </ol>
        </nav>
      </Example>
      <main>
        <GridExample />
        <TabsExample />
        <AccordionExample />
      </main>
      <footer>
        <address>
          <a href="https://github.com/juanca/react-aria-components">
            Github repository
          </a>
          <br />
          <a href="https://npmjs.com/package/react-aria-components">
            NPM package
          </a>
        </address>
      </footer>
    </React.Fragment>
  ), window.document.getElementById('page'));
}, 100);
