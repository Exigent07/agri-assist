import './App.css';
import Info from './pages/Info/Info';
import Home from './pages/Home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav/Nav';

function App() {
    const [proceed, setProceed] = useState(false);

    function proceedCallback() {
        setProceed(true);
    }

    return (
        <div className="App">
            <Nav loggedIn={false} info={proceed} />
            {proceed ? <Home /> : <Info callback={proceedCallback} />}
            <ToastContainer />
        </div>
    );
}

export default App;
