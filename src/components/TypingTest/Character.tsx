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
  const getCharClassName = (
    defaultClassName: string,
    matchClassName: string,
    mismatchClassName: string
  ) => {
    if (userInputChar == null) return defaultClassName;
    return userInputChar === targetLayoutChar
      ? matchClassName
      : mismatchClassName;
  };

  return (
    <span className="inline-block">
      <span
        className={`m-0.5 text-center focus:blur-sm block whitespace-pre ${getCharClassName(
          "text-zinc-500",
          "text-white",
          "text-rose-500"
        )}`}
      >
        {userInputChar ?? targetLayoutChar}
      </span>
      <span
        className={`m-0.5 text-xs text-center focus:blur-sm block whitespace-pre ${getCharClassName(
          "text-zinc-500",
          "text-emerald-700",
          "text-rose-800"
        )}`}
      >
        {sourceLayoutChar}
      </span>
    </span>
  );
}

export default Character;
