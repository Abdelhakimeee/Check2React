import React from 'react';
import './CompoCardPlayer.css';




function CompoCardPlayer(props) {
    console.log(props.data)
    const  players=props.data 
  return (
    <div>
    <h1 className='title'>Cards Players</h1>
    <div className='cards' >
        {players.map((player ) => (
            <div className='card'>
            <img src={player.image} alt='plqyer image'/>
            <p>{player.first_name} </p>
            <p>{player.last_name} </p>
            <p>{player.team} </p>
            <p>{player.position} </p>

            


            </div>
        )) }
    </div>
    </div>
  )
}

export default CompoCardPlayer;
