import logo from './logo.svg';
import './App.css';

function App() {

    const blogObject = {
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet.'
    };

    const styles = {
        margin: '16px',
        padding: '16px',
        boxSizing: 'border-box',
        borderRadius: '5px',
        boxShadow: '0 2px 5px #ccc'

    };

    return (
        <div className='App'>
            <div className='BlogCard'>
                <h3>{blogObject.title}</h3>
                <p>{blogObject.content}</p>
            </div>
            <div className='BlogCard'>
                <h3>{blogObject.title}</h3>
                <p>{blogObject.content}</p>
            </div>
            <div className='BlogCard'>
                <h3>{blogObject.title}</h3>
                <p>{blogObject.content}</p>
            </div>
        </div>
    );
}

export default App;