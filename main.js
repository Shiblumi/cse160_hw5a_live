import * as THREE from "three";
import { texture } from "three/examples/jsm/nodes/Nodes.js";
import {
  OBJLoader,
  MTLLoader,
  OrbitControls,
} from "three/examples/jsm/Addons.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { MinMaxGUIHelper, ColorGUIHelper } from "./src/MinMaxGUIHelper.js";

var light_degub = false;

function main() {
  // SCENE INIT
  const canvas = document.querySelector("#c");
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas,
    alpha: true,
  });
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, width / 2, false);

  // SKYBOX
  const loader = new THREE.CubeTextureLoader();
  const bgTexture = loader.load([
    "resources/images/skybox/Epic_BlueSunset_Cam_2_Left+X.png",
    "resources/images/skybox/Epic_BlueSunset_Cam_3_Right-X.png",
    "resources/images/skybox/Epic_BlueSunset_Cam_4_Up+Y.png",
    "resources/images/skybox/Epic_BlueSunset_Cam_5_Down-Y.png",
    "resources/images/skybox/Epic_BlueSunset_Cam_0_Front+Z.png",
    "resources/images/skybox/Epic_BlueSunset_Cam_1_Back-Z.png",
  ]);
  scene.background = bgTexture;

  // CAMERA
  const camera = initCamera();
  function updateCamera() {
    camera.updateProjectionMatrix();
  }
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  // LIGHTS
  // Hemisphere Light
  const skyColor = 0xb1e1ff;
  const groundColor = 0xb97a20;
  const intensity_hem = 2;
  const light_hem = new THREE.HemisphereLight(
    skyColor,
    groundColor,
    intensity_hem
  );
  light_hem.position.set(-1, 20, 4);
  scene.add(light_hem);

  // Ambient Light
  const color = 0xffffff;
  const intensity_amb = 9;
  const light_amb = new THREE.AmbientLight(color, intensity_amb);
  light_amb.position.set(0, 20, 0);
  scene.add(light_amb);

  // Spot Light 1
  const color_spt = 0x64e7e7;
  const intensity_spt = 100;
  const light_spt1 = new THREE.SpotLight(color_spt, intensity_spt);
  light_spt1.position.set(-2, 2, 3.7);
  light_spt1.target.position.set(-2, 0.25, 3.7);
  light_spt1.angle = Math.PI / 12;
  light_spt1.penumbra = 1;
  scene.add(light_spt1);
  scene.add(light_spt1.target);
  const helper1 = new THREE.SpotLightHelper(light_spt1);

  // Spot Light 2
  const light_spt2 = new THREE.SpotLight(color_spt, intensity_spt);
  light_spt2.position.set(2, 2, 3.7);
  light_spt2.target.position.set(2, 0.25, 3.7);
  light_spt2.angle = Math.PI / 12;
  light_spt2.penumbra = 1;
  scene.add(light_spt2);
  scene.add(light_spt2.target);
  const helper2 = new THREE.SpotLightHelper(light_spt2);

  if (light_degub) {
    scene.add(helper1);
    scene.add(helper2);
  }

  // PRIMITIVE SHAPES (20/20)
  const toybox1 = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  makeInstance(toybox1, 0x44aa88, [-2, -0.65, -2]); // 1
  makeInstance(toybox1, 0xb4cc49, [-2.15, -0.65, -2]); // 2
  makeInstance(toybox1, 0xe64e4b, [-2.3, -0.65, -2]); // 3
  makeInstance(toybox1, 0xaeea00, [-2.22, -0.55, -2]); // 4
  makeInstance(toybox1, 0x00b8d4, [-2.07, -0.55, -2]); // 5
  makeInstance(toybox1, 0x9575cd, [-2.15, -0.45, -2]); // 6

  const toybox2 = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  toybox2.rotateY(Math.PI / 4);
  makeInstance(toybox2, 0xb4cc49, [0.15, -0.53, -2.3]); // 7
  makeInstance(toybox2, 0xe64e4b, [0, -0.53, -2.3]); // 8
  makeInstance(toybox2, 0xaeea00, [-0.15, -0.53, -2.3]); // 9
  makeInstance(toybox2, 0x00b8d4, [-0.07, -0.43, -2.3]); // 10
  makeInstance(toybox2, 0x9575cd, [0.08, -0.43, -2.3]); // 11
  makeInstance(toybox2, 0x44aa88, [0, -0.33, -2.3]); // 12

  const sphere1 = new THREE.DodecahedronGeometry(4, 5);
  makeInstance(sphere1, 0x44aa88, [10, 10, 10]);  // 13

  const sphere2 = new THREE.DodecahedronGeometry(5, 6);
  makeInstance(sphere2, 0xFFA726, [-10, -8, -9]); // 14

  const cone1 = new THREE.ConeGeometry(4, 6, 20);
  makeInstance(cone1, 0xF06292, [-7, -3, 10]); // 15

  const cone2 = new THREE.ConeGeometry(2, 6, 20);
  cone2.rotateZ(Math.PI/1.5);
  cone2.rotateY(Math.PI/4);
  makeInstance(cone2, 0x4CAF50, [5, 4, -9]); // 16

  const cube1 = new THREE.BoxGeometry(7, 7, 7.7);
  cube1.rotateY(Math.PI / 4);
  cube1.rotateX(Math.PI / 3);
  makeInstance(cube1, 0x2196F3, [8, -4, -2]); // 17

  const cube2 = new THREE.BoxGeometry(7, 7, 7.7);
  cube2.rotateY(Math.PI/7);
  cube2.rotateX(Math.PI / 4);
  cube2.rotateZ(Math.PI/3);
  makeInstance(cube2, 0xE57373, [-13, 4, -3]); // 18

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const cubes = [
    makeInstance(
      geometry,
      0x8844aa,
      [-2, 0.25, 3.7],
      "resources/images/Mario_question.png"
    ),  // 19
    makeInstance(
      geometry,
      0xffffff,
      [2, 0.25, 3.7],
      "resources/images/wall.jpg"
    ), // 20
  ];

  // WINDMILL
  {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("resources/models/Windmill/windmill_001.mtl", (mtl) => {
      mtl.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("resources/models/Windmill/windmill_001.obj", (root) => {
        root.scale.set(0.2, 0.2, 0.2);
        root.position.set(2, -0.7, -3.6);
        root.rotation.y = 0.65 * 2 * Math.PI;
        scene.add(root);
      });
    });
  }

  // SWIMMING POOL
  {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("resources/models/Swimming pool/SwimmingPool.mtl", (mtl) => {
      mtl.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load(
        "resources/models/Swimming pool/SwimmingPool.obj",
        (root) => {
          root.scale.set(0.2, 0.2, 0.2);
          root.position.y = -2;
          // root.rotation.y = 0.85 * 2 * Math.PI;
          scene.add(root);
        }
      );
    });
  }

  // // POOL TABLE
  // {
  //   const mtlLoader = new MTLLoader();
  //   mtlLoader.load("resources/models/Pool_Table/PoolTable.mtl", (mtl) => {
  //     mtl.preload();
  //     const objLoader = new OBJLoader();
  //     objLoader.setMaterials(mtl);
  //     objLoader.load("resources/models/Pool_Table/PoolTable.obj", (root) => {
  //       root.scale.set(0.5, 0.5, 0.5);
  //       root.position.set(-2.3, -0.73, 0.75);
  //       root.rotation.y = 0.75 * 2 * Math.PI;
  //       scene.add(root);
  //     });
  //   });
  // }

  // PLANE
  // {
  //   const planeSize = 40;

  //   const loader = new THREE.TextureLoader();
  //   const texture = loader.load(
  //     "https://threejs.org/manual/examples/resources/images/checker.png"
  //   );
  //   texture.wrapS = THREE.RepeatWrapping;
  //   texture.wrapT = THREE.RepeatWrapping;
  //   texture.magFilter = THREE.NearestFilter;
  //   //texture.colorSpace = THREE.SRGBColorSpace;
  //   const repeats = planeSize / 2;
  //   texture.repeat.set(repeats, repeats);

  //   const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  //   const planeMat = new THREE.MeshPhongMaterial({
  //     map: texture,
  //     side: THREE.DoubleSide,
  //   });
  //   const mesh = new THREE.Mesh(planeGeo, planeMat);
  //   mesh.rotation.x = Math.PI * -0.5;
  //   mesh.position.y = -1;
  //   scene.add(mesh);
  // }

  // GUI
  {
    // CAMERA GUI
    const gui = new GUI();
    gui.add(camera, "fov", 1, 180).onChange(updateCamera);
    const minMaxGUIHelper = new MinMaxGUIHelper(camera, "near", "far", 0.1);
    gui
      .add(minMaxGUIHelper, "min", 0.1, 50, 0.1)
      .name("near")
      .onChange(updateCamera);
    gui
      .add(minMaxGUIHelper, "max", 0.1, 50, 0.1)
      .name("far")
      .onChange(updateCamera);

    // LIGHT GUI
    gui.addColor(new ColorGUIHelper(light_hem, "color"), "value").name("color");
    gui
      .addColor(new ColorGUIHelper(light_hem, "color"), "value")
      .name("skyColor");
    gui
      .addColor(new ColorGUIHelper(light_hem, "groundColor"), "value")
      .name("groundColor");
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = window.innerWidth;
    const height = window.innerWidth;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, width / 2, false);
    }
    return needResize;
  }

  // RENDER LOOP
  function render(time) {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    time *= 0.001; // convert time to seconds

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function makeInstance(geometry, color, coord, texture_path = null) {
    const loader = new THREE.TextureLoader();
    var material = new THREE.MeshPhongMaterial({ color });

    if (texture_path) {
      const texture = loader.load(texture_path);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      // texture.colorSpace = THREE.SRGBColorSpace;
      texture.encoding = THREE.sRGBEncoding;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.NearestFilter;
      material = new THREE.MeshBasicMaterial({ map: texture });
      material.map = texture;
    }
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = coord[0];
    mesh.position.y = coord[1];
    mesh.position.z = coord[2];
    scene.add(mesh);
    return mesh;
  }
}

function initCamera() {
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 30;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-2.4, -0.3, -3.7);

  return camera;
}

// function loadOBJ(scene, obj_path, mtl_path) {
//   const mtlLoader = new MTLLoader();
//   mtlLoader.load(mtl_path, (mtl) => {
//     mtl.preload();
//     const objLoader = new OBJLoader();
//     objLoader.setMaterials(mtl);
//     objLoader.load(obj_path, (root) => {
//       root.scale.set(0.2, 0.2, 0.2);
//       root.position.y = -0.75;
//       root.rotation.y = 0.85 * 2 * Math.PI;
//       scene.add(root);
//     });
//   });
// return objLoader;
// }

main();
