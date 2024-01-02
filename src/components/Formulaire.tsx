import { LayoutDimension } from ".";
import { FormEvent, MazeDimensions } from "../utils/interface";
import { LayoutDimensionProps } from "./InputLayout/LayoutDimension";
import LayoutStartAndStop, {
  LayoutStartAndStopProps,
} from "./InputLayout/LayoutStartAndStop";
import "./formulaire.css";
export type FormCombinedProps = LayoutStartAndStopProps &
  LayoutDimensionProps & {
    handleSubmitForm: (e: FormEvent, mazedimension: MazeDimensions) => void;
    positionStartInput: any;
    positionStopInput: any;
  };

const Formulaire = ({
  handleSubmitForm,
  setMazeDimensions,
  mazeDimensions,
  startPosition,
  stopPosition,
  setStopPosition,
  setStartPosition,
  positionStartInput,
  positionStopInput,
}: FormCombinedProps) => {
  return (
    <form
      onSubmit={(e) => handleSubmitForm(e, mazeDimensions)}
      className="layout__form"
    >
      <div className="container__input">
        <LayoutDimension
          mazeDimensions={mazeDimensions}
          setMazeDimensions={setMazeDimensions}
        />
      </div>
      <div className="container__input start__stop">
        <LayoutStartAndStop
          startPosition={startPosition}
          setStartPosition={setStartPosition}
          stopPosition={stopPosition}
          setStopPosition={setStopPosition}
          positionStartInput={positionStartInput}
          positionStopInput={positionStopInput}
        />
      </div>
      <button type="submit">Générer mon labyrinthe</button>
    </form>
  );
};

export default Formulaire;
