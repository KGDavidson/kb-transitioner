import Select from "react-select";
import { KBLayout, KBLayoutType } from "../../enums/KBLayout";
import { Dispatch, SetStateAction, useMemo } from "react";

type Props = {
  setLayout: Dispatch<SetStateAction<KBLayoutType>>;
};

export const KeyboardSelect = (props: Props) => {
  const { setLayout } = props;

  const options = useMemo(
    () =>
      Object.entries(KBLayout).map((keyValue) => ({
        value: keyValue[1],
        label: keyValue[0],
      })),
    []
  );

  return (
    <Select
      classNames={{
        control: () => "!bg-zinc-700 !border-zinc-700 !shadow-none",
        singleValue: () => "!text-white",
        menu: () => "!bg-zinc-700 !text-zinc-400",
        option: () => "hover:!bg-zinc-600 !bg-transparent",
      }}
      options={options}
      defaultValue={options[0]}
      onChange={(choice) => {
        setLayout(choice?.value as KBLayout);
      }}
    />
  );
};
