import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.robots.map(robots =>
            (
                <Card key={robots.id} robots={robots} />
            ))}
    </div>
)

