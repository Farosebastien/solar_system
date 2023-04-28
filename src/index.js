const THREE = require("three");
const Controls = require("three/examples/jsm/controls/TrackBallControls");

//Textures imports
const bg = require("./images/bg.png");
const solarTexture = require("./images/sun.png");
const mercurianTexture = require("./images/mercure.png");
const venusianTexture = require("./images/venus.png");
const terrianTexture = require("./images/earth.png");
const lunarTexture = require("./images/moon.png");
const marsianTexture = require('./images/mars.png');
const jupiterianTexture = require("./images/jupiter.png");
const saturnianTexture = require("./images/saturne.png");
const saturnianRingsTexture = require("./images/saturne_rings.png");
const uranusianTexture = require("./images/uranus.png");
const uranusianRingsTexture = require("./images/uranus_rings.png");
const neptunianTexture = require("./images/neptune.png");

/*--------Text adding start--------*/
//Get text id div
const text = document.getElementById("text");
text.style.backgroundColor = "#000000";
text.style.display = "flex";
text.style.flexDirection = "column";
text.style.justifyContent = "center";
text.style.alignItems = "center";
//Adding Title
const title = document.createElement("h1");
title.innerText = "Système solaire";
title.style.color = "#ffffff";
title.style.fontSize = "30px";
title.style.margin = "0px 0px 0px 0px";
text.appendChild(title);
//Adding explanations
const explanations = document.createElement("p");
explanations.innerText = "Contrôles: clic droit: rotation, clic gauche: translation, scroll: zoom.";
explanations.style.color = "#ffffff";
explanations.style.fontSize = "15px";
explanations.style.margin = "20px 0px 0px 0px";
text.appendChild(explanations);
/*--------Text adding end--------*/

//Diameter variable
const diam = 150;

//Clock
const clock = new THREE.Clock();

//Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 15000);
camera.position.x = 5000;
camera.position.y = 2000;

//Scene
const scene = new THREE.Scene();

//Textures
const starsTexture = new THREE.TextureLoader().load(bg);
const sunTexture = new THREE.TextureLoader().load(solarTexture);
const mercureTexture = new THREE.TextureLoader().load(mercurianTexture);
const venusTexture = new THREE.TextureLoader().load(venusianTexture);
const earthTexture = new THREE.TextureLoader().load(terrianTexture);
const moonTexture = new THREE.TextureLoader().load(lunarTexture);
const marsTexture = new THREE.TextureLoader().load(marsianTexture);
const jupiterTexture = new THREE.TextureLoader().load(jupiterianTexture);
const saturneTexture = new THREE.TextureLoader().load(saturnianTexture);
const saturneRingsTexture = new THREE.TextureLoader().load(saturnianRingsTexture);
const uranusTexture = new THREE.TextureLoader().load(uranusianTexture);
const uranusRingsTexture = new THREE.TextureLoader().load(uranusianRingsTexture);
const neptuneTexture = new THREE.TextureLoader().load(neptunianTexture);

//Light
const light = new THREE.PointLight(0xffffff, 4);
light.position.set(0,0,0);
light.castShadow = true;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 20000;

/*--------Neptune start--------*/
const neptuneGeometry = new THREE.SphereGeometry((diam/5), 64, 32);
const neptuneMaterial = new THREE.MeshLambertMaterial( {map: neptuneTexture} );
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.receiveShadow = true;
/*--------Neptune end--------*/

/*--------Uranus group start--------*/
const uranusGroup = new THREE.Group();
//Uranus
const uranusGeometry = new THREE.SphereGeometry((diam/6.8), 64, 32);
const uranusMaterial = new THREE.MeshLambertMaterial( {map: uranusTexture} );
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.castShadow = true;
uranus.receiveShadow = true;
//Uranus rings
const uranusRingsGeometry = new THREE.CircleGeometry(diam/4.2, 64);
const uranusRingsMaterial = new THREE.MeshLambertMaterial( {map: uranusRingsTexture} );
uranusRingsMaterial.side = THREE.DoubleSide;
const uranusRings = new THREE.Mesh(uranusRingsGeometry, uranusRingsMaterial);
uranusRings.castShadow = true;
uranusRings.receiveShadow = true;
//Uranus group mounting
uranusGroup.add(uranus);
uranusGroup.add(uranusRings);
/*--------Uranus group end--------*/

/*--------Saturne group start--------*/
const saturneGroup = new THREE.Group();
//Saturne
const saturneGeometry = new THREE.SphereGeometry((diam/5.8), 64, 32);
const saturneMaterial = new THREE.MeshLambertMaterial( {map: saturneTexture} );
const saturne = new THREE.Mesh(saturneGeometry, saturneMaterial);
saturne.castShadow = true;
saturne.receiveShadow = true;
//Saturne rings
const saturneRingsGeometry = new THREE.CircleGeometry((diam/3.2), 64);
const saturneRingsMaterial = new THREE.MeshLambertMaterial( {map: saturneRingsTexture} );
saturneRingsMaterial.side = THREE.DoubleSide;
const saturneRings = new THREE.Mesh(saturneRingsGeometry, saturneRingsMaterial);
saturneRings.castShadow = true;
saturneRings.receiveShadow = true;
saturneRings.rotation.x = 90;
saturneRings.rotation.y = 40;
//Saturne group mounting
saturneGroup.add(saturne);
saturneGroup.add(saturneRings);
/*--------Saturne end--------*/

/*--------Jupiter start--------*/
const jupiterGeometry = new THREE.SphereGeometry((diam/4), 64, 32);
const jupiterMaterial = new THREE.MeshLambertMaterial( {map: jupiterTexture} );
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.castShadow = true;
jupiter.receiveShadow = true;
/*--------Jupiter end--------*/

/*--------Mars start--------*/
const marsGeometry = new THREE.SphereGeometry((diam/13), 64, 32);
const marsMaterial = new THREE.MeshLambertMaterial( {map: marsTexture} );
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.castShadow = true;
mars.receiveShadow = true;
/*--------Mars end--------*/

/*--------Earth group start--------*/
const earthGroup = new THREE.Group();
//Earth
const earthGeometry = new THREE.SphereGeometry((diam/8), 64, 32);
const earthMaterial = new THREE.MeshLambertMaterial( {map: earthTexture} );
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.castShadow = true;
earth.receiveShadow = true;
//Moon
const moonGeometry = new THREE.SphereGeometry((diam/26), 64, 32);
const moonMaterial = new THREE.MeshLambertMaterial( {map: moonTexture} );
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.z = 1000;
moon.castShadow = true;
moon.receiveShadow = true;
//Earth group mounting
earthGroup.add(earth);
earthGroup.add(moon);
/*--------Earth group end--------*/

/*--------Venus start--------*/
const venusGeometry = new THREE.SphereGeometry((diam/8), 64, 32);
const venusMaterial = new THREE.MeshLambertMaterial( {map: venusTexture} );
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.castShadow = true;
venus.receiveShadow = true;
/*--------Venus end--------*/

/*--------Mercure start--------*/
const mercureGeometry = new THREE.SphereGeometry((diam/18), 64, 32);
const mercureMaterial = new THREE.MeshLambertMaterial( {map: mercureTexture} );
const mercure = new THREE.Mesh(mercureGeometry, mercureMaterial);
mercure.castShadow = true;
mercure.receiveShadow = true;
/*--------Mercure end--------*/

/*--------Solar System group start--------*/
const solarSystemGroup = new THREE.Group();
//Solar
const solarGeometry = new THREE.SphereGeometry(diam, 64, 32);
const solarMaterial = new THREE.MeshLambertMaterial( {emissiveMap: sunTexture, emissive: 0xffffff} );
const solar = new THREE.Mesh(solarGeometry, solarMaterial);
//Solar system group mounting
solarSystemGroup.add(solar);
solarSystemGroup.add(mercure);
solarSystemGroup.add(venus);
solarSystemGroup.add(earthGroup);
solarSystemGroup.add(mars);
solarSystemGroup.add(jupiter);
solarSystemGroup.add(saturneGroup);
solarSystemGroup.add(uranusGroup);
solarSystemGroup.add(neptune);
/*--------Solar System group end--------*/

//Scene Mounting
scene.background = starsTexture;
scene.add(light);
scene.add(solarSystemGroup);

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth , window.innerHeight - 1);
renderer.setAnimationLoop(EarthGroupanimation);
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement);

//Controls
const controls = new Controls.TrackballControls( camera, renderer.domElement );
controls.rotateSpeed = 1.2;
controls.zoomSpeed = 1;
controls.panSpeed = 0.8;
controls.keys = [ 'KeyA', 'KeyS', 'KeyD' ];

//Animation function
function EarthGroupanimation () {
    //Update controls
    controls.update();
    //Time
    const time = clock.getElapsedTime();
    //Solar rotation
    solar.rotateY(0.001);
    //Mercure rotation
    mercure.rotateY(0.0005);
    mercure.position.x =  (Math.cos(time/20) * 500);
    mercure.position.z =  -(Math.sin(time/20) * 500);
    //Venus rotation
    venus.rotateY(0.0002);
    venus.position.x =  (Math.cos(time/40) * 1000);
    venus.position.z =  -(Math.sin(time/40) * 1000);
    //Earth group rotation
    earthGroup.rotateY(0.01);
    earthGroup.position.x =  (Math.cos(time/80) * 1500);
    earthGroup.position.z =  -(Math.sin(time/80) * 1500);
    moon.rotation.y = time / 2;
    moon.position.x =  -(Math.cos(time*2) * 60);
    moon.position.z =  (Math.sin(time*2) * 60);
    //Mars rotation
    mars.rotateY(0.01);
    mars.position.x =  (Math.cos(time/100) * 2000);
    mars.position.z =  -(Math.sin(time/100) * 2000);
    //Jupiter rotation
    jupiter.rotateY(0.025);
    jupiter.position.x =  -(Math.cos(time/140) * 3000);
    jupiter.position.z =  (Math.sin(time/140) * 3000);
    //Saturne group rotation
    saturne.rotateY(0.025);
    saturneGroup.position.x =  -(Math.cos(time/160) * 3500);
    saturneGroup.position.z =  (Math.sin(time/160) * 3500);
    //Uranus group rotation
    uranus.rotateX(0.02);
    uranusGroup.position.x =  -(Math.cos(time/180) * 4000);
    uranusGroup.position.z =  (Math.sin(time/180) * 4000);
    //Neptune group rotation
    neptune.rotateY(0.02);
    neptune.position.x =  -(Math.cos(time/200) * 4500);
    neptune.position.z =  (Math.sin(time/200) * 4500);
    renderer.render(scene, camera);
}