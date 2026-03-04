import { useRef, useEffect } from 'react';
import sphereScene from '../assets/3d/sphere.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
    const { scene, animations } = useGLTF(sphereScene);
    const sphereRef = useRef();

    useEffect(() => {
        scene.traverse((object) => {
            if (object.isMesh) {
                object.material = new THREE.MeshStandardMaterial({
                    color: '#696969'
                });
            }
        });
    }, [scene]);

    useFrame(({clock, camera}) => {
        sphereRef.current.rotation.y += 0.001;
    })

    return (
        <mesh ref={sphereRef} position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Sphere