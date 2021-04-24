import React from 'react';
import './Header.css';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

export default function Header() {
    return (
        <div className="header">
            <div className="text">
                <h1>Kollektiv</h1>
                <h1>Calculator</h1>
            </div>
        <div className="logo">
            <DirectionsBikeIcon style={{fontSize:40}}/>
            
        </div>
        </div>
    )
}
