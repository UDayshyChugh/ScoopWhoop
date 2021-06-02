import './App.css';
//Main App.js i.e parent javascript

//Child Component Mainpage imported hich consists of further Child Components
import Mainpage from  './main/Mainpage'
function App() {
  return (
    <div className="App">
     <Mainpage/>
    </div>
  );
}

export default App;
