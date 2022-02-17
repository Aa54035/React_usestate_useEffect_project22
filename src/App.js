import { useContext } from 'react'
import './Assets/Style.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';
import { MyContext } from './Context';
import "animate.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const mycont = useContext(MyContext);

  const handlComponent = () => {
    const screen1 = mycont.state.screen;
    if (screen1 === 0) return <Initial />
    if (screen1 === 1) return <Confirm />
    if (screen1 === 2) return <Result />

  }

  console.log('--', mycont.state);


  return (
    <div>
       <div>
        <ToastContainer />

      </div>
      <div className="container">

        {handlComponent()}

      QA Analysis

      </div>
     
    </div>
  );
}

export default App;
