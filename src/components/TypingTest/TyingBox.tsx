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
    if (event.key == "Backspace") {
      setUserInput((userInput) => {
        return userInput.slice(0, -1);
      });
    } else if (event.key == "Shift") {
    } else {
      setUserInput((userInput) => {
        return userInput + event.key;
      });
    }
  }

  const mapping: { [key: string]: string } = useMemo(() => {
    const tempMapping: { [key: string]: string } = {};
    if (sourceLayout == null || targetLayout == null) {
    } else {
      for (let i = 0; i < sourceLayout.length; i++) {
        tempMapping[sourceLayout[i]] = targetLayout[i];
      }
    }
    return tempMapping;
  }, [sourceLayout, targetLayout]);

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
                sourceLayoutChar={char}
                targetLayoutChar={mapping[char] || char}
                userInputChar={userInput[index]}
              />
            );
          })
        : null}
    </div>
  );
}

export default TypingBox;
