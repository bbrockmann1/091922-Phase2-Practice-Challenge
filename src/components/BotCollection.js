import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, setSelectedBot, handleDelete }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => <BotCard key={bot.id} setSelectedBot={setSelectedBot} bot={bot} handleDelete={handleDelete}/>)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
