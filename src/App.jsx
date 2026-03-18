import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Sphere from './models/Sphere';
import HomeInfo from './components/HomeInfo';
import { useState, Suspense } from 'react';
import { Home, About, Projects, Credits } from './pages';

const App = () => {
    
    const [ currentStage, setCurrentStage ] = useState(1);

    return (
        <main class='home'>
            <h1>THOMPSON HIGH</h1>
            <h2>⠠⠞⠓⠕⠍⠏⠎⠕⠝ ⠠⠓⠊⠛⠓</h2>
            <Router>
                <div class='navbox'>
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home setCurrentStage={setCurrentStage}/>} />
                    <Route path="/about" element={<About setCurrentStage={setCurrentStage} />} />
                    <Route path="/projects" element={<Projects setCurrentStage={setCurrentStage}/>} />
                    <Route path="/credits" element={<Credits setCurrentStage={setCurrentStage}/>} />
                </Routes>
            </Router>
            <h3>生き甲斐</h3>
            <div class='info-box'>
                <Canvas id='canvas' camera={{near: 0.1, far: 1000, rotation: [0, 0, 0]}}>
                    <Suspense fallback={<Loader />}>
                        <ambientLight intensity={0.7}/>
                        <Sphere />    
                    </Suspense>
                </Canvas>
            </div>
            <div class='info-box'>
                <div class='info-box-txt'>
                    {currentStage && <HomeInfo currentStage={currentStage} />}                    
                </div> 
            </div>
        </main>
    )
}

export default App