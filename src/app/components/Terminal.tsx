import React from "react";
import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div
      className="border-2 border-opacity-20 border-solid
              border-slate-100 b rounded-md w-full h-full p-2"
    >
      <div
        id="terminal-output"
        className="break-words whitespace-pre-line background-slate-100"
      >
        {output}
      </div>
      <div className="w-full overflow-hidden flex flew-row w-full">
        <div className="position-static">michael@terminal ~&nbsp;</div>
        <div className="position-relative w-9/10">
          <span className="user-input position-absolute b-2 border-solid border-opacity-100 border-slate-200 w-full">
            {input}
          </span>
          <input
            type="text"
            autoComplete="off"
            maxLength={153}
            value={input}
            className="w-full position-absolute"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let newOutput = "";
                newOutput = output + "$ " + input + "\n";
                setOutput(newOutput);
                setInput("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
