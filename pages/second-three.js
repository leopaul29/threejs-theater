import * as THREE from "three";

export default function SecondThree() {
  return <></>;
}

let camera, scene, renderer;
let geometry, material, cube;

init();

function init() {
    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );

  camera.position.z = 5;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.1,0.1,0.1);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

function animation() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
