import React, { useEffect } from "react";

export default function Timer({ dispatch, second }) {
  const mins = Math.floor(second / 60);
  const secs = Math.floor(second % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "ticTac" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
