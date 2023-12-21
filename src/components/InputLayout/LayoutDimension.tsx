import { SelectInput } from "..";
import { selectInputValue } from "../../utils/inputValue";
import { MazeDimensions } from "../../utils/interface";

export type LayoutDimensionProps = {
  mazeDimensions: MazeDimensions;
  setMazeDimensions: React.Dispatch<React.SetStateAction<MazeDimensions>>;
};

const LayoutDimension = ({
  mazeDimensions,
  setMazeDimensions,
}: LayoutDimensionProps) => {
  return (
    <>
      <div className="col__flex">
        <SelectInput
          label="Dimension N"
          options={selectInputValue} 
          value={mazeDimensions.N}
          onChange={(newValue) =>
            setMazeDimensions({ ...mazeDimensions, N: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Dimension M"
          options={selectInputValue}
          value={mazeDimensions.M}
          onChange={(newValue) =>
            setMazeDimensions({ ...mazeDimensions, M: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Dimension K"
          options={selectInputValue}
          value={mazeDimensions.K}
          onChange={(newValue) =>
            setMazeDimensions({ ...mazeDimensions, K: newValue })
          }
        />
      </div>
    </>
  );
};

export default LayoutDimension;
