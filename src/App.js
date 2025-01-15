import './App.css';
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';
import { HashRouter,Routes,Route} from 'react-router-dom';
import EditorialBody from './editorial/editorialbody.jsx';
import SubmitStoryBody from './editorial/submitstory/submitstorybody.jsx';
import StoryBody from './editorial/story/storybody.jsx';
import LandingPage from "../src/landingpage/LandingPage.jsx"
function App() {
  return (
    <div className="App">
      <HashRouter>
      <ResponseProvider>
      <Routes>
        {/* <Route path='/' element={<Body/>}/> */}
        <Route path='/' element={<EditorialBody/>}/>
        <Route path='/submitstory' element={<SubmitStoryBody/>}/>
        <Route path='/story/:storyId' element={<StoryBody/>}/>
        </Routes>
      </ResponseProvider>
      </HashRouter>
    </div>
  );
}
export default App;