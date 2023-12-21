import React from "react";
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
  const [mazeSolution, setMazeSolution] = React.useState<[]>([]);

  const solveMaze = async (maze: MazeCell) => {
    const payload: SolveMazePayload = {
      maze: maze,
      start: [startPosition.x, startPosition.y, startPosition.z],
      stop: [stopPosition.x, stopPosition.y, stopPosition.z],
    };

    const response = await resolvedMaze(payload);
    return response;
  };

  const handleSubmitForm = async (e: FormEvent, dimensions: MazeDimensions) => {
    e.preventDefault();
    if ([dimensions.N, dimensions.M, dimensions.K].some((dim) => dim === 0)) {
      toast.error("Veuillez saisir des dimensions non nulles pour N, M et K.");
      return;
    }
    const maze = generateMaze(dimensions);
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
  };
};

export default useGenerateMaze;
