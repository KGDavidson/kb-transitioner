type Props = {
  char: string;
  userInputChar: string | null;
};

function Character({ char, userInputChar }: Props) {
  const valid = userInputChar ? userInputChar === char : null;

  if (valid == null) {
    return (
      <span className="m-0.5 text-zinc-400 text-center focus:blur-sm">
        {char}
      </span>
    );
  }
  if (valid) {
    return (
      <span className="m-0.5 text-white text-center focus:blur-sm">{char}</span>
    );
  }
  return (
    <span className="m-0.5 text-red-600 text-center focus:blur-sm">{char}</span>
  );
}

export default Character;
