import './App.css';
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';
<<<<<<< HEAD
import LandingPage from "./landingpage/LandingPage.jsx"
=======
>>>>>>> ce9fd5ffdf47b55cf43484997dc6f20ba04154bf
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