import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector<HTMLCanvasElement>("canvas.webgl");

if (canvas == null) {
	throw new Error("Canvas not found");
}

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), 0.5);
scene.add(mesh);

const sizes = {
	width: 800,
	height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	antialias: true,
	canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
