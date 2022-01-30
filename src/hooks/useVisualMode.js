import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory (prev => {
      const previousCopy = [...prev];
      if (replace) {
        previousCopy.pop();
      }
      return [...previousCopy, newMode];
    });
  };

  function back() {
    if (history.length > 1) {
      const historyCopy = [...history]
      historyCopy.pop();
      const backMode =  historyCopy[historyCopy.length - 1];
      setMode(backMode)
      setHistory(historyCopy);
    }
  }


  return { mode, transition, back };
}







