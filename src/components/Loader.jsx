import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = (props) => {
  const { progress } = useProgress();

  return (
    <Html
    
    >
      <div className="cube">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
