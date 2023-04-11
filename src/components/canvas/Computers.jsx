import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  console.log(computer);
  return (
    <mesh>
      Computers
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return <Canvas frameloop="demand"></Canvas>;
};

export default Computers;
