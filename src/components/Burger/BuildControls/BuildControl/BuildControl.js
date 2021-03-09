import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    <div className="d-flex flex-column justify-content-between text-center">
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>

};

export default buildControl;