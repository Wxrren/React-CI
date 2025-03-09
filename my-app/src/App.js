import './App.css';
import './components/css/Sidebar.module.css';



import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <NavBarForm />
    </div>
  );
}

export default App;
