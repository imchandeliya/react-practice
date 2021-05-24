import './App.css';

function App() {

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

    const blogCards = blogArr.map((item) => {
        console.log(item);

        return (
            <div className='BlogCard' key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        );
    });


    return (
        <div className='App'>
            {blogCards}
        </div>
    );
}

export default App;