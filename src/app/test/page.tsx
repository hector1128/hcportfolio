"use client";

import { Canvas } from '@react-three/fiber'
import { Text3D, OrbitControls, Center, Environment } from '@react-three/drei'

export default function Text3DScene() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <Environment preset="city" />

        {/* The Center component automatically centers the text (which is usually hard to do) */}
        <Center>
            
          <Text3D 
            font="/fonts/Super Shiny_Regular.json"
            height={0.5}                      
            curveSegments={12}                
            bevelEnabled                      
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Hector Cordero
            
            {/* You must give it a material, or it will be white/invisible */}
            <meshStandardMaterial color="#000000ff" roughness={0.1} />
          </Text3D>
          
        </Center>

        <Text3D 
            font="/fonts/Super Shiny_Regular.json"
            height={0.5}                      
            curveSegments={12}                
            bevelEnabled                      
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Welcome to my portfolio
            
            {/* You must give it a material, or it will be white/invisible */}
            <meshStandardMaterial color="#000000ff" roughness={0.1} />
          </Text3D>

      </Canvas>
    </div>
  )
}