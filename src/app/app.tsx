import Filters from '../components/filters/filters';
import Header from '../components/header/header';
import ModalDialog from '../components/modals/modal-dialogs';
import './app.css';

function App() { 
  return (
    <div className="App">
      <Header></Header>
      <div className='main__content'>
        <Filters></Filters>
      </div>
      <ModalDialog></ModalDialog>
    </div>
  );
}

export default App;
