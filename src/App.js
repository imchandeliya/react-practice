import logo from './logo.svg';
import './App.css';

function App() {
  const fName = 'Wolf';
  const lName = 'Gupta';
  const age = 9;
  const job = 'Software Engineer';
  const company = 'Google Inc';
  const Yearlypckg = '1.2 Crore';
  const education = 'WhiteHat Junior';

  const getFullName = (fName, lName) => {
    return `${fName} ${lName}`;
  }

  

  return (
    <div className="App">
      <h3>Full Name: {getFullName(fName, lName)}</h3>
      <p>Age: {age} years</p>
      <p>Education: {education}</p>
      <p>Job: {job} at {company}</p>
      <p>Annual Salary: {Yearlypckg}</p>
    </div>
  );
}

export default App;
