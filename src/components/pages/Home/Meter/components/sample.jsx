import React, { useState, useEffect } from "react";
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { format } from "d3-format";

const Gauge = ({
    value = 50,
    min = 0,
    max = 100,
    label,
    units,
    isActive,
    isMobile,
  }) => {
    const [animatedAngle, setAnimatedAngle] = useState(-Math.PI / 1);
    const [size, setSize] = useState("18em")
    const [color, setColor] = useState("#0D0D26")
    useEffect(() => {


      if (isActive) {
        const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
        const percent = percentScale(value);
  
        const targetAngle = percent * (Math.PI / 15);
        let currentAngle = animatedAngle;
  
        const animationFrame = requestAnimationFrame(function animate() {
          currentAngle += (targetAngle - currentAngle) * 0.05;
  
          setAnimatedAngle(currentAngle);
  
          if (Math.abs(targetAngle - currentAngle) > 0.001) {
            requestAnimationFrame(animate);
          }
        });
  
        return () => cancelAnimationFrame(animationFrame);
      }

      if(isMobile){
       setSize('10em')
      setColor('#6C23CC')
      }
      else{
        setSize('18em')
        setColor('#0D0D26')
      }
    }, [value, min, max, animatedAngle, isActive, isMobile, size]);

  const backgroundArc = arc()
    .innerRadius(0.75)
    .outerRadius(1)
    .startAngle(-Math.PI / 1)
    .endAngle(Math.PI / 1)
    .cornerRadius(1)();

  const filledArc = arc()
    .innerRadius(0.75)
    .outerRadius(1)
    .startAngle(-Math.PI / 1)
    .endAngle(animatedAngle)
    .cornerRadius(1)();

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#6C23CC", "#E1BA1B"]);
 
  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value));

  const markerLocation = getCoordsOnArc(
    animatedAngle,
    1 - ((1 - 0.65) / 2),
  );

  return (
    <div style={{ textAlign: "center" }}>
      <svg style={{ overflow: "visible" }}
        width={size}
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length -1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill={color}
         opacity={0.5}
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        {/* <line
          y1="-1"
          y2="-0.65"
          stroke="white"
          strokeWidth="0.027"
        /> */}
        {/* <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          stroke="#2c3e50"
          strokeWidth="0.01"
          fill={colorScale(animatedAngle / (Math.PI / 1))}
        /> */}
      </svg>

      {!!label && (
        <div style={{
          color: "#8b8ba7",
          marginTop: "0.6em",
          fontSize: "1.3em",
          lineHeight: "1.3em",
          fontWeight: "700",
        }}>
          { label }
        </div>
      )}

      {!!units && (
        <div style={{
          color: "#8b8ba7",
          lineHeight: "1.3em",
          fontWeight: "300",
        }}>
          { units }
        </div>
      )}
    </div>
  );
};

const getCoordsOnArc = (angle, offset = 10) => [
  Math.cos(angle - (Math.PI / 2)) * offset,
  Math.sin(angle - (Math.PI / 2)) * offset,
];

export default Gauge;
