import { useEffect } from "react";
import * as THREE from "three";
import { getMaterial } from "../../utils/function";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MazeCell } from "../../utils/interface";

const MazeRenderer = ({ maze }: { maze: MazeCell }) => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const container = document.getElementById("maze-container");

    if (maze?.length > 0) {
      if (container) {
        // Create a renderer
        const renderer = new THREE.WebGLRenderer();

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        renderer.setSize(container.clientWidth, 600);
        container.appendChild(renderer.domElement);

        // Create maze geometry
        const mazeGeometry = new THREE.BoxGeometry(1, 1, 1);

        maze.forEach((row: any, rowIndex: any) => {
          row.forEach((column: any, colIndex: any) => {
            const cubeMaterial = getMaterial(column);

            const cube = new THREE.Mesh(mazeGeometry, cubeMaterial);
            cube.position.set(-rowIndex, colIndex, 1);
            scene.add(cube);
          });
        });

        const light = new THREE.PointLight(0xffffff);
        light.position.set(5, 5, 5);
        scene.add(light);

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();

          if (renderer) {
            renderer.render(scene, camera);
          }
        };

        animate();

        const handleResize = () => {
          if (container) {
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            renderer.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          if (container && renderer) {
            container.removeChild(renderer.domElement);
          }
        };
      } else {
        return;
      }
    }
  }, [maze]);

  return <div id="maze-container"></div>;
};

export default MazeRenderer;
