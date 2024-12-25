
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { AdditiveBlending, Float32BufferAttribute } from 'three'

// Base setup
const gui = new dat.GUI({ width: 400, closed: true })
const textureLoader = new THREE.TextureLoader()
const shape = textureLoader.load('/particleShape/1.png')
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

// Fun facts array
const facts = [
    "The universe has no center and is constantly expanding.",
    "A day on Venus is longer than a year on Venus.",
    "There are more trees on Earth than stars in the Milky Way.",
    "Neutron stars can spin at a rate of 600 rotations per second."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
}

// Existing galaxy generation code...
// Add your existing galaxy generation functions and setup here

// Mouse movement interaction
document.addEventListener('mousemove', function(e) {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;
    const mouseX = e.clientX - width;
    const mouseY = e.clientY - height;
    camera.position.x = mouseX * 0.005;
    camera.position.y = -mouseY * 0.005;
    camera.lookAt(scene.position);
});

// Existing animation and rendering code...
// Add your existing animation functions and rendering setup here
