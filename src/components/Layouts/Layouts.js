import React, {Fragment} from 'react';
import classes from './Layouts.module.css';

const layout = (props) => (
    <Fragment>
        <div> Toolbar, Sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;