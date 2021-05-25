import React from 'react';

import { dumpLogs } from '../utility/Utils';
import classes from '../BlogCardModel.module.css';

const BlogCard = (props) => {
    // console.log(props);
    dumpLogs(props);

    return (
        <div className={classes.BlogCard} >
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

const NoBlogs = () => {
    const message = 'Sorry, there are no blogs available at the moment!';
    return(
        <div className='NoBlogs'>
            <h2>{message}</h2>
        </div>
    );
}

export {BlogCard, NoBlogs};