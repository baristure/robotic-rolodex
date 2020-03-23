import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.heroes.map(heroes =>
            (
                <Card key={heroes.id} heroes={heroes} />
            ))}
    </div>
)

