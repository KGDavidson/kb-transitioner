type Props = {
  char: string | null;
};

function Key({ char }: Props) {
  const nullClassName = char == null ? "" : "bg-zinc-600";

  return (
    <span
      className={`${nullClassName} m-1 py-0.5 px-1 rounded text-white text-center`}
    >
      {char}
    </span>
  );
}

export default Key;
