import React from 'react';

import { dumpLogs } from '../utility/Utils';

const BlogCard = (props) => {
    // console.log(props);
    dumpLogs(props);

    return (
        <div className='BlogCard'>
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