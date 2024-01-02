import { SolveMazePayload } from "./interface";

export const resolvedMaze = async (payload: SolveMazePayload) => {
  try {
    const response = await fetch(
      "https://europe-west1-swift-doodad-319113.cloudfunctions.net/find_path1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return {
      error: true,
      message: "An error occurred while making the request.",
    };
  }
};
