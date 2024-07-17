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





const loader = new FontLoader();
let font;
let font_heading;
const text_heig = -1;
let font_path = "fonts/Super_Corn_Regular_JSON.json";





const loader_title = new GLTFLoader;

const screenWidth = window.innerWidth,
    screenHeight = window.innerHeight;
let z_dist_to_camera = 53,
    y_dist_to_caCmera = 67;

var zcool = 0,

    X_POS_icon = 19,
    X_POS_cardsfeatures = -19,
    X_POS_ctaexplorer = 0,
    X_POS_ctadescription = -15,
    X_POS_ctaform = 15,


  y_POS_icon = 9,
  y_POS_cardsfeatures1 = 18,
  y_POS_cardsfeatures2 = 9.8,
  y_POS_cardsfeatures3 = 0,

  y_POS_ctaexplorer = -14,

  y_POS_ctadescription = -21,
  y_POS_ctaform = -34,

  z_POS_cardsfeatures1  = 0,
  z_POS_card_front  = -0.05,
  z_POS_card_back  = -0.3,

  z_POS_ctaexplorer = 0;

let cameraRig, activeCamera, activeHelper, cameraPerspective, cameraOrtho, cameraPerspectiveHelper, cameraOrthoHelper;









//////////////////////////////////////////////////
//////////         IF MOBILE      ////////////////
//////////////////////////////////////////////////
screenWidth < 768 ? (
  console.log(screenWidth, "screeaaaaanWidth"),
    z_dist_to_camera = 62.5, 
  zcool = 24, 
  z_POS_ctaexplorer = 0,

  X_POS_icon = 0, 
  y_POS_icon = 23, 
  X_POS_ctadescription = 0, 
  X_POS_ctaform = 0, 
  X_POS_cardsfeatures = 0, 

  y_POS_cardsfeatures1 = 8,
  y_POS_cardsfeatures2 = 0.32, 
  y_POS_cardsfeatures3 = -9.1,
  y_POS_ctaexplorer = -21.4, 
  y_POS_ctadescription = -29, 
  y_POS_ctaform = -40) 

  : screenWidth > 768 && screenWidth < 1100 ? (z_dist_to_camera = 79.5) : screenWidth > 768 && screenWidth < 1366 ? (z_dist_to_camera = 65.5)  :  screenWidth > 1566 ? (z_dist_to_camera = 49) : null;





    console.log(screenWidth, "screenWidth",z_dist_to_camera );










    const frustumSize = 600;
let SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
const rotationSpeed = 67e-5;
let currentRotationAngle = 0;
const models = [];
let cards = [];



var paths = [ " backgrounds/image_background_16.jpg"," backgrounds/image_background_9.jpg"," backgrounds/image_background_10.jpg" ],
    currentPathIndex = 0;








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

var renderer = new THREE.WebGLRenderer;
renderer.setSize(window.innerWidth, window.innerHeight), 
document.body.appendChild(renderer.domElement);




//////////////////////////////////////////////////
//////////            LIGHTS      ////////////////
//////////////////////////////////////////////////
const light = new THREE.AmbientLight(4210752, 51);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(7434609, 34);
directionalLight.position.set(0, 30, 11), 
scene.add(directionalLight);





/////////////////////////////////////////////////////////////////
//////////      GEOMETRY SPHERE BACKGROUND      /////////////////
/////////////////////////////////////////////////////////////////
var path1 = "backgrounds/image_background_14.jpg";

let sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    sphereGeometry.scale(-1, 1, 1);
let textureLoader = new THREE.TextureLoader,
    texture = textureLoader.load(path1),
    material = new THREE.MeshBasicMaterial({
        map: texture,
        aoMapIntensity: .1
    });
var mesh = new THREE.Mesh(sphereGeometry, material);
scene.add(mesh);







/////////////////////////////////////////////////////////////////
//////////                LOGO                  /////////////////
/////////////////////////////////////////////////////////////////
const texture_image_logo = textureLoader.load("images/image_logo.png"),
    geometry_image_logo = new THREE.BoxGeometry(20, 18.98, 1e-4, 1, 1, .1),
    material_image_logo = new THREE.MeshBasicMaterial({
        map: texture_image_logo,
        transparent: !0
    }),
    mesh_image_logo = new THREE.Mesh(geometry_image_logo, material_image_logo);
mesh_image_logo.position.set(X_POS_icon, y_POS_icon, z_POS_ctaexplorer), mesh_image_logo.rotation.set(0, 0, 0), scene.add(mesh_image_logo);










 





//////////////////////////////////////////////////
//////////         CARD FEATURE 1      ////////////////
//////////////////////////////////////////////////
    loader.load(font_path, function (fontLoaded) {
  font = fontLoaded;
  var geom_ref_pric = "Upgrade your link-in-bio in a dynamic\nstyle with our 3d-powered web builder!";
  var titleGeometry = new TextGeometry(geom_ref_pric, {
      font: font,
      size: 1.3, 
      height: 0.02
    });
    const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x363636 }); //  
    const title = new THREE.Mesh(titleGeometry, titleMaterial);
      const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
      const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
      const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
    title.position.set(X_POS_cardsfeatures - (titleWidth/2), y_POS_cardsfeatures2 + (0.5), z_POS_cardsfeatures1); 
    scene.add(title); 
  });  // font loader
///////////////////////////////////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xAFF8080
            });
            e.material = geometry_rect_image_card_feature_1;

        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_cardsfeatures, y_POS_cardsfeatures2,z_POS_card_front);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
////////////////////////////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFF4A4A
            });
            e.material = geometry_rect_image_card_feature_2_2;

        }
    })), geometry_rect_image_card_feature_2_2.position.set(X_POS_cardsfeatures, y_POS_cardsfeatures2,z_POS_card_back);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 4), scene.add(geometry_rect_image_card_feature_2_2)
}));
///////////////////////////////////////////////////////////////////////////////////////












//////////////////////////////////////////////////
//////////         CARD FEATURE 3      ////////////////
//////////////////////////////////////////////////
    loader.load(font_path, function (fontLoaded) {
  font = fontLoaded;
  var geom_ref_pric = "Imagine taking boring, ordinary URL links\nand catapulting them onto a visually\nbreath-taking landing page.";
  var titleGeometry = new TextGeometry(geom_ref_pric, {
      font: font,
      size: 1.2, 
      height: 0.02
    });
    const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x363636 }); // White color
    const title = new THREE.Mesh(titleGeometry, titleMaterial);
      const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
      const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
      const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
    title.position.set(X_POS_cardsfeatures - (titleWidth/2), y_POS_cardsfeatures3 + (1.5), z_POS_cardsfeatures1); 
    scene.add(title); 
  }); 
///////////////////////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_3.glb", (e => {
    const geometry_rect_image_card_feature_3 = e.scene;
  geometry_rect_image_card_feature_3.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_3 = new THREE.MeshPhongMaterial({
                color: 0xAFF8080
            });
            e.material = geometry_rect_image_card_feature_3;
        }
    }));
  geometry_rect_image_card_feature_3.position.set(X_POS_cardsfeatures,y_POS_cardsfeatures3,z_POS_card_front);
  geometry_rect_image_card_feature_3.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_3.scale.set(1, 1, 2), scene.add(geometry_rect_image_card_feature_3)
}));
///////////////////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_3.glb", (e => {
    const geometry_rect_image_card_feature_3_2 = e.scene;
  geometry_rect_image_card_feature_3_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_3_2 = new THREE.MeshPhongMaterial({
                color: 0xFF4A4A
            });
            e.material = geometry_rect_image_card_feature_3_2;
        }
    })), geometry_rect_image_card_feature_3_2.position.set(X_POS_cardsfeatures,y_POS_cardsfeatures3,z_POS_card_back);
    geometry_rect_image_card_feature_3_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_3_2.scale.set(1.05, 1.15, 4), scene.add(geometry_rect_image_card_feature_3_2)
}));
///////////////////////////////////////////////////////////////////////



















//////////////////////////////////////////////////
//////////         CTA EXPLORE       ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "Explore more examples by clicking here.";
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
  title.position.set(X_POS_ctaexplorer - (titleWidth/2), y_POS_ctaexplorer- (titleHeight/2)+0.2, z_POS_cardsfeatures1); 
    title.userData.link = "https://trixdi.fun/page_masterofnunncouk.html"
  scene.add(title); 
}); 
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFBB69
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = "https://trixdi.fun/page_masterofnunncouk.html"
        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer,z_POS_card_front);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFFCF96
            });
            e.material = geometry_rect_image_card_feature_2_2;
          e.userData.link = "https://trixdi.fun/page_masterofnunncouk.html"
        }
    })), geometry_rect_image_card_feature_2_2.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer,z_POS_card_back);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 4), scene.add(geometry_rect_image_card_feature_2_2)
}));
///////////////////////////////////////////////////////////////////////////////////////






















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
loader_title.load("geometries/geometry_card_square_cta_form.glb", (e => {
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
  geometry_rect_image_card_cta_examples.position.set(0, y_POS_ctaform, z_POS_card_front);
  geometry_rect_image_card_cta_examples.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_cta_examples.scale.set(1, 1, 2), scene.add(geometry_rect_image_card_cta_examples)
}));
//////////////////////// ///////////////////////////// /////////////////////////////
loader_title.load("geometries/geometry_card_square_cta_form.glb", (e => {
    const geometry_rect_image_card_cta_examples2 = e.scene;
  geometry_rect_image_card_cta_examples2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_cta_examples2 = new THREE.MeshPhongMaterial({
                color: 0x7AFF92
            });
            e.material = geometry_rect_image_card_cta_examples2;
          e.userData.link = "https://tally.so/r/nWz9VR"
        }
    })), geometry_rect_image_card_cta_examples2.position.set(0, y_POS_ctaform, z_POS_card_back);
    geometry_rect_image_card_cta_examples2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_cta_examples2.scale.set(1.05, 1.05, 4), scene.add(geometry_rect_image_card_cta_examples2)
}));
/////////////////////////////////////////////////////////// ///////////////////////////// /////////////////////////////



















///
//////////////////////////////////////////////////
//////////         CTA ABOUT US        ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "About Us.";
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
  title.position.set(X_POS_ctaexplorer - (titleWidth/2), y_POS_ctaexplorer- (titleHeight/2)+0.2 -15,  z_POS_ctaexplorer + 86.5); 
    title.userData.link = "https://trixdi.vercel.app/users/aboutus/page_aboutus.html"
  scene.add(title); 
}); 
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFBB69
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = "https://trixdi.vercel.app/users/aboutus/page_aboutus.html"
        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer -15, z_POS_ctaexplorer + 86);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFFCF96
            });
            e.material = geometry_rect_image_card_feature_2_2;
          e.userData.link = "https://trixdi.vercel.app/users/aboutus/page_aboutus.html"
        }
    })), geometry_rect_image_card_feature_2_2.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer-15, z_POS_ctaexplorer + 85);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 4), 
      scene.add(geometry_rect_image_card_feature_2_2)
}));
///////////////////////////////////////////////////////////////////////////////////////























//////////////////////////////////////////////////
//////////         CTA Privacy Policy       ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "Privacy Policy.";
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
  title.position.set(X_POS_ctaexplorer - (titleWidth/2), y_POS_ctaexplorer- (titleHeight/2)+0.2 -25,  z_POS_ctaexplorer + 86.5); 
    title.userData.link = "https://trixdi.vercel.app/page_privacy_policy.html"
  scene.add(title); 
}); 
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFBB69
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = "https://trixdi.vercel.app/page_privacy_policy.html"
        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer -25, z_POS_ctaexplorer + 86);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFFCF96
            });
            e.material = geometry_rect_image_card_feature_2_2;
          e.userData.link = "https://trixdi.vercel.app/page_privacy_policy.html"
        }
    })), geometry_rect_image_card_feature_2_2.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer-25, z_POS_ctaexplorer + 85);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 4), 
      scene.add(geometry_rect_image_card_feature_2_2)
}));
///////////////////////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////////
//////////         CTA Terms_Conditions       ////////////////
//////////////////////////////////////////////////
  loader.load(font_path, function (fontLoaded) {
font = fontLoaded;
var geom_ref_pric = "Terms and Conditions.";
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
  title.position.set(X_POS_ctaexplorer - (titleWidth/2), y_POS_ctaexplorer- (titleHeight/2)+0.2 -36,  z_POS_ctaexplorer + 86.5); 
    title.userData.link = "https://trixdi.vercel.app/page_terms_conditions.html"
  scene.add(title); 
}); 
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFBB69
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = "https://trixdi.vercel.app/page_terms_conditions.html"
        }
    }));
  geometry_rect_image_card_feature_1.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer -36, z_POS_ctaexplorer + 86);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
//////////////////////////////////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_2.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFFCF96
            });
            e.material = geometry_rect_image_card_feature_2_2;
          e.userData.link = "https://trixdi.vercel.app/page_terms_conditions.html"
        }
    })), geometry_rect_image_card_feature_2_2.position.set(X_POS_ctaexplorer, y_POS_ctaexplorer-36, z_POS_ctaexplorer + 85);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 4), 
      scene.add(geometry_rect_image_card_feature_2_2)
}));
///////////////////////////////////////////////////////////////////////////////////////



































/////////////////////////////////////////////////////////
//////////           MOUSE EVENTS                 ////////
/////////////////////////////////////////////////////////
 let disableOrbiting = !1;

 function disableOrbitControls() {
     controls.enabled = 1
 }

 function enableOrbitControls() {
     controls.enabled = !0
 }







function changeBackgroundImage(e) {
    scene.remove(mesh), sphereGeometry = new THREE.SphereGeometry(500, 60, 40), sphereGeometry.scale(-1, 1, 1), 
    textureLoader = new THREE.TextureLoader, texture = textureLoader.load(e), 
    console.log(texture), 
    material = new THREE.MeshBasicMaterial({
        map: texture,
        aoMapIntensity: .1
    }), mesh = new THREE.Mesh(sphereGeometry, material), scene.add(mesh)
}

  document.getElementById("changeBackgroundButton").addEventListener("click", (function() {
    currentPathIndex = (currentPathIndex + 1) % paths.length;
    changeBackgroundImage(paths[currentPathIndex])
}));















 let isMouseDown = !1,
     isInsideObject = !1,
     clickedObject = null;


let clickStartPosition = new THREE.Vector2();


 function onObjectMouseDown(e) {   

   times_open = 1;
   isMouseDown = !0;
   clickedObject = null;

  const t = new THREE.Vector2;

   t.x = e.clientX / window.innerWidth * 2 - 1;
   t.y = -e.clientY / window.innerHeight * 2 + 1;
   clickStartPosition.copy(t);
   handleInteraction(t);

 }





