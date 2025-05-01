import CSSwrapper from "../components/CSSwrapper";
import { Suspense } from "react";
//import { useEffect } from "react";
import { Preload } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import { RiLoader4Fill } from "react-icons/ri"
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/LabScene/Experience";
import { SignOutControls } from "../components/Navigation/SignOut";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space", "KeyJ"]},
];

function Game() {

  // useEffect(() => {
  //   const handleRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleRightClick);
  //   };
  // }, []);

  const { progress } = useProgress(); 

  const gameLoaded = progress === 100;
  
  return (
    <>
    <CSSwrapper className="startgame" />
    {!gameLoaded && (
        <div className="loading-box">
          <RiLoader4Fill className="animate-spinner" size={70} color="white" />
          <p className="loading">Loading Game... {Math.floor(progress)}%</p>
        </div>
      )}
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}  
          >
          <color attach="background" args={['black']} />
          <Suspense fallback={null}>
            <Preload all />
            <SignOutControls />
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default Game;