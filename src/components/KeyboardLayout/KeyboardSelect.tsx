import Select from "react-select";
import { KBLayout, KBLayoutType } from "../../enums/KBLayout";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setLayout: Dispatch<SetStateAction<KBLayoutType>>;
};

export const KeyboardSelect = (props: Props) => {
  const { setLayout } = props;

  const options: { value: string; label: string }[] = Object.entries(
    KBLayout
  ).map((keyValue) => {
    return { value: keyValue[1], label: keyValue[0] };
  });

  return (
    <div>
      <Select
        classNames={{
          control: () => "!bg-zinc-700 !border-zinc-700 !shadow-none",
          singleValue: () => "!text-zinc-400",
          menu: () => "!bg-zinc-700 !text-zinc-400",
          option: () => "hover:bg-zinc-600 bg-transparent active:bg-zinc-600",
        }}
        options={options}
        defaultValue={options[0]}
        onChange={(choice) => {
          setLayout(choice?.value as KBLayout);
        }}
      />
    </div>
  );
};
