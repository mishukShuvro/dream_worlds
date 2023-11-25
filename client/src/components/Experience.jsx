import { Environment, OrbitControls } from "@react-three/drei";
import { Boy3 } from "./Boy3";
export const Experience = () => {
  return (
    <>

      <Environment preset="sunset"/>
      <ambientLight intensity={.3}/>
      <OrbitControls />
      <Boy3/>
    </>
  );
};
