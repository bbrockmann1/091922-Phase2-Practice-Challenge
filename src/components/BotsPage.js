import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(botsArray => {
      setBots(botsArray);
    })
  }, []);

  function handleDelete(id) {
    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      }
    };

    fetch(`http://localhost:8002/bots/${id}`, configObj)
  };

  return (
    <div>
      <YourBotArmy selectedBot={selectedBot}/>
      <BotCollection bots={bots} setSelectedBot={setSelectedBot} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
