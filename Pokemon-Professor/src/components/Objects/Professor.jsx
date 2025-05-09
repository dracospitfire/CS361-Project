import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import professorOak from "../../assets/Models/pokemon_professor_oak_fixed_size.glb";

useGLTF.preload(professorOak);

export const Oak = ({ position = [0, 0, 0], scale = 1, ...props }) => {
  const { scene } = useGLTF(professorOak);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
  
      const mat = child.material;
  
      // If using an array of materials
      const materials = Array.isArray(mat) ? mat : [mat];
  
      materials.forEach((m) => {
        if (m.map) {
          m.map.encoding = THREE.sRGBEncoding;
          m.map.needsUpdate = true;
        }
        m.needsUpdate = true;
      });
    }
  });

  return (
    <RigidBody type="fixed" colliders="trimesh" {...props} >
      <primitive
        object={scene}
        position={position}
        scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
        rotation={[0, 0, 0]} 
      />
      <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -.9, -2]} scale={0.015}/>
    </RigidBody>
  );
};