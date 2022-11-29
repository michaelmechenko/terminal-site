import React from "react";
import { useState } from "react";
import HeaderText from "./components/HeaderText";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <main className="pt-4">
        <div className="flex justify-center flex-row flex-wrap px-5">
          <div id="AboutWrapper">
            <HeaderText />
            {/* <HowToUse />  */}
          </div>
          <div id="TerminalWrapper" className="pt-3 px-8 overflow-auto">
            <div
              className="border-2 border-opacity-20 border-solid
              border-amber-100 b rounded-md w-200 min-h-142 h-full p-2"
            >
              <div id="TerminalOutput" className="break-words whitespace-pre-line">
                {output}
              </div>
              <div className="flex">
                <span className="">michael@terminal ~&nbsp;</span>
                <span className="user-input">{input}</span>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-2/3"
                  value={input}
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
        </div>
      </main>
    </>
  );
}
