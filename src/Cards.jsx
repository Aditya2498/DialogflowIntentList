import React from 'react';
import {Card} from 'react-bootstrap';

export const Cards = ({name,action,rootFollowupIntentName,parentFollowupIntentName})=>{
    return(
   <Card>
       <Card.Title>Intent Name :{name}</Card.Title>
       <Card.Text>
           <span>Action:{action}</span><br/>
       <span>rootFollowupIntentName:{rootFollowupIntentName}</span><br/>
       <span>parentFollowupIntentname:{parentFollowupIntentName}</span></Card.Text>
   </Card>
);}