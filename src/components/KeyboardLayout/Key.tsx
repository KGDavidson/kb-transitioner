type Props = {
  char: string | null;
};

function Key({ char }: Props) {
  return (
    <span
      className={`${
        char == null ? "" : "bg-zinc-600"
      } m-1 py-0.5 px-1 rounded text-white text-center`}
    >
      {char}
    </span>
  );
}

export default Key;
