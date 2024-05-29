/*jshint esversion: 6 */
"use strict";
import * as THREE from "three";

document.addEventListener("DOMContentLoaded", initFun);

function initFun() {}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
renderer.render(scene, camera);
