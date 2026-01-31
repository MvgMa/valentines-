import { useState, useRef, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import "./App.css";
import SectionOne from "./Components/sections/sectionone";
import SectionTwo from "./Components/sections/sectiontwo";
import SectionThree from "./Components/sections/sectionthree";
import SectionFour from "./Components/sections/sectionfour";

export default function App() {
  const sections = [
    <SectionOne/>,
    <SectionTwo/>,
    <SectionThree/>,
    <SectionFour/>
  ];

  const [unlocked, setUnlocked] = useState(1);
  const sectionRefs = useRef([]);

  // Fix iPad Safari 100vh bug
  useEffect(() => {
    const updateVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    updateVH();
    window.addEventListener("resize", updateVH);
    return () => window.removeEventListener("resize", updateVH);
  }, []);

  // Custom slow scroll
  function smoothScrollTo(targetY, duration = 1500) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const unlockNext = () => {
    if (unlocked < sections.length) {
      const nextIndex = unlocked;
      setUnlocked(unlocked + 1);

      // Wait for DOM to update fully
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = sectionRefs.current[nextIndex];
          smoothScrollTo(el.offsetTop, 1500); // slow scroll
        });
      });
    }
  };

  return (
    <>
      <ShaderGradientCanvas
        style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
        pixelDensity={1.5}
        fov={45}>
        <ShaderGradient control='query' urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff91e4&color2=%23db23a4&color3=%23be28c6&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.2&uStrength=4&uTime=0&wireframe=false&zoomOut=false" />
      </ShaderGradientCanvas>
      <div className="bottom-shadow"></div>
      <div className="page">
      {sections.map((text, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`section ${index < unlocked ? "open" : "locked"}`}
        >
          {text}

          {index === unlocked - 1 && unlocked < sections.length && (
            <button className="arrow-btn" onClick={unlockNext}>
              v
            </button>
          )}
        </div>
      ))}
      </div>
    </>
  );
}
