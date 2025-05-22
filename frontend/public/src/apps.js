import React from 'react';
import Navbar from './components/Navbar';
import InfoList from './components/InfoList';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <InfoList />
            </main>
            <Footer />
        </div>
    );
}

export default App;