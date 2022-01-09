import React from 'react';
import { Brand, CTA, Navbar, Counter, Topcoaches } from './components';
import {Header, Footer, Learning, Reward, Features} from './container';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="library-bg">
                <Navbar />
                <Header />
            </div>
            {/* website features */}
            <div>
                <Counter />
                <Reward />
                <Learning />
                <Topcoaches />
                <Features />
                <Brand />
                {/* <CTA /> */}
                <Footer />
            </div> 
        </div>
    )
}

export default App
