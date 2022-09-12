import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from '../models/Model';

function Loader() {
    return (
        <Canvas shadows>
            <Suspense fallback={null}>
                <Model />
                <OrbitControls />
                <ambientLight />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    )
}

export default Loader