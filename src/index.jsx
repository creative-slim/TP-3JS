import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas

        dpr={[1, 1]}
        // frameloop='demand'
        // gl={{ antialias: true }}
        camera={{ position: [40, 8, 15], fov: 45 }}>
        {/* <fog attach="fog" args={['white', 0, 130]} /> */}


        <Experience />
    </Canvas>
)