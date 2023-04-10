import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Portal() {
    const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + 'models/portal.glb');
    const mask = useLoader(GLTFLoader, process.env.PUBLIC_URL + 'models/portal_mask.glb');

    useEffect(() => {
        if (!model || !mask) return;

        const mesh = model.scene.children[0];
        mesh.material.envMapIntensity = 3.5;

        const maskMesh = mask.scene.children[0];
        maskMesh.material.side = DoubleSide;
    }, [model, mask])

    return (
        <>
            <primitive object={model.scene} />
            <primitive object={mask.scene} />
        </>
    )
}