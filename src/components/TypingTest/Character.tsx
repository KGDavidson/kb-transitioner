type Props = {
  sourceLayoutChar: string;
  targetLayoutChar: string;
  userInputChar: string | null;
};

function Character({
  sourceLayoutChar,
  targetLayoutChar,
  userInputChar,
}: Props) {
  const getCharClass = (
    defaultClass: string,
    matchClass: string,
    mismatchClass: string
  ) => {
    if (userInputChar == null) return defaultClass;
    return userInputChar === targetLayoutChar ? matchClass : mismatchClass;
  };

  return (
    <span className="inline-block">
      <span
        className={`m-0.5 ${getCharClass(
          "text-zinc-500",
          "text-white",
          "text-rose-500"
        )} text-center focus:blur-sm block`}
      >
        {targetLayoutChar}
      </span>
      <span
        className={`m-0.5 ${getCharClass(
          "text-zinc-500",
          "text-emerald-700",
          "text-rose-800"
        )}  text-xs text-center focus:blur-sm block`}
      >
        {sourceLayoutChar}
      </span>
    </span>
  );
}

export default Character;
