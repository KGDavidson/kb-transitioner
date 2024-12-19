type Props = {
  char: string;
  convertedChar: string;
  userInputChar: string | null;
};

function Character({ char, convertedChar, userInputChar }: Props) {
  return (
    <span className="inline-block">
      <span
        className={`m-0.5 ${
          userInputChar == null
            ? "text-zinc-500"
            : userInputChar === convertedChar
            ? "text-white"
            : "text-rose-500"
        } text-center focus:blur-sm block  `}
      >
        {convertedChar}
      </span>
      <span
        className={`m-0.5 ${
          userInputChar == null
            ? "text-zinc-500"
            : userInputChar === convertedChar
            ? "text-emerald-700"
            : "text-rose-800"
        }  text-xs text-center focus:blur-sm block`}
      >
        {char}
      </span>
    </span>
  );
}

export default Character;
