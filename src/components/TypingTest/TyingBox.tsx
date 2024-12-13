import { useState } from "react";
import Character from "./Character";

type Props = {
  sentence: String;
};

function TypingBox(props: Props) {
  const { sentence } = props;

  const [userInput, setUserInput] = useState("");

  function handleKeyDown(event: { key: string }) {
    if (event.key == "Backspace") {
      setUserInput((userInput) => {
        console.log;
        return userInput[-1];
      });
    }
    setUserInput((userInput) => {
      console.log;
      return userInput + event.key;
    });
  }

  function getValid(index: number, char: string) {
    console.log("updating valid");
    try {
      if (userInput[index]) {
        return userInput[index] == char ? true : false;
      }
      return null;
    } catch {
      return null;
    }
  }

  return (
    <div
      tabIndex={0}
      className="blur focus:blur-none"
      onKeyDown={handleKeyDown}
    >
      {sentence
        ? sentence.split("").map((char, index) => {
            return <Character char={char} valid={getValid(index, char)} />;
          })
        : null}
    </div>
  );
}

export default TypingBox;
