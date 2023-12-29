import React from 'react';
import { render } from 'react-dom';
import App from './App.tsx';

addEventListener(
   'DOMContentLoaded',
   () => render(<App />, document.getElementById('app')),
);
