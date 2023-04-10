import { Canvas } from '@react-three/fiber';
import React from 'react';
import SceneContainer from './SceneContainer';
import './App.css';

function App() {
  return (
    <Canvas>
      <SceneContainer />
    </Canvas>
  );
}

export default App;
