import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Menu from './components/Menu'
function App() {
  return (
    <div className="App">
  
<HashRouter>
  <Menu/>
<Routes>
  <Route path='/' element={<Page1/>}/>
  <Route path='/page2' element={<Page2/>}/>
</Routes>


</HashRouter>




    </div>
  );
}

export default App;
