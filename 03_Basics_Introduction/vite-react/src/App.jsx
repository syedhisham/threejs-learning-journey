import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Sparkles} from '@react-three/drei'
const App = () => {
  
  const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    })
    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 1, 32]} />
        <meshLambertMaterial color='cyan' emmissive = 'cyan' />
        <Sparkles count={100} scale={1} size={6} speed={0.002} color={'cyan'} noise={0.2}/>
      </mesh>
    )
  }
  return (
    <Canvas style={{height: '92vh', width: '92vw', margin: 'auto', marginTop: '5vh'}}>	
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[1,1,1]} intensity={10} color={'white'} />
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube />
    </Canvas>
  )
}

export default App
