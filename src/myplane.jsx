/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";

export default function Myplane(props) {

    const reflectionPlanes = {
        blur: [1000, 1000],
        resolution: 1024 * 2,
        mixBlur: 1,
        mixStrength: 50,
        roughness: 0.2,
        depthScale: 1.2,
        color: "#1E2F45",
        metalness: 0.8,

    }

    return (
        <group {...props} dispose={null}>

            <mesh scale={100}
                position-y={-0.12}
                castShadow
                receiveShadow
                rotation-x={-Math.PI / 2}

            >
                <planeGeometry />
                <MeshReflectorMaterial
                    blur={[1000, 1000]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={50}
                    roughness={0.3}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050505"
                    metalness={0.9}


                />
            </mesh>

        </group>

    );
}

 // color="#050505"