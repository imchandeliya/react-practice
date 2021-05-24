import logo from './logo.svg';
import './App.css';

function App() {

  const champ = {
    fName : 'Wolf',
    lName : 'Gupta',
    age : 9,
    job : 'Software Engineer',
    company : 'Google Inc',
    Yearlypckg : '1.2 Crore',
    education : 'WhiteHat Junior'   
  }

  const  inputPlaceHolder = 'Enter your details';

  //getter 
  const getFullName = () => {
    return `${champ.fName} ${champ.lName}`;
  }

  //input
  const detailsInputBox = <input type='text' placeholder={inputPlaceHolder} autoComplete />;

  return (
    <div className="App">
      <h3>Full Name: {getFullName()}</h3>
      <p>Age: {champ.age} years</p>
      <p>Education: {champ.education}</p>
      <p>Job: {champ.job} at {champ.company}</p>
      <p>Annual Salary: {champ.Yearlypckg}</p>
      {detailsInputBox}
    </div>
  );
}

export default App;
