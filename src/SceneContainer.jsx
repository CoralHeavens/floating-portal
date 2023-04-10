import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import FloatingIsland from "./FloatingIsland";
import Rock from "./Rock";
import Portal from "./Portal";

export default function SceneContainer() {
    return (
        <Suspense fallback={null} >
            <Environment background={"only"} files={process.env.PUBLIC_URL + 'textures/bg.hdr'} />
            <Environment background={false} files={process.env.PUBLIC_URL + 'textures/envmap.hdr'} />

            <PerspectiveCamera makeDefault fov={70} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target0={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

            <FloatingIsland />
            <Rock />
            <Portal />
        </Suspense>
    )
}