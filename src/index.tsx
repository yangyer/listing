import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import './index.css';
import App from './App';
import { createMicrofrontendRegistration } from 'avail-microfe-base'
import { BrowserRouter } from 'react-router-dom';

createMicrofrontendRegistration({
  id: 'listing',
  init: (containerId:string, options:any) => {
      const { history, subscribe } = options
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        document.getElementById(containerId)
      );
      return Promise.resolve()
  },
  update: () => Promise.resolve(),
  unmount: (containerId:string) => {
	  const container = document.getElementById(containerId)
	  if (container) {
		  unmountComponentAtNode(container)
	  }
      return Promise.resolve()
  }
})
