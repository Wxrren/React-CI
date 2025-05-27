import './App.css';
import './components/css/Sidebar.module.css';



import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import EventsClass from './components/EventsClass';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <NavBarForm />
        <Content />
    </div>
  );
}

export default App;
