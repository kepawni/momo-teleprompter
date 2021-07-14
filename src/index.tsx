import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PusherProvider } from "@harelpls/use-pusher";

const config = {
    // required config props
    clientKey: "aa0e858e50bdfee1caa2",
    cluster: "eu",

    // optional if you'd like to trigger events. BYO endpoint.
    // see "Trigger Server" below for more info
    // triggerEndpoint: "/pusher/trigger",

    // required for private/presence channels
    // also sends auth headers to trigger endpoint
    // authEndpoint: "/pusher/auth",
    // auth: {
    //     headers: { Authorization: "Bearer token" },
    // },
};
ReactDOM.render(
  <React.StrictMode>
      <PusherProvider {...config}>
          <App />
      </PusherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
