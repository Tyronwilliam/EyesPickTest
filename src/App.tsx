import { Toaster } from "react-hot-toast";
import { Formulaire, MazeLayout } from "./components";
import useGenerateMaze from "./hook/useGenerateMaze";

function App() {
  const {
    mazeDimensions,
    setMazeDimensions,
    startPosition,
    setStartPosition,
    stopPosition,
    setStopPosition,
    handleSubmitForm,
    mazeSolution,
  } = useGenerateMaze();
  const mazeSolutionLength = mazeSolution?.length;
  return (
    <main>
      <Toaster />
      <h1>Bienvenue sur votre simulateur de labyrinthe</h1>
      <section className="layout__form">
        <Formulaire
          handleSubmitForm={handleSubmitForm}
          setMazeDimensions={setMazeDimensions}
          mazeDimensions={mazeDimensions}
          startPosition={startPosition}
          stopPosition={stopPosition}
          setStopPosition={setStopPosition}
          setStartPosition={setStartPosition}
        />
      </section>
      <div className="maze-container">
        <MazeLayout
          mazeSolutionLength={mazeSolutionLength}
          mazeSolution={mazeSolution}
        />
      </div>
    </main>
  );
}

export default App;
