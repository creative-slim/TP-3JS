import {
    Float, Text, Html,
    MeshReflectorMaterial,
    PivotControls,
    OrbitControls,
    SpotLight,
    CubeCamera, useGLTF, useDepthBuffer, Instance, CameraControls
} from "@react-three/drei"
import { Leva, useControls } from "leva"
import { Perf } from "r3f-perf"
import { useRef, useState } from "react"
import Pig from "./pig"
import { MyEffects } from './Effects'
import { Vector3 } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import gsap from "gsap";

import * as THREE from 'three'

import Myplane from "./myplane"
import C from "./c"

import { GiftBox, Logo } from "./misc"

import HQ15 from "./hq_v15"
export default function Experience() {

    const [lightColor, setLightColor] = useState("blue")
    const { camera } = useThree()
    const [logoClicked, setlogoClicked] = useState(false)
    const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
    const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
    const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })
    const glowBlueLight = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 10), toneMapped: false })


    const propsSPOT = useControls({
        penumbra: 0.2,
        radiusTop: 0.1,
        radiusBottom: 40,
        angle: 1,
        distance: 84,
        attenuation: 20,
        anglePower: 3.5,
        intensity: 1,
        opacity: 0.2,
        color: lightColor
    })
    // spotlight
    // penumbra={0.2}
    //     radiusTop={0.4}
    //     radiusBottom={40}
    //     distance={80}
    //     angle={0.45}
    //     attenuation={20}
    //     anglePower={5}
    //     intensity={1}
    //     opacity={0.2}


    const innerSPOT = {
        penumbra: 0,
        angle: 5,
        distance: 70,
        attenuation: 15,
        anglePower: 7,
        intensity: 1,
        color: "white"
    }


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

    const lightsSpin = useRef()

    const [hovered, setHovered] = useState(false)


    const cameraControlsRef = useRef()
    const pig = useRef()
    const blue = useRef()

    function testingexport() {
        console.log(pig.current);
    }

    const goToCenter = () => {
        console.log(cameraControlsRef);
        cameraControlsRef.current.setLookAt(0, 10, 5, 0, 7, 0, true)
    }

    // const goToGift = () => {
    //     console.log("clicked");
    //     console.log(cameraControlsRef);
    //     console.log(GiftBoxRef.current?.position);
    //     cameraControlsRef.current.setLookAt(0, 10, 10, 1, 1, 0, true)
    // }

    const CamGoTo = (originp, target) => {



        console.log(...originp, ...target);
        cameraControlsRef.current.setLookAt(...originp, ...target, true)

    }


    const resetCam = () => {
        cameraControlsRef.current?.reset(true)
    }

    // ******* mouse move
    // const [vec] = useState(() => new THREE.Vector3())
    // const { camera, mouse } = useThree()
    // useFrame((state) => camera.position.lerp(vec.set(mouse.x * 2, camera.position.y, camera.position.z), 0.05))


    function MovingSpot({ vec = new Vector3(), ...props }) {
        const light = useRef()
        const viewport = useThree((state) => state.viewport)
        // useFrame((state) => {
        //     light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        //     light.current.target.updateMatrixWorld()
        // })
        return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={0.9} {...props} />
    }


    //cameraControlsRef.current?.setTarget
    //cameraControlsRef.current?.setPosition
    //cameraControlsRef.current?.fitToBox
    //cameraControlsRef.current?.moveTo
    //cameraControlsRef.current?.zoom


    useFrame((state, delta) => {
        // console.log(state.camera.position)
        const angle = state.clock.elapsedTime
        const multi = 0.1
        // state.camera.position.x = -Math.sin(angle + 10) + 10
        // state.camera.position.z = Math.cos(angle + 10)
        // state.camera.lookAt(0, 5, 0)

        // lightsSpin.current.position.x = Math.cos(angle * multi)
        // lightsSpin.current.position.z = Math.sin(angle * multi)
        // lightsSpin.current.lookAt(0, 0, 0)


        // ...
    })


    // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX


    // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX


    // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX


    // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX     // ******* JSX


    // ******* JSX    // ******* JSX     // ******* JSX     // ******* JSX      // ******* JSX   



    return <>

        <Perf position="bottom-right" />
        {/* <Environment preset="dawn" background blur={0.6} /> */}

        {/* <OrbitControls
        // makeDefault
        // autoRotate
        // autoRotateSpeed={0.2}
        // enableRotate={false}
        // minPolarAngle={Math.PI / 2.5}
        // maxPolarAngle={Math.PI / 2.5}
        // enablePan={false}
        // enableZoom={false}
        /> */}

        {/* <PerspectiveCamera makeDefault manual /> */}

        <CameraControls

            makeDefault
            ref={cameraControlsRef}

            //NO  X,Y
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}

            //NO  X,Z
            minAzimuthAngle={-Math.PI / 5}
            maxAzimuthAngle={Math.PI / 5}

            //NO ZOOM
            // maxDistance={31.1}
            // minDistance={31.1}
            // dollyToCursor={true}

            //Middle Mouse
            dollySpeed={0}

            //Middle Mouse
            truckSpeed={0}


        />

        {/* <CameraShake
            maxYaw={0.05} // Max amount camera can yaw in either direction
            maxPitch={0.05} // Max amount camera can pitch in either direction
            maxRoll={0} // Max amount camera can roll in either direction
            yawFrequency={0.1} // Frequency of the the yaw rotation
            pitchFrequency={0.1} // Frequency of the pitch rotation
            rollFrequency={0} // Frequency of the roll rotation
            intensity={0.4} // initial intensity of the shake
            decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        /> */}

        {/* <HQfinal recieveShadow /> */}
        {/* <HQmain/> */}

        {/* <Planet position={[0, 7.4, 0]} scale={2}
        // onClick={(e) => (e.stopPropagation(), holoHover(e))}
        // onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}
        /> */}


        {/* <HQ /> */}
        {/* <Myplane /> */}

        {/* <HQ14
                    onClick={(e) => (e.stopPropagation(), resetCam())}

        /> */}

        <HQ15
            onClick={(e) => (e.stopPropagation(), resetCam())}
        />


        <Float
            position={[0, 7.3, 0]} rotation={[1, 2, 1]}
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={7} // XYZ rotation intensity, defaults to 1
            floatIntensity={0} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]

        >
            <group>
                {/* <mesh >
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    <meshPhysicalMaterial color={"darkgray"} transparent opacity={0.7} roughness={0.4} metalness={1} />
                </mesh> */}
                <mesh
                    scale={[0.7, 0.7, 0.7]}
                    material={glowGreen}
                >
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    {/* <meshBasicMaterial color={[7, 0, 0.5]} emissive={1} /> */}
                </mesh>

            </group>

        </Float>

        <group position={[-19.21, 1.4, -18.29]} onClick={(e) => {
            e.stopPropagation(),
                CamGoTo([-19.21, 2.06, -14.29], [-19.21, 1.4, -18.29]);
        }}>
            <mesh>
                <Html rotation={[0, 0.5, 0]} position={[0, 3, 0]} occlude>
                    <div className="annotation">
                        Offer
                    </div>
                </Html>
            </mesh>
            <GiftBox scale={1}
            // onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}
            />
        </group>

        {/* <Cell position-y={[0]} /> */}

        {/* <BoxGear position={[6.84, 0.9, 7]} /> */}

        <Logo
            position={[25, 5, -25]}
            rotation={[0, Math.PI / 2 - 2.4, 0]}
            onClick={(e) => {
                e.stopPropagation(),
                    CamGoTo(
                        [20, 6, -20],
                        [25, 8, -25]);
            }}
        />

        <group ref={pig} rotation={[0, Math.PI / 1.5, 0]} position={[0, 1.3, 0]} >

            <group position={[4, 2, -3]}
                onClick={
                    (e) => (
                        e.stopPropagation(),
                        goToCenter()
                    )}>

                <Html rotation={[0, -2.1, 0]} position={[0, 7, 0]} occlude >
                    <div className="annotation">
                        Services
                    </div>
                </Html>
                <Pig rotation={[0, -1, 0]}


                // onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}
                // onPointerOver={(e) => (e.stopPropagation(), (hoverin(e), setHovered(true)))}
                // onPointerOut={(e) => (e.stopPropagation(), (hoverout(e), setHovered(false)))}
                />
            </group>

            <Pig position={[4, 2, 3]} rotation={[0, -2.4, 0]} />
            <Pig position={[-4, 2, 3]} rotation={[0, -4, 0]} />

        </group>

        //GROUPP lightsSpin

        {/* <group>
            <spotLight
                {...propsSPOT}
                position={[0, 13, 20]}
            />
            <spotLight
                {...propsSPOT}
                position={[0, 13, -20]}
            />
            <spotLight
                {...propsSPOT}
                position={[20, 13, 0]}
            />
            <spotLight
                {...propsSPOT}
                position={[-20, 13, 0]}
            />
        </group> */}

        // FAKE LIGHTS

        <group>
            <spotLight
                {...propsSPOT}
                position={[21, 5, -21]}
                lookAt={[0, 5, 0]}
                color={[0.196, 0.209, 0.255]}
            />
            <spotLight
                {...propsSPOT}
                position={[-21, 5, -21]}
                lookAt={[0, 5, 0]}
                color={[0.196, 0.209, 0.255]}

            />
            <spotLight
                {...propsSPOT}
                position={[20, 13, 0]}
            />
            <spotLight
                {...propsSPOT}
                position={[-20, 13, 0]}
            />
            <pointLight
                {...propsSPOT}
                color={[0, 1, 0]}
                position={[0, 7, 0]}
            />
        </group>



        <group>
            {/* <MovingSpot color="white" position={[10, 13.3, 4]} castShadow {...propsSPOT} />
            <MovingSpot color="white" position={[-10, 13.3, -4]} castShadow  {...propsSPOT} /> */}

            <group ref={lightsSpin}
            >
                {/* <SpotLight
                    {...propsSPOT}
                    position={[0, 13, 20]}

                />
                <SpotLight
                    {...propsSPOT}
                    position={[0, 13, -20]}
                />

                <SpotLight
                    ref={blue}

                    {...propsSPOT}
                    position={[20, 13, 0]}
                />

                <SpotLight

                    {...propsSPOT}
                    position={[-20, 13, 0]}
                /> */}
            </group>
            {/* <SpotLight
                castShadow
                {...propsSPOT}
                position={[0, 17.3, 0]}
                color={"darkblue"}
                intensity={0.9}
                angle={6}
            />

            <spotLight
                name="Spot"
                intensity={0.9}
                angle={0.85}
                penumbra={1}
                decay={2}

                color={lightColor}
                position={[0, 17.16, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
            /> */}
        </group>


        {/* <C /> */}

        <MyEffects />


        {/* <Stars saturation={0} count={4000} speed={500} /> */}

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


export function test() {
    console.log("lorem lorem ");
}


const clicked = (p) => {
    console.log(p);
}

const hoverin = (p) => {
    console.log(p);
    p.object.material.color = new THREE.Color(0x000fff)
}
const hoverout = (p) => {
    p.object.material.color = new THREE.Color(0xf0f0f0)
}



const HoloGlow = (p, r, g, b) => {
    console.log(p);
    gsap.to(p.object.material.color, {
        r: r,
        g: g,
        b: b,
        duration: 1
    })
}

function Model({ url }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}


