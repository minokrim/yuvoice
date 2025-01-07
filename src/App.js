import './App.css';
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';
import { HashRouter,Routes,Route} from 'react-router-dom';
import EditorialBody from './editorial/editorialbody.jsx';
import SubmitStoryBody from './editorial/submitstory/submitstorybody.jsx';
function App() {
  return (
    <div className="App">
      <HashRouter>
      <ResponseProvider>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/editorialbody' element={<EditorialBody/>}/>
        <Route path='/submitstory' element={<SubmitStoryBody/>}/>
        </Routes>
      </ResponseProvider>
      </HashRouter>
    </div>
  );
}
export default App;