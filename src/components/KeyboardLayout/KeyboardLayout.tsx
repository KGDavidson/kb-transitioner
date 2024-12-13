import { KBLayoutType } from "../../enums/KBLayout";
import Key from "./Key";

type Props = {
  layout: KBLayoutType;
};

function KeyboardLayout(props: Props) {
  const { layout } = props;

  return (
    <div className="bg-zinc-700 p-2 w-fit rounded-md grid grid-cols-11">
      {layout
        ? layout.split("").map((char, index) => {
            if (index % 10 == 4) {
              return (
                <>
                  <Key char={char} />
                  <Key char={null} />
                </>
              );
            }
            return <Key char={char} />;
          })
        : null}
    </div>
  );
}

export default KeyboardLayout;
