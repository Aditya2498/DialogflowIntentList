import React from 'react';
import {Cards} from './Cards.jsx'


export const Cardlist = ({intents})=>{
    return(<div>{intents.map((intents, i) => {
        return (
            <Cards
              key={i}
              name={intents.name}
              action= {intents.action}
              rootFollowupIntentName={intents.rootFollowupIntentName}
             parentFollowupIntentName={intents.parentFollowupIntentName}
            />
            );
            })}</div>
    
)}
