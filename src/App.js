import './App.css';
import ResponseProvider from './context/responseContext.jsx';
import { HashRouter,Routes,Route} from 'react-router-dom';
import EditorialBody from './editorial/editorialbody.jsx';
import SubmitStoryBody from './editorial/submitstory/submitstorybody.jsx';
import LandingBody from './landingpage/landingBody.jsx';
import StoryBody from "../src/editorial/story/storybody.jsx"
import GetInTouch from './getInvolved/getintouch.jsx';
import VolunteerBody from './volunteer/volunteerBody.jsx';
import AboutBody from './about/aboutBody.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <ResponseProvider>
      <Routes>
        <Route path='/' element={<LandingBody/>}/>
        <Route path='/getintouch' element={<GetInTouch/>}/>
        <Route path='/globalstories' element={<EditorialBody/>}/>
        <Route path='/submitstory' element={<SubmitStoryBody/>}/>
        <Route path='/about' element={<AboutBody/>}/>
        <Route path='/volunteer' element={<VolunteerBody/>}/>
        <Route path='/story/:storyId' element={<StoryBody/>}/>
        </Routes>
      </ResponseProvider>
      </HashRouter>
    </div>
  );
}
export default App;