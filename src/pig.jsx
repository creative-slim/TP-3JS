/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pig(props) {
    const { nodes, materials } = useGLTF("./pig-lowPoly.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hacker_Pig_2037.geometry}
                material={materials.Pupil}
                position={[0, 10, 0.85]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <group
                position={[0, 2.23, 0.83]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh045.geometry}
                    material={materials.Sclera}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh045_1.geometry}
                    material={materials.Eyebrows}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011.geometry}
                material={nodes.Sphere011.material}
                position={[0, 2.86, 0.87]}
                scale={[1.55, 1.37, 1.3]}
            />
        </group>
    );
}

useGLTF.preload("./pig-lowPoly.glb");