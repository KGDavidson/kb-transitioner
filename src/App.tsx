import { useState } from "react";
import { KBLayout, KBLayoutType } from "./enums/KBLayout";
import KeyboardLayout from "./components/KeyboardLayout/KeyboardLayout";
import { KeyboardSelect } from "./components/KeyboardLayout/KeyboardSelect";
import TypingBox from "./components/TypingTest/TyingBox";
import quotesData from "./components/TypingTest/quotesData.json";

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayoutType>(
    KBLayout.QWERTY
  );
  const [targetLayout, setTargetLayout] = useState<KBLayoutType>(
    KBLayout.WORKMAN
  );

  const [sentence, setSentence] = useState("");

  const [userInput, setUserInput] = useState("");

  const restart = async () => {
    var randomQuote =
      quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
    setSentence(randomQuote.quote);
    setUserInput("");
  };

  return (
    <div className="bg-zinc-900 h-screen w-screen p-8">
      <KeyboardSelect setLayout={setSourceLayout} layout={sourceLayout} />
      <KeyboardLayout layout={sourceLayout} />
      <KeyboardSelect setLayout={setTargetLayout} layout={targetLayout} />
      <KeyboardLayout layout={targetLayout} />
      <TypingBox
        sentence={sentence}
        userInput={userInput}
        setUserInput={setUserInput}
        sourceLayout={sourceLayout}
        targetLayout={targetLayout}
      />
      <button onClick={restart}>Restart Test</button>
    </div>
  );
}

export default App;
