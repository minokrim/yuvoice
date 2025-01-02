import './App.css';
import Body from './body/body.jsx';
import ResponseProvider from './context/responseContext.jsx';

function App() {
  return (
    <div className="App">
      <ResponseProvider>
      <Body/>
      </ResponseProvider>
    </div>
  );
}

export default App;
