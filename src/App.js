import Routes from "./components/routes/routes";
import ErrorBoundry from "./error/errorBoundry";
// import './App.css';
import { ToastProvider } from 'react-toast-notifications';


function App() {
  return (
    <ToastProvider>
      <ErrorBoundry>
        <div className="App">
          <Routes />
        </div>
      </ErrorBoundry>
    </ToastProvider>
  );
}

export default App;
// yarn add react-toast-notifications
// npm install react-router-dom