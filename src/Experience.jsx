import {
    Float, Text, Html,
    MeshReflectorMaterial,
    PivotControls,
    OrbitControls,
    TransformControls,
    Environment, Lightformer, SpotLight, Stars, CubeCamera, useGLTF, useDepthBuffer
} from "@react-three/drei"
import { Leva, useControls } from "leva"
import { Perf } from "r3f-perf"
import { useRef } from "react"
import HQ from "./hq_cube"
import Pig from "./pig"
import { Effects } from './Effects'
import { Vector3 } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'



import texture from "../public/hdri.webp"
import Myplane from "./myplane"
import C from "./c"


export default function Experience() {



    const cube = useRef()
    const sphere = useRef()

    return <>
        <Perf position="tpo-left" />
        {/* <Environment preset="dawn" background blur={0.6} /> */}

        <OrbitControls makeDefault />
        {/* <directionalLight position={[1, 2, 3]} intensity={2} /> */}
        {/* <ambientLight intensity={3} /> */}
        <Environment resolution={512}>
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[8, 4, -6]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[4, 4, -3]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[1, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[1, 2, 1]} />
        </Environment>


        {/* <Environment
            files={"Milky_Way.hdr"}
        /> */}

        {/* <Stars saturation={0} count={4000} speed={500} /> */}


        <HQ />
        {/* <Myplane /> */}
        {/* <Pig /> */}

        {/* <C /> */}
        {/* <Effects /> */}
        {/* <mesh position-y={0.01} rotation-x={Math.PI * -0.5} scale={1000} >
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={1024}
                color="darkgray"
                blur={[1000, 1000]}
                mixBlur={1} // 1 full blur , 0 no blur
                mirror={1}
            />
        </mesh> */}




    </>

}

