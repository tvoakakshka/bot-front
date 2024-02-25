import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div className='App'>
    <div className='container'>
  
     <Routes>
     
      <Route path = {'/form'} element={<Form/>}/>
     </Routes>
     <button   className="btn">Закрыть</button>
    </div>
    </div>
  );
}

export default App;
// /  <Route index element = {<ProductList/>}/>
//onClick={CloseEvent}
//    <Header/>   