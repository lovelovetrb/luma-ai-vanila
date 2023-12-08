import "./style.css";
import * as THREE from "three";
import { LumaSplatsThree } from "@lumaai/luma-web";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const splats = new LumaSplatsThree({
  source: "https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff",
});

scene.add(splats);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  splats.rotation.x += 0.01;
  splats.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
