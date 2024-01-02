import { MazeCell, MazeDimensions } from "./interface";
import * as THREE from "three";

export const generateMaze = (dimensions: MazeDimensions): MazeCell => {
  const maze: MazeCell = [];
  for (let i = 0; i < dimensions.N; i++) {
    const layer = [];
    for (let j = 0; j < dimensions.M; j++) {
      const row = Array(dimensions.K).fill(0);
      layer.push(row);
    }
    maze.push(layer);
  }
  return maze;
};


export const getMaterial = (value: number) => {
  switch (value) {
    case 0:
      return new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      }); // Green
    case 1:
      return new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      }); // Red
    case 2:
      return new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true,
      }); // Blue
    case 3:
      return new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true,
      }); // Blue
    default:
      return new THREE.MeshBasicMaterial({
        color: 0x808080,
        wireframe: true,
      }); // Gray for unknown value
  }
};
