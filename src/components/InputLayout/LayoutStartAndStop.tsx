import React from "react";
import { SelectInput } from "..";
import { Position } from "../../utils/interface";

export type LayoutStartAndStopProps = {
  startPosition: Position;
  setStartPosition: React.Dispatch<React.SetStateAction<Position>>;
  stopPosition: Position;
  setStopPosition: React.Dispatch<React.SetStateAction<Position>>;
  positionStartInput: any;
  positionStopInput: any;
};

const LayoutStartAndStop = ({
  startPosition,
  setStartPosition,
  stopPosition,
  setStopPosition,
  positionStartInput,
  positionStopInput,
}: LayoutStartAndStopProps) => {
  return (
    <>
      <div className="col__flex">
        <SelectInput
          label="Start X"
          options={positionStartInput.x || []}
          value={startPosition.x || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, x: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Start Y"
          options={positionStartInput.y || []}
          value={startPosition.y || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, y: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Start Z"
          options={positionStartInput.z || []}
          value={startPosition.z || 0}
          onChange={(newValue: number) =>
            setStartPosition({ ...startPosition, z: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop X"
          options={positionStopInput.x || []}
          value={stopPosition.x || 0}
          onChange={(newValue: number) =>
            setStopPosition({ ...stopPosition, x: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop Y"
          options={positionStopInput.y || []}
          value={stopPosition.y || 0}
          onChange={(newValue: number) =>
            setStopPosition({ ...stopPosition, y: newValue })
          }
        />
      </div>
      <div className="col__flex">
        <SelectInput
          label="Stop Z"
          options={positionStopInput.z || []}
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
