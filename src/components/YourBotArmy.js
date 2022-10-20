import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ selectedBot }) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {<BotCard key={selectedBot.id} bot={selectedBot}/>}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
