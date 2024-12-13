import { Dispatch, SetStateAction, useState } from "react";
import Character from "./Character";

type Props = {
  sentence: String;
  userInput: String;
  setUserInput: Dispatch<SetStateAction<string>>;
};

function TypingBox(props: Props) {
  const { sentence, userInput, setUserInput } = props;

  function handleKeyDown(event: { key: string }) {
    console.log(event.key);
    if (event.key == "Backspace") {
      setUserInput((userInput) => {
        return userInput.slice(0, -1);
      });
    } else if (event.key == "Shift") {
      console.log(event.key);
    }
    //else if (/^[A-Z]$/i.test(event.key) || event.key == " ")
    else {
      setUserInput((userInput) => {
        return userInput + event.key;
      });
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
            return <Character char={char} userInputChar={userInput[index]} />;
          })
        : null}
    </div>
  );
}

export default TypingBox;