function onObjectMouseUp(e) {

//     if (isMouseDown && isInsideObject && clickedObject) {
  if (1) {
      const t = new THREE.Vector2();
      t.x = e.clientX / window.innerWidth * 2 - 1;
      t.y = -e.clientY / window.innerHeight * 2 + 1;

      // Calculate the distance between click-down and click-up positions
      const distance = clickStartPosition.distanceTo(t);

      // Set a threshold distance (adjust as needed)
      const threshold = 0.05;

      if (distance < threshold) {
         console.log(" distance < threshold");

          handleInteraction(t,distance , threshold);
      }  }
    isMouseDown = false;
    isInsideObject = false;
    clickedObject = null;
   console.log(" end  onObjectMouse up");

}






 function onObjectTouchStart(e) {
     e.preventDefault();
   times_open = 1;
   isMouseDown = !0;
   clickedObject = null;
     const t = e.touches[0],
         i = new THREE.Vector2;
     i.x = t.clientX / window.innerWidth * 2 - 1;
   i.y = -t.clientY / window.innerHeight * 2 + 1;

   console.log("on Object Touch START", "isInsideObject=", isInsideObject, "isMouseDown=", isMouseDown, "clickedObject=", clickedObject, "times_open=", times_open);
   handleInteraction(i);
 }




 function onObjectTouchEnd(e) {
     if (console.log("on Object Touch END", isMouseDown && isInsideObject && clickedObject, "<--- &&", "isMouseDown=", isMouseDown, "isInsideObject=", isInsideObject, "clickedObject=", clickedObject), isMouseDown && isInsideObject && clickedObject) {
         const t = e.changedTouches[0],
             i = new THREE.Vector2;
         i.x = t.clientX / window.innerWidth * 2 - 1, i.y = -t.clientY / window.innerHeight * 2 + 1, handleInteraction(i)
     }
     console.log("isInsideObject = false"), isMouseDown = !1, isInsideObject = !1, clickedObject = null
 }





 var times_open = 0;


////// function handleInteraction(event) {
////// function handleInteraction(event) {
function handleInteraction(event, dist, thre) {


    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(event, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData.link) {
        isInsideObject = true;
        clickedObject = intersects[0].object;

        console.log("Intersect ---", "isInsideObject =", isInsideObject, "isMouseDown =", isMouseDown, "clickedObject =", clickedObject);

        if (times_open === 1 &&  dist<thre) {
          console.log("dist<thre");
            window.open(clickedObject.userData.link, "_new");
        }

        disableOrbiting = true;
        disableOrbitControls();
    } else {
        isInsideObject = false;
        disableOrbiting = false;
        enableOrbitControls();
    }
  console.log("end intersect ---") ;
};




 window.addEventListener("mousedown", onObjectMouseDown);
window.addEventListener("mouseup", onObjectMouseUp);
window.addEventListener("touchstart", onObjectTouchStart);
window.addEventListener("touchend", onObjectTouchEnd);



 let isTabActive = !0;
 document.addEventListener("visibilitychange", (() => {
     document.hidden ? (isTabActive = !1, isMouseDown = !1, isInsideObject = !1, clickedObject = null) : isTabActive = !0
 }));


window.addEventListener("blur", (() => {
     isMouseDown = !1, isInsideObject = !1, clickedObject = null, console.log("blur stuff")
 }));













var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = !0, 
  controls.rotateSpeed = .7, 
  controls.minDistance = 2, 
  controls.maxDistance = 255.1;



//controls.dampingFactor = .45;



const modelsTHISd = [];
let cardstoused = [];


let currentRotationAngle2 = 0,
    rotationSpeed2 = 1.01,
    isRotating = !1,
    rotationStartTime = 0,
    ii = Math.random() - .5;










/////////////////////////////////////////////////////////
//////////           RENDER FUNCTION             ////////
/////////////////////////////////////////////////////////
var animate = function() {
    requestAnimationFrame(animate);
    for (let e = 0; e < models.length; e++) models[e].rotation.x += .004 * ii, models[e].rotation.y += 2 * ii * .002;

    const e = Date.now();
    !isRotating && e - rotationStartTime > 2400 && (isRotating = !0, rotationStartTime = e, 
                                                    rotationSpeed2 = .005), 
      isRotating && e - rotationStartTime > 900 && (isRotating = !1, rotationSpeed2 = .03),
      currentRotationAngle += 27e-5, !disableOrbiting && isTabActive && controls.update(), 
      directionalLight.rotation.y += .04,
      mesh.rotation.y = currentRotationAngle, 
      renderer.render(scene, camera)
};





animate(), 
requestAnimationFrame(animate);
