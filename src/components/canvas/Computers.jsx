import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return <div>Computers</div>;
};

export default Computers;
