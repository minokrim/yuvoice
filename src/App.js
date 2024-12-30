import './App.css';
<<<<<<< HEAD
import LandingPage from './landingpage/LandingPage.jsx';
import Body from './body/body.jsx';
function App() {
  return (
    <div className="App">
     <LandingPage/>

=======
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';

function App() {
  return (
    <div className="App">
      <ResponseProvider>
      <Body/>
      </ResponseProvider>
>>>>>>> 57c2e2ea95cd2a50e42023fbbb93d43d8ba89c2a
    </div>
  );
}

export default App;
