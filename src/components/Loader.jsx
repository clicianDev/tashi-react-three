import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = (props) => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="cube">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
      <p className="text-sm text-white font-extrabold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
