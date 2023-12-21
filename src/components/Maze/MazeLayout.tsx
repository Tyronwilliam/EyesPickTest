import { MazeCell } from "../../utils/interface";
import MazeRenderer from "./MazeRenderer";
import "./Maze.css";
const MazeLayout = ({
  mazeSolutionLength,
  mazeSolution,
}: {
  mazeSolutionLength: number;
  mazeSolution: MazeCell;
}) => {
  return mazeSolutionLength > 0 ? (
    <MazeRenderer maze={mazeSolution} />
  ) : (
    <div className="maze-container border">
      <p>Choissisez des valeurs pour faire apparaitre votre labyrinthe</p>
    </div>
  );
};

export default MazeLayout;
