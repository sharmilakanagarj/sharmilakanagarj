import './App.css';
import Homepage from './Homepage';

function App() {
  const bar = [
    "laptop",
    "phone",
    "toys",
    "pc"
]
  return (
    <div>
    <Homepage name = "sharmila" itemtonav = {bar}/>
    </div>
  );
}

export default App;
