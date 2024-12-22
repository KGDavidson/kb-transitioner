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
    inputChar: string | null,
    defaultClassName: string,
    matchClassName: string,
    mismatchClassName: string,
    mismatchSpaceClassName: String
  ) => {
    return userInputChar == null
      ? defaultClassName
      : userInputChar === targetLayoutChar
      ? matchClassName
      : inputChar == " "
      ? mismatchSpaceClassName || mismatchClassName
      : mismatchClassName;
  };

  return (
    <span className="inline-block">
      <span
        className={` text-center focus:blur-sm block whitespace-pre ${getCharClassName(
          userInputChar ?? targetLayoutChar,
          "text-zinc-500",
          "text-white",
          "text-rose-500",
          "underline decoration-rose-500"
        )}`}
      >
        {userInputChar ?? targetLayoutChar}
      </span>
      <span
        className={`m-0.5 text-xs text-center focus:blur-sm block whitespace-pre ${getCharClassName(
          sourceLayoutChar,
          "text-zinc-500",
          "text-emerald-700",
          "text-rose-800",
          "underline decoration-rose-800"
        )}`}
      >
        {sourceLayoutChar}
      </span>
    </span>
  );
}

export default Character;
