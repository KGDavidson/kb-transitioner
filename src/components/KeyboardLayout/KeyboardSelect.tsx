import Select from "react-select";
import { KBLayout } from "../../enums/KBLayout";

const keys = Object.keys(KBLayout);

var options: { value: string; label: string }[] = [];

keys.map((key) => {
  options.push({ value: key, label: key });
});

export const KeyboardSelect = () => {
  return <Select options={options} />;
};
