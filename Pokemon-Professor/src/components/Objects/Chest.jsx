import { useGLTF } from '@react-three/drei';
import chestModel from '../../assets/Models/chest.glb';

export const Chest = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF(chestModel);

  return (
    <primitive
      object={scene}
      position={position}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      rotation={[0, Math.PI, 0]}
    />
  );
};