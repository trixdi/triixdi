import * as THREE from "three";
import {
    OrbitControls
} from "three/addons/controls/OrbitControls.js";
import {
    GLTFLoader
} from "three/addons/loaders/GLTFLoader.js";
import {
    PerspectiveCamera,
    CameraHelper
} from "three";
import {
    TextGeometry
} from "three/addons/geometries/TextGeometry.js";
import {
    FontLoader
} from "three/addons/loaders/FontLoader.js";
import {
    OBJLoader
} from "three/addons/loaders/OBJLoader.js";
import {
    MTLLoader
} from "three/addons/loaders/MTLLoader.js";





const loader_title = new GLTFLoader;
const loader = new FontLoader();
let font;
let font_heading;
const text_heig = -1;
let font_path = "../../fonts/Super_Corn_Regular_JSON.json";




const screenWidth = window.innerWidth,
    screenHeight = window.innerHeight;
let z_dist_to_camera = 40,
    y_dist_to_caCmera = 67;
var zcool = 0,
    X_POS_icon = 15,
    X_POS_cardsfeatures = -15,
    X_POS_ctaexplorer = 0,
    X_POS_ctadescription = -15,
    X_POS_ctaform = 0,
    y_POS_icon = 7,
    y_POS_cardsfeatures1 = 13.9,
    y_POS_cardsfeatures2 = 8.46,
    y_POS_cardsfeatures3 = 2,
    y_POS_ctaexplorer = -8,
    y_POS_ctadescription = -18,
    y_POS_ctaform = -23,
    z_POS_ctaexplorer = 0;
let cameraRig, activeCamera, activeHelper, cameraPerspective, cameraOrtho, cameraPerspectiveHelper, cameraOrthoHelper;





//////////////////////////////////////////////////
//////////         IF MOBILE       ////////////////
//////////////////////////////////////////////////
screenWidth < 768 ? (


  z_dist_to_camera = 68, 
  zcool = 34, 
  z_POS_ctaexplorer = 15, 
  X_POS_icon = 0, 
  y_POS_icon = 21, 
  X_POS_ctadescription = 0,
  X_POS_ctaform = 0, 
  X_POS_cardsfeatures = 0, 
  y_POS_cardsfeatures1 = 10,
  y_POS_cardsfeatures2 = 6, 
  y_POS_cardsfeatures3 = 0, 
  y_POS_ctaexplorer = -9, 
  y_POS_ctadescription = -15, 
  y_POS_ctaform = -24

) 

  : screenWidth > 768 && screenWidth < 1366 && (z_dist_to_camera = 41.5);








const frustumSize = 600;
let SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
const rotationSpeed = 67e-5;
let currentRotationAngle = 0;
const models = [];
let cards = [];




//////////////////////////////////////////////////
//////////         SCENE, CAMERA      ////////////////
//////////////////////////////////////////////////
const scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 1e3);




gsap.to(camera.position, {
    duration: 3,
    x: 0,
    y: 0,
    z: z_dist_to_camera,
    ease: "power2.inOut"
}), scene.add(camera);





let links_positions = [0, 0, 0];
var renderer = new THREE.WebGLRenderer;
renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(renderer.domElement);





const light = new THREE.AmbientLight(4210752, 51);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(7434609, 34);
directionalLight.position.set(0, 30, 11), scene.add(directionalLight);






var path1 = "images/image_background_aboutus.jpg";
let sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
sphereGeometry.scale(-1, 1, 1);
let textureLoader = new THREE.TextureLoader,
    texture = textureLoader.load(path1),
    material = new THREE.MeshBasicMaterial({
        map: texture,
        aoMapIntensity: .1
    });





//////////////////////////////////////////////////
//////////         ABOUT US TEXT       ////////////////
//////////////////////////////////////////////////
var mesh = new THREE.Mesh(sphereGeometry, material);
scene.add(mesh);
const texture_image_card_cta_examples = textureLoader.load("images/image_card_aboutus.png"),
    geometry_image_card_cta_examples = new THREE.BoxGeometry(25, 28.46, 1e-4, 1, 1, .1),
    material_image_card_cta_examples = new THREE.MeshBasicMaterial({
        map: texture_image_card_cta_examples,
        transparent: !0
    }),
mesh_image_card_cta_examples = new THREE.Mesh(geometry_image_card_cta_examples, material_image_card_cta_examples);
mesh_image_card_cta_examples.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer + 17, z_POS_ctaexplorer), mesh_image_card_cta_examples.rotation.set(0, 0, 0), 
scene.add(mesh_image_card_cta_examples);











//////////////////////////////////////////////////
//////////         CTA FORM       ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "Build your own 3D website\nby filling out this form.";
var titleGeometry = new TextGeometry(geom_ref_pric, {
    font: font,
    size: 1.20, 
    height: 0.02
  });
  const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x363636 }); // White color
  const title = new THREE.Mesh(titleGeometry, titleMaterial);
    const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
    const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
    const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
  title.position.set(X_POS_ctaexplorer - (titleWidth/2), y_POS_ctaform+0.8, z_POS_ctaexplorer); 
  scene.add(title); 
}); 
//////////////////////// ///////////////////////////// /////////////////////////////
loader_title.load("../../geometries/geometry_card_square_cta_form.glb", (e => {
    const geometry_rect_image_card_cta_examples = e.scene;
  geometry_rect_image_card_cta_examples.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_cta_examples = new THREE.MeshPhongMaterial({
                color: 0xCDFAD5
            });
            e.material = geometry_rect_image_card_cta_examples;
          e.userData.link = "https://tally.so/r/nWz9VR"
        }
    }));
  geometry_rect_image_card_cta_examples.position.set(0, y_POS_ctaform, z_POS_ctaexplorer-0.1);
  geometry_rect_image_card_cta_examples.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_cta_examples.scale.set(1, 1, 2), scene.add(geometry_rect_image_card_cta_examples)
}));
//////////////////////// ///////////////////////////// /////////////////////////////
loader_title.load("../../geometries/geometry_card_square_cta_form.glb", (e => {
    const geometry_rect_image_card_cta_examples2 = e.scene;
  geometry_rect_image_card_cta_examples2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_cta_examples2 = new THREE.MeshPhongMaterial({
                color: 0x7AFF92
            });
            e.material = geometry_rect_image_card_cta_examples2;
          e.userData.link = "https://tally.so/r/nWz9VR"
        }
    })), geometry_rect_image_card_cta_examples2.position.set(0, y_POS_ctaform, z_POS_ctaexplorer-0.2);
    geometry_rect_image_card_cta_examples2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_cta_examples2.scale.set(1.05, 1.05, 4), scene.add(geometry_rect_image_card_cta_examples2)
}));
/////////////////////////////////////////////////////////// ///////////////////////////// /////////////////////////////























//////////////////////////////////////////////////
//////////         CTA GO TO HOMEPAGE       ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "Go to Homepage.";
var titleGeometry = new TextGeometry(geom_ref_pric, {
    font: font,
    size: 1.20, 
    height: 0.1
  });
  const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x363636 }); // White color
  const title = new THREE.Mesh(titleGeometry, titleMaterial);
    const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
    const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
    const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
  title.position.set(X_POS_ctaform - (titleWidth/2), y_POS_ctaform-20.5, z_POS_ctaexplorer); 
  scene.add(title); 
}); 
//////////////////////////////////////////////////
loader_title.load("../../geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFBB69
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = "https://trixdi.fun/";
        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_ctaform, y_POS_ctaform-20,z_POS_ctaexplorer-0.1);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(0.5, 1, 4);
  scene.add(geometry_rect_image_card_feature_1)
}));

/* const texture_image_button_homepage = textureLoader.load("static/users/aboutus/images/image_button_homepage.png"),
    geometry_image_button_homepage = new THREE.BoxGeometry(20, 5.81, 1e-4, 1, 1, .1),
    material_image_button_homepage = new THREE.MeshBasicMaterial({
        map: texture_image_button_homepage,
        transparent: !0
    }),
    mesh_image_button_homepage = new THREE.Mesh(geometry_image_button_homepage, material_image_button_homepage);
mesh_image_button_homepage.userData.link = "https://trixdi.fun/", 
  mesh_image_button_homepage.position.set(X_POS_ctaform, y_POS_ctaform-20, z_POS_ctaexplorer),
  mesh_image_button_homepage.rotation.set(0, 0, 0), 
  scene.add(mesh_image_button_homepage); */




/* 

loader_title.load("trixdi_titl.glb", (e => {
    const t = e.scene;
    t.traverse((e => {
        if (e.isMesh) {
            const t = new THREE.MeshBasicMaterial({
                color: 16728193
            });
            e.material = t, e.userData.link = "https://trixdi.fun/about.html"
        }
    })), t.position.set(1, 2, 120), t.rotation.set(0, 3.14, 0), t.scale.set(2, 2, 1.1), scene.add(t)
})), loader_title.load("trixdi_titl2.glb", (e => {
    const t = e.scene;
    t.traverse((e => {
        if (e.isMesh) {
            const t = new THREE.MeshBasicMaterial({
                color: 16742832
            });
            e.material = t
        }
    })), t.position.set(0, -2, 120), t.rotation.set(0, 3.14, 0), t.scale.set(.6, .6, .8), scene.add(t)
}));

 */






let disableOrbiting = !1;

function disableOrbitControls() {
    controls.enabled = !1
}

function enableOrbitControls() {
    controls.enabled = !0
}

function changeBackgroundImage(e) {
    scene.remove(mesh), sphereGeometry = new THREE.SphereGeometry(500, 60, 40), sphereGeometry.scale(-1, 1, 1), textureLoader = new THREE.TextureLoader, texture = textureLoader.load(e), console.log(texture), material = new THREE.MeshBasicMaterial({
        map: texture,
        aoMapIntensity: .1
    }), mesh = new THREE.Mesh(sphereGeometry, material), scene.add(mesh)
}









let isMouseDown = !1,
    isInsideObject = !1,
    clickedObject = null;

function onObjectMouseDown(e) {
    console.log("onObject Mouse DOWN", "isInsideObject=", isInsideObject, "isMouseDown=", isMouseDown, "clickedObject=", clickedObject), times_open = 1, isMouseDown = !0, clickedObject = null;
    const t = new THREE.Vector2;
    t.x = e.clientX / window.innerWidth * 2 - 1, t.y = -e.clientY / window.innerHeight * 2 + 1, handleInteraction(t)
}

function onObjectMouseUp(e) {
    if (console.log("onObject Mouse UP", "isInsideObject=", isInsideObject, "isMouseDown=", isMouseDown, "clickedObject=", clickedObject), isMouseDown && isInsideObject && clickedObject) {
        const t = new THREE.Vector2;
        t.x = e.clientX / window.innerWidth * 2 - 1, t.y = -e.clientY / window.innerHeight * 2 + 1, handleInteraction(t)
    }
    isMouseDown = !1, isInsideObject = !1, clickedObject = null
}

function onObjectTouchStart(e) {
    e.preventDefault(), times_open = 1, isMouseDown = !0, clickedObject = null;
    const t = e.touches[0],
        o = new THREE.Vector2;
    o.x = t.clientX / window.innerWidth * 2 - 1, o.y = -t.clientY / window.innerHeight * 2 + 1, console.log("on Object Touch START", "isInsideObject=", isInsideObject, "isMouseDown=", isMouseDown, "clickedObject=", clickedObject, "times_open=", times_open), handleInteraction(o)
}

function onObjectTouchEnd(e) {
    if (console.log("on Object Touch END", isMouseDown && isInsideObject && clickedObject, "<--- &&", "isMouseDown=", isMouseDown, "isInsideObject=", isInsideObject, "clickedObject=", clickedObject), isMouseDown && isInsideObject && clickedObject) {
        const t = e.changedTouches[0],
            o = new THREE.Vector2;
        o.x = t.clientX / window.innerWidth * 2 - 1, o.y = -t.clientY / window.innerHeight * 2 + 1, handleInteraction(o)
    }
    console.log("isInsideObject = false"), isMouseDown = !1, isInsideObject = !1, clickedObject = null
}
var times_open = 0;

function handleInteraction(e) {
    const t = new THREE.Raycaster;
    t.setFromCamera(e, camera);
    const o = t.intersectObjects(scene.children, !0);
    o.length > 0 && o[0].object.userData.link ? (isInsideObject = !0, clickedObject = o[0].object, console.log(" intersect ---", "isInsideObject=", isInsideObject, "isMouseDown=", isMouseDown, "clickedObject=", clickedObject), 1 == times_open && window.open(clickedObject.userData.link, "_new"), disableOrbiting = !0, disableOrbitControls()) : (isInsideObject = !1, disableOrbiting = !1, enableOrbitControls())
}
window.addEventListener("mousedown", onObjectMouseDown), window.addEventListener("mouseup", onObjectMouseUp), window.addEventListener("touchstart", onObjectTouchStart), window.addEventListener("touchend", onObjectTouchEnd);
let isTabActive = !0;
document.addEventListener("visibilitychange", (() => {
    document.hidden ? (isTabActive = !1, isMouseDown = !1, isInsideObject = !1, clickedObject = null) : isTabActive = !0
})), window.addEventListener("blur", (() => {
    isMouseDown = !1, isInsideObject = !1, clickedObject = null, console.log("blur stuff")
}));
var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = !0, controls.rotateSpeed = .7;

controls.minDistance = 2, controls.maxDistance = 255.1;

//controls.dampingFactor = .45;

console.log(" ");
let currentRotationAngle2 = 0,
    rotationSpeed2 = 1.01,
    isRotating = !1,
    rotationStartTime = 0,
    ii = Math.random() - .5;
var animate = function() {
    requestAnimationFrame(animate);
    for (let e = 0; e < models.length; e++) models[e].rotation.x += .004 * ii, models[e].rotation.y += 2 * ii * .002;
    for (let e = 0; e < cards.length; e++) {
        let t = getRandomColor();
        const o = new THREE.MeshPhongMaterial({
            color: t
        });
        cards[e].material = o
    }
    const e = Date.now();
    !isRotating && e - rotationStartTime > 2400 && (isRotating = !0, rotationStartTime = e, rotationSpeed2 = .005), isRotating && e - rotationStartTime > 900 && (isRotating = !1, rotationSpeed2 = .03), currentRotationAngle += 27e-5, !disableOrbiting && isTabActive && controls.update(), directionalLight.rotation.y += .04, mesh.rotation.y = currentRotationAngle, renderer.render(scene, camera)
};
animate(), requestAnimationFrame(animate);