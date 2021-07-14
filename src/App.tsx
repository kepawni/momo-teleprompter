import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useChannel, useEvent} from "@harelpls/use-pusher";

function App() {
  const [messages, setMessages] = useState<unknown[]>([]);
  const channel = useChannel("scores");
  useEvent(channel, "message", (data) =>
    data && setMessages((messages) => [...messages, data])
  );
  return (
    <div className="App">
      <pre>{messages}</pre>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
