import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Suspense } from 'react'
import {
    Loader

} from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))


// function AdaptivePixelRatio() {
//     const current = useThree((state) => state.performance.current)
//     const setPixelRatio = useThree((state) => state.setPixelRatio)
//     useEffect(() => {
//         setPixelRatio(window.devicePixelRatio * current)
//     }, [current])
//     return null
// }

// function App() {
//     const [dpr, setDpr] = useState(1.5)
//     return (

//     )
// }

root.render(
    <>
        <Canvas fallback={<span>loading...</span>}
            // performance={{ min: 0.5 }}
            // frameloop='demand'
            // gl={{ antialias: true }}

            dpr={[window.devicePixelRatio, 1]}
            camera={{
                position: [0, 10, 31],
                fov: 55
            }}>
            {/* <AdaptivePixelRatio /> */}
            <Suspense fallback={null}>
                {/* <fog attach="fog" args={['white', 0, 130]} /> */}
                {/* <PerformanceMonitor /> */}
                {/* <AdaptiveDpr pixelated /> */}
                {/* <axesHelper args={[20, 20, 20]} /> */}
                {/* <Experience /> */}
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial />
                </mesh>
                {/* <ambientLight intensity={2} /> */}
            </Suspense>
        </Canvas>
        <Loader />
    </>
)
