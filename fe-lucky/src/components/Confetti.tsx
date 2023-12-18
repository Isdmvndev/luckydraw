import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useCounter } from '~/context/ConfettiContext';
function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
}

export default function Fireworks() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  debugger
  
  const getInstance = useCallback((instance: null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);
  const { state, dispatch } = useCounter();
  useEffect(() => {
  if(state){
    startAnimation();
  }
  }, [state]);

  return (
    <>
     {/* <div>
        <button onClick={startAnimation}>Start</button>
        <button onClick={pauseAnimation}>Pause</button>
        <button onClick={stopAnimation}>Stop</button>
      </div> */}
      <ReactCanvasConfetti
      refConfetti={getInstance}
      style={canvasStyles}
    />
    </>
   
  );
}
