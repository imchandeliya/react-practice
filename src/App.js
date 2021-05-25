import './App.css';
// import HomePageBlogCard from './component/BlogCard';

import { BlogCard, NoBlogs } from './component/BlogCard';
import { dumpLogs, isArrayEmpty } from './utility/Utils';


function App() {

    //array object
    const blogArr = [
        {
            id: 1,
            title: 'Blog Title 1',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet.'
        },
        {
            id: 2,
            title: 'Blog Title 2',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            title: 'Blog Title 3',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet.'
        }
    ]

    const blogCards = isArrayEmpty(blogArr) ? <NoBlogs/> : blogArr.map((item) => {
        // console.log(item);
        dumpLogs(item);
        return (
            <BlogCard className='BlogCard' key={item.id} title={item.title} content={item.content} />
        );
    });

    return (
        <div className='App'>
            {blogCards}
        </div>
    );
}

export default App;