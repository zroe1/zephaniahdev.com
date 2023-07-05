import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import CenterText from './components/CenterText'
import ColorSelectors from './components/ColorSelector';
import InstructionText from './components/InstructionText';
import BottomLinks from './components/BottomLinks';
import './index.css'

function Box({color}) {
  const meshRef = useRef()
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    // meshRef.current.rotation.y += 0.006;
  })
  let meshArgs;
  if (window.innerWidth < 600) {
    meshArgs = [2.0, .6, 16, 100];
  } else {
    meshArgs = [2.2, .7, 16, 100];
  }
  return (
    <mesh ref={meshRef}>
      <torusBufferGeometry attach='geometry' args={meshArgs}/>
      <meshBasicMaterial attach='material' color={color} wireframe/>
    </mesh>
  );
}


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [ShapeColor, setShapeColor] = useState("#ffffff")
  const [TextColor, setTextColor] = useState("#ffffff")

  const setBackground  = (newBackgroundColor) => {
    setBackgroundColor(newBackgroundColor)
  }
  const setShape = (newShapeColor) => {
    setShapeColor(newShapeColor)
  }
  const setText = (newTextColor) => {
    setTextColor(newTextColor)
  }
  const backgroundStyle = {
    backgroundColor: backgroundColor,
  }

  return (
    <div className='root-container' style={backgroundStyle}>
      <InstructionText color={TextColor}/>
      <BottomLinks />
      <ColorSelectors color={TextColor} handleBackgroundChange={setBackground} handleShapeChange={setShape} handleTextChange={setText}/>
      <CenterText color={TextColor}/>
      <Canvas >
        <OrbitControls />
        <Stars/>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box color={ShapeColor}/>
      </Canvas>
    </div>
  )
}
