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

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

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
    <div onClick={handleContainerClick}>
      <input
        ref={inputRef}
        value={userInput}
        className="absolute opacity-0 w-0 h-0"
        onChange={handleInputChange}
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
