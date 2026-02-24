"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

function FloatingMesh() {
  const mesh = useRef()

  return (
    <mesh ref={mesh} rotation={[0.4, 0.2, 0]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#0066ff" wireframe />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0, zIndex: 1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <FloatingMesh />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}
