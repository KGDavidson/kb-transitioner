import { useState } from "react";
import { KBLayout, KBLayoutType } from "./enums/KBLayout";
import KeyboardLayout from "./components/KeyboardLayout/KeyboardLayout";
import { KeyboardSelect } from "./components/KeyboardLayout/KeyboardSelect";
import TypingBox from "./components/TypingTest/TyingBox";
import { GenerateSentence } from "./components/TypingTest/GenerateSentence";

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayoutType>(
    KBLayout.QWERTY
  );
  const [targetLayout, setTargetLayout] = useState<KBLayoutType>(
    KBLayout.WORKMAN
  );

  const [sentence, setSentence] = useState<String>("");

  const [userInput, setUserInput] = useState("");

  const restart = async () => {
    let x = await GenerateSentence();
    setSentence(x);
    setUserInput("");
  };

  return (
    <div className="bg-zinc-900 h-screen w-screen p-8">
      <KeyboardSelect setLayout={setSourceLayout} />
      <KeyboardLayout layout={sourceLayout} />
      <TypingBox
        sentence={sentence}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <button onClick={restart}>Restart Test</button>
    </div>
  );
}

export default App;
