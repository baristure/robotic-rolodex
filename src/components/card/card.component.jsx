import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.heroes.id}set=set2&size=180x180`} alt="heroes" />
        <h1>{props.heroes.name}</h1>
        <p>{props.heroes.email}</p>
    </div>
)