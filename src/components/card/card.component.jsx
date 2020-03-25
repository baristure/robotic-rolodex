import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.robots.id}set=set2&size=180x180`} alt="robots" />
        <h1>{props.robots.name}</h1>
        <p>{props.robots.email}</p>
    </div>
)