import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useChannel, useEvent} from "@harelpls/use-pusher";

type Uid = string;

function App() {
  const [coins, setCoins] = useState<Uid[]>([]);
  const [hearts, setHearts] = useState<Uid[]>([]);
  const [lastEvent, setLastEvent] = useState<string>('');
  const channel = useChannel("scores");
  useEvent(channel, "coin", (key) =>
    key && [
      !coins.includes(key as Uid) && setCoins([key as Uid, ...coins]),
      setLastEvent('received coin with UID ' + key as Uid)
    ]
  );
  useEvent(channel, "heart", (key) =>
    key && [
      !hearts.includes(key as Uid) && setHearts([key as Uid, ...hearts]),
      setLastEvent('received heart with UID ' + key as Uid)
    ]
  );
  return (
    <div className="App">
      <p>💰 {coins.length}</p>
      <p>❤️ {hearts.length}</p>
      {lastEvent && <aside>Last event: {lastEvent}</aside>}
    </div>
  );
}

export default App;
