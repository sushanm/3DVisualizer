import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/assets/models/new-48-73-5022.gltf");
    // eslint-disable-next-line import/no-webpack-loader-syntax
    var data = require('json!/assets/models/west.json');

    console.log(data)

    return (
        <group {...props} dispose={null} scale={4} position={[0, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Back.geometry}
                material={materials["9374_Back.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Back_01.geometry}
                material={materials["9374_Back.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Black.geometry}
                material={materials["9374_Black.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Front.geometry}
                material={materials["9374_Front.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Front_01.geometry}
                material={materials["9374_Front.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Light.geometry}
                material={materials["9374_Light.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Logo_01.geometry}
                material={materials["9374_Logo_01.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Logo_02.geometry}
                material={materials["9374_Logo_02.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Velcro.geometry}
                material={materials["9374_Velcro.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Zipper.geometry}
                material={materials["9374_Zipper.001"]}
            />
        </group>
    );
}