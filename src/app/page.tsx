"use client";
import ASCIIText from "./components/ASCIIText";
import Terminal from "./components/Terminal";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <main className="bg-neutral-900 w-screen h-screen">
      <div className="flex flex-col items-center w-full h-full">
        <div id="header-text" className="flex p-3"><ASCIIText /></div>
        <div id="terminal" className="flex pt-3 pb-5 px-3 w-4/5 h-full"><Terminal /></div>
      </div>
    </main>
  );
}
