import React from "react";

export default function ControlPanel({
  bet = 100,
  balance = 0,
  onSpin,
  onInc,
  onDec,
  spin,
  spinning,
}) {
  return (
    <div className="control-panel">
      <button className="lightning-btn">⚡</button>

      <div className="bet-panel">
        <button className="bet-btn gold" 
        // onClick={onAuto}
        >
          AUTO
        </button>

        <button className="bet-btn silver" onClick={onDec}>
          −
        </button>

        <div className="bet-display">
          <span className="bet-label">BET</span>
          <span className="bet-value">{bet}</span>
        </div>

        <button className="bet-btn gold" onClick={onInc}>
          +
        </button>

        <button className="bet-btn gold" 
        // onClick={onMax}
        >
          MAX
          <br />
          BET
        </button>
      </div>

      <button className="start-btn" onClick={spin} disabled={spinning}>
        START
      </button>
    </div>
  );
}
