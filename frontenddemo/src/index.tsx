/* @refresh reload */
import { render } from 'solid-js/web';

import './index.scss';
import App from './App';
import Controller from './assets/Controller';

render(() => (
  <>
    <Controller />
    <App />
  </>
), document.getElementById('root') as HTMLElement);
