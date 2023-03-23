import { useLoader, extend } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, ToneMapping, LUT, Vignette, DepthOfField, Noise } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { LUTCubeLoader, KernelSize } from 'postprocessing'
import { UnrealBloomPass } from 'three-stdlib'
import { Effects } from '@react-three/drei'


extend({ UnrealBloomPass })




export function MyEffects() {
    const enabledVar = useControls({
        value: true
    })

    return (
        // <></>
        // <Effects disableGamma >
        //     <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
        // </Effects>

        // <EffectComposer resolutionScale={0.5} >
        //     {/* <Bloom luminanceThreshold={1} intensity={2} /> */}
        //     <Bloom
        //         luminanceThreshold={1}
        //         // luminanceSmoothing={0}
        //         // height={300}
        //         radius={0.5} />
        //     {/* <Vignette eskil={false} offset={0.1} darkness={1.2} /> */}

        // </EffectComposer>

        <EffectComposer
            resolutionScale={1}
            // multisampling={2}
            // disableNormalPass
            enabled={true} >
            {/** The bloom pass is what will create glow, always set the threshold to 1, nothing will glow
         /*  except materials without tonemapping whose colors leave RGB 0-1 */}
            < Bloom mipmapBlur luminanceThreshold={1} />
            <ToneMapping adaptive resolution={256} middleGrey={0.4} maxLuminance={16.0} averageLuminance={1.0} adaptationRate={1.0} />
        </EffectComposer >
    )

}
