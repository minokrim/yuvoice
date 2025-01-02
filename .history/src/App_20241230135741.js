import './App.css';
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';
import LandingPage from "./landingpage/LandingPage.jsx"
function App() {
  return (
    <div className="App">
      <ResponseProvider>
      <LandingPage/>
      </ResponseProvider>
    </div>
  );
}
export default App;