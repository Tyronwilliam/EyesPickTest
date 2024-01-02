import React, { useEffect } from "react";
import {
  FormEvent,
  MazeCell,
  MazeDimensions,
  Position,
  SolveMazePayload,
} from "../utils/interface";
import { resolvedMaze } from "../utils/service";
import { generateMaze } from "../utils/function";
import toast from "react-hot-toast";

interface StartPositionInput {
  x: null | [];
  y: null | [];
  z: null | [];
}
const useGenerateMaze = () => {
  const [mazeDimensions, setMazeDimensions] = React.useState<MazeDimensions>({
    N: 0,
    M: 0,
    K: 0,
  });
  const [startPosition, setStartPosition] = React.useState<Position>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [stopPosition, setStopPosition] = React.useState<Position>({
    x: 1,
    y: 2,
    z: 2,
  });
  const [positionStartInput, setPostionStartInput] =
    React.useState<StartPositionInput>({
      x: null,
      y: null,
      z: null,
    });
  const [positionStopInput, setPostionStoptInput] = React.useState({
    x: null,
    y: null,
    z: null,
  });
  const [mazeSolution, setMazeSolution] = React.useState<[]>([]);

  const startInputValue = (setState: any, state: any) => {
    for (const key in mazeDimensions) {
      //@ts-ignore
      if (mazeDimensions.hasOwnProperty(key) && mazeDimensions[key] > 0) {
        //@ts-ignore
        const value = mazeDimensions[key];
        const newArray = Array(value)
          .fill(0)
          .map((_, index) => index + 1);

        if (key === "N") {
          //@ts-ignore
          setState({ ...state, x: newArray });
        } else if (key === "M") {
          //@ts-ignore
          setState({ ...state, y: newArray });
        } else if (key === "K") {
          //@ts-ignore
          setState({ ...state, z: newArray });
        }

        console.log(newArray, "VALUE ");
      }
    }
  };
  useEffect(() => {
    startInputValue(setPostionStartInput, positionStartInput);
    startInputValue(setPostionStoptInput, positionStopInput);
  }, [mazeDimensions]);

  
  const solveMaze = async (maze: MazeCell) => {
    const payload: SolveMazePayload = {
      maze: maze,
      start: [startPosition.x, startPosition.y, startPosition.z],
      stop: [stopPosition.x, stopPosition.y, stopPosition.z],
    };

    const response = await resolvedMaze(payload);
    console.log(response, "REPONSE SOLVEZ MAZE");
    return response;
  };

  const handleSubmitForm = async (e: FormEvent, dimensions: MazeDimensions) => {
    e.preventDefault();
    if ([dimensions.N, dimensions.M, dimensions.K].some((dim) => dim === 0)) {
      toast.error("Veuillez saisir des dimensions non nulles pour N, M et K.");
      return;
    }
    const maze = generateMaze(dimensions);
    console.log(maze, "GENERATION DU MAZE ");
    const response = await solveMaze(maze);
    if (response?.path?.length > 0) {
      setMazeSolution(response?.path);
      toast.success("C'est fait !");
    } else if (response?.path?.length === 0) {
      toast.error("Oups ! Valeurs invalide");
      setMazeSolution([]);
    } else {
      toast.error(response?.message);
    }
  };
  return {
    mazeDimensions,
    setMazeDimensions,
    startPosition,
    setStartPosition,
    stopPosition,
    setStopPosition,
    mazeSolution,
    setMazeSolution,
    solveMaze,
    generateMaze,
    handleSubmitForm,
    positionStartInput,
    setPostionStartInput,
    positionStopInput,
    setPostionStoptInput,
  };
};

export default useGenerateMaze;

// Que le start and stop il peuvent pas etre superioeur a la dimension choissis
