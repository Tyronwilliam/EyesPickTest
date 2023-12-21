import React from "react";
import { selectInputStartStop } from "../../utils/inputValue";
import { SelectInput } from "..";
import { Position } from "../../utils/interface";

export type LayoutStartAndStopProps = {
  startPosition: Position;
  setStartPosition: React.Dispatch<React.SetStateAction<Position>>;
  stopPosition: Position;
  setStopPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const LayoutStartAndStop = ({
  startPosition,
  setStartPosition,
  stopPosition,
  setStopPosition,
}: LayoutStartAndStopProps) => {
  return (
    <>
      <div className="col__flex">
        <SelectInput
          label="Start X"
          options={selectInputStartStop}
          value={startPosition.x || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, x: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Start Y"
          options={selectInputStartStop}
          value={startPosition.y || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, y: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Start Z"
          options={selectInputStartStop}
          value={startPosition.z || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, z: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop X"
          options={selectInputStartStop}
          value={stopPosition.x || 0}
          onChange={(newValue: number) =>
            setStopPosition({ ...stopPosition, x: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop Y"
          options={selectInputStartStop}
          value={stopPosition.y || 0}
          onChange={(newValue: number) =>
            setStopPosition({ ...stopPosition, y: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop Z"
          options={selectInputStartStop}
          value={stopPosition.z || 0}
          onChange={(newValue: number) =>
            setStopPosition({ ...stopPosition, z: newValue })
          }
        />
      </div>
    </>
  );
};

export default LayoutStartAndStop;
