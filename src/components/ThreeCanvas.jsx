import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Sparkles, PerspectiveCamera, Environment, Torus, MeshWobbleMaterial } from '@react-three/drei';

function AnimatedBackground() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.05;
            meshRef.current.rotation.y = time * 0.08;
        }
    });

    return (
        <mesh ref={meshRef} position={[3, 0, -3]}>
            <icosahedronGeometry args={[5, 4]} />
            <meshStandardMaterial
                color="#1a4d2e"
                wireframe
                transparent
                opacity={0.03}
            />
        </mesh>
    );
}

function FloatingRing() {
    const ringRef = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ringRef.current.rotation.z = time * 0.1;
        ringRef.current.rotation.x = time * 0.05;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Torus ref={ringRef} args={[2.5, 0.01, 16, 100]} position={[0, 0, -1]}>
                <meshStandardMaterial color="#c5a059" opacity={0.3} transparent />
            </Torus>
        </Float>
    );
}

function SilkSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.z = time * 0.1;
        }
    });

    return (
        <Float speed={4} rotationIntensity={0.8} floatIntensity={1.5}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.8}>
                <MeshDistortMaterial
                    color="#1a4d2e"
                    attach="material"
                    distort={0.45}
                    speed={3}
                    roughness={0.05}
                    metalness={1}
                    emissive="#2d8a4e"
                    emissiveIntensity={0.15}
                />
            </Sphere>
        </Float>
    );
}

const ThreeCanvas = () => {
    return (
        <div className="three-canvas-container">
            <Canvas shadows dpr={[1, 2]} alpha={true}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
                <Suspense fallback={null}>
                    <Environment preset="apartment" />
                    <ambientLight intensity={1.2} />
                    <spotLight
                        position={[15, 15, 15]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                        color="#fff"
                        castShadow
                    />
                    <pointLight position={[-15, 0, -10]} intensity={1} color="#c5a059" />

                    <SilkSphere />
                    <FloatingRing />
                    <AnimatedBackground />

                    <Sparkles
                        count={120}
                        scale={15}
                        size={2}
                        speed={0.2}
                        color="#c5a059"
                        opacity={0.6}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeCanvas;
