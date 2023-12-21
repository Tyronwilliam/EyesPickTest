# React + TypeScript + Vite

Front-End Developer Exercise: 3D Maze Solver Interface

### Installation

npm install

npm run dev

If your facing some server error please : 

1. Check the console 
2. Click on the blue link, you see on the error display 
3. Allow CORS from anywhere 


Clone the repos here : git@github.com:Tyronwilliam/EyesPickTest.git

### **Overview**

Your task is to create a web interface that allows users to interact with a 3D maze-solving API. The 3D maze is a grid of size (N x M x K). Each cell of a grid is either an empty cell, noted **0** or an obstacle, noted **1.**

The API endpoint is already provided and will solve a 3D maze given the maze structure and start/stop positions.

### **Requirements**

1. **Maze Creation Interface:**
   - Implement a user interface to generate a random 3D maze (like the matrix in the example).
   - The interface should allow users to specify the dimensions of the maze. For instance, a 3x3x3 generates a matrix like the one in the example.
2. **Defining Start and Stop Cells:**
   - Users should be able to specify the start and stop positions within the maze. Start and stop positions are the 3 coordinates (see example)
3. **Maze Solver Integration:**
   - Once the maze and start/stop cells are defined, add a button to send the maze data to the provided API endpoint and receive the solution.
4. **Displaying the Solution:**
   - Implement a way to visually show the path returned from the API. Display can be anything as long as it illustrates the path. It could be just the raw list in text (as a minimum), or a 3D visualization, or any other way you find relevant to visualize what is happening.
   - (Optional) display the maze in 3D
   - (Optional) display the path within the maze.
5. **Error Handling:**
   - The interface should handle and display errors appropriately (e.g., server not reachable, invalid maze configuration).
6. **Responsive Design:**
   - Ensure that the web page is responsive and usable across different devices and screen sizes.
