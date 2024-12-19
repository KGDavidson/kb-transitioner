import { Dispatch, SetStateAction, useMemo } from "react";
import Character from "./Character";
import { KBLayoutType } from "../../enums/KBLayout";

type Props = {
  sentence: string;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  sourceLayout: KBLayoutType;
  targetLayout: KBLayoutType;
};

function TypingBox(props: Props) {
  const { sentence, userInput, setUserInput, sourceLayout, targetLayout } =
    props;

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

  function convertString(
    input: string,
    source: KBLayoutType,
    target: KBLayoutType
  ) {
    // Create a mapping object from source to target
    if (source == null || target == null) return input;

    const mapping: { [key: string]: string } = {};
    for (let i = 0; i < source.length; i++) {
      mapping[source[i]] = target[i];
    }
    // Convert the input string
    return input
      .split("")
      .map((char: string | number) => mapping[char] || char)
      .join("");
  }

  const convertedSentence = useMemo(
    () => convertString(sentence, sourceLayout, targetLayout),
    [sentence, sourceLayout, targetLayout]
  );

  return (
    <div
      tabIndex={0}
      className="blur focus:blur-none"
      onKeyDown={handleKeyDown}
    >
      {sentence
        ? sentence.split("").map((char, index) => {
            return (
              <Character
                char={char}
                convertedChar={convertedSentence[index]}
                userInputChar={userInput[index]}
              />
            );
          })
        : null}
    </div>
  );
}

export default TypingBox;
