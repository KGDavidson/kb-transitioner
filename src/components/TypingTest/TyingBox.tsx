import { Dispatch, SetStateAction, useMemo, useRef } from "react";
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

  const inputRef = useRef<HTMLInputElement | null>(null);

  const mapping: { [key: string]: string } = useMemo(() => {
    if (sourceLayout == null || targetLayout == null) return {};
    return Object.assign(
      {},
      ...sourceLayout
        .split("")
        .map((char, index) => ({ [char]: targetLayout[index] }))
    );
  }, [sourceLayout, targetLayout]);

  return (
    <div onClick={() => inputRef.current?.focus()}>
      <input
        ref={inputRef}
        value={userInput}
        className="absolute opacity-0 w-0 h-0"
        onChange={(e) => {
          setUserInput(e.target.value);
          if (userInput.length == sentence.length) console.log("finished");
        }}
      ></input>
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
