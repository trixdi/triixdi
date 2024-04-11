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
const loader_title = new GLTFLoader;


var font_asd_loader_path = "../fonts/Super_Corn_Regular_JSON.json";


 const screenWidth = window.innerWidth,
     screenHeight = window.innerHeight;





 let  image_social_media_hei = 10;
 let  image_social_media_wid = 10;




let z_dist_to_camera = 65,
    y_dist_to_caCmera = 67;

let  y_position_prof_pic = 27;
let  y_position_handle = 19;
let  y_position_bio = 10;

let  z_position_handle = 1;




let  y_position_image_extra_link_1 = -12;

let  z_position_extra_link_1 = 0;
let  x_position_extra_link_1 = 49;
let  y_position_extra_link_1 = -20;


let  y_position_image_extra_link_2 = 8;

let  z_position_extra_link_2 = 0;
let  x_position_extra_link_2 = 49;
let  y_position_extra_link_2 = 0;


let  y_position_image_extra_link_3 = 28;

let  z_position_extra_link_3 = 0;
let  x_position_extra_link_3 = 49;
let  y_position_extra_link_3 = 20;

/////////////////////////////////////////////////////////////

// X vars
let  z_position_x_link_image = 0;
let  x_position_x_link_image = -39;
let  y_position_x_link_image = -1;

let  z_position_x_link_geo = 0;
let  x_position_x_link_geo = -39.5;
let  y_position_x_link_geo = -1;

let  y_rotation_x_link_geo = .5;



let  offset_y_position_x_link_geo_inner = 0.6;
let  offset_y_position_x_link_geo_outer = 0.85;

let  x_scale_x_link_geo_outer = 0.63;
let  y_scale_x_link_geo_outer = 0.63;
let  z_scale_x_link_geo_outer = 0.63;
let  x_scale_x_link_geo_inner = 0.56;
let  y_scale_x_link_geo_inner = 0.56;
let  z_scale_x_link_geo_inner = 0.56;


let dict_positions_According_len_sociallinks = {
  1:  [0],
  2:  [7.5, -7.5],
  3:  [15, 0, -15],
  4:  [22.5, 7.5, -7.5, -22.5],
  5:  [30, 15, 0, -15, -30],
  6:  [37.5, 22.5, 7.5, -7.5, -22.5, -37.5],
  7:  [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 0],
  8:  [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 7.5, -7.5],
  9:  [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 15, 0, -15],
  10: [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 22.5, 7.5, -7.5, -22.5],
  11: [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 30, 15, 0, -15, -30],
  12: [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 37.5, 22.5, 7.5, -7.5, -22.5, -37.5],
  13: [37.5, 22.5, 7.5, -7.5, -22.5, -37.5 , 37.5, 22.5, 7.5, -7.5, -22.5, -37.5, 0]

};



/////////////////////////////////////////////////////////////////

//email vars
let  z_position_email_link_image = 0;
let  x_position_email_link_image = -49;
let  y_position_email_link_image = -21;

let  z_position_email_link_geo = 0;
let  x_position_email_link_geo = -49.5;
let  y_position_email_link_geo = -21;

let  y_rotation_email_link_geo = .5;




let  offset_y_position_email_link_geo_inner = 0.6;
let  offset_y_position_email_link_geo_outer = 0.85;

let  x_scale_email_link_geo_outer = 0.75;
let  y_scale_email_link_geo_outer = 0.75;
let  z_scale_email_link_geo_outer = 0.75;

let  x_scale_email_link_geo_inner = 0.68;
let  y_scale_email_link_geo_inner = 0.68;
let  z_scale_email_link_geo_inner = 0.68;

/////////////////////////////////////////////////////////////////

// IG  vars
let  z_position_ig_link_image = 0;
let  x_position_ig_link_image = -49;
let  y_position_ig_link_image = 19;

let  z_position_ig_link_geo = 0;
let  x_position_ig_link_geo = -49.5;
let  y_position_ig_link_geo = 19;

let  y_rotation_ig_link_geo = .5;



let  offset_y_position_ig_link_geo_inner = 0.6;
let  offset_y_position_ig_link_geo_outer = 0.85;

let  x_scale_ig_link_geo_outer = 0.75;
let  y_scale_ig_link_geo_outer = 0.75;
let  z_scale_ig_link_geo_outer = 0.75;

let  x_scale_ig_link_geo_inner = 0.68;
let  y_scale_ig_link_geo_inner = 0.68;
let  z_scale_ig_link_geo_inner = 0.68;









///////////////////////////////////////////////////

 const Y_position_image_link_1_texture = -3
 const Y_position_image_link_2_texture = -11
 const Y_position_image_link_3_texture = -19
const Y_position_image_link_4_texture = -27
const Y_position_image_link_5_texture = -35
const Y_position_image_link_6_texture = -43
const Y_position_image_link_7_texture = -51
const Y_position_image_link_8_texture = -59
const Y_position_image_link_9_texture = -67
const Y_position_image_link_10_texture = -75



var zcool = 0,

    X_POS_icon = 19,
    X_POS_cardsfeatures = -19,

    X_POS_ctaexplorer = 0,

    X_POS_ctadescription = -15,
    X_POS_ctaform = 15,





    y_POS_icon = 5,
    y_POS_cardsfeatures1 = 18,
    y_POS_cardsfeatures2 = 9.8,
    y_POS_cardsfeatures3 = 0,

    y_POS_ctaexplorer = -11,

    y_POS_ctadescription = -21,
    y_POS_ctaform = -29,

    z_POS_ctaexplorer = 0;

let cameraRig, activeCamera, activeHelper, cameraPerspective, cameraOrtho, cameraPerspectiveHelper, cameraOrthoHelper;















// if mobile 
// if mobile 
// if mobile 
// if mobile 
screenWidth < 768 ? (

  y_position_prof_pic = 24,
  y_position_bio = 9,
  y_position_handle = 17,

  z_dist_to_camera = 53, zcool = 24, z_POS_ctaexplorer = 0,

  X_POS_icon = 0,
  y_POS_icon = 22, 


   //y_rotation_x_link_geo = 0,

   z_position_x_link_image = 0,
   x_position_x_link_image = -29,
   y_position_x_link_image = 0,



   z_position_x_link_geo = 0,
   x_position_x_link_geo = -29,
   y_position_x_link_geo = 0,

  offset_y_position_x_link_geo_inner = 0.4,
  offset_y_position_x_link_geo_outer = 0.4,

   x_scale_x_link_geo_inner = 0.53,
   y_scale_x_link_geo_inner = 0.53,

   y_scale_x_link_geo_outer = 0.60,  
   x_scale_x_link_geo_outer = 0.60,








    z_position_ig_link_image = 0,
    x_position_ig_link_image = -29,
    y_position_ig_link_image = 19,

    z_position_ig_link_geo = 0,
    x_position_ig_link_geo = -29,
    y_position_ig_link_geo = 19,

    y_rotation_ig_link_geo = .5,

    offset_y_position_ig_link_geo_inner = 0.4,
    offset_y_position_ig_link_geo_outer = 0.4,

    x_scale_ig_link_geo_outer = 0.60,
    y_scale_ig_link_geo_outer = 0.60,
    //z_scale_ig_link_geo_outer = 0.75,

    x_scale_ig_link_geo_inner = 0.53,
    y_scale_ig_link_geo_inner = 0.53,
    //z_scale_ig_link_geo_inner = 0.68,








  x_position_email_link_image = -29,
  x_position_email_link_geo = -29,
  y_position_email_link_geo = -19,
  y_position_email_link_image = -19,

  x_scale_email_link_geo_outer = 0.60,
  y_scale_email_link_geo_outer = 0.60,
  //z_scale_ig_link_geo_outer = 0.75,

  x_scale_email_link_geo_inner = 0.53,
  y_scale_email_link_geo_inner = 0.53,





























image_social_media_hei = 8,
image_social_media_wid = 8,




  X_POS_ctadescription = 0, 
  X_POS_ctaform = 0, X_POS_cardsfeatures = 0, y_POS_cardsfeatures1 = 8,
  y_POS_cardsfeatures2 = 0.45, 
  y_POS_cardsfeatures3 = -9.1, y_POS_ctaexplorer = -19.4, y_POS_ctadescription = -29, y_POS_ctaform = -37) 

    : screenWidth > 768 && screenWidth < 1366 && (z_dist_to_camera = 79.5);







 const frustumSize = 600;
 let SCREEN_WIDTH = window.innerWidth,
     SCREEN_HEIGHT = window.innerHeight,
     aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
 const rotationSpeed = 67e-5;
 let currentRotationAngle = 0;



 const models = [];
 let cards = [];










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



 const directionalLight = new THREE.DirectionalLight(0xffffff, 34);




 directionalLight.position.set(0, 30, 11), scene.add(directionalLight);

 const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
 sphereGeometry.scale(-1, 1, 1);















///////////////////////////////////////////////////////////////
/////// VARS TO BE REPLACED
///////////////////////////////////////////////////////////////
var user_username_Placeholder = "Master of Nunn.co.uk";
var user_bio_Placeholder = ['MasterofNunn.co.uk a Life', 'Planner Club to Inspire &', 'Motivate and give', 'Self-Esteem.'];
var user_profile_pic_placeholder = "users/masterofnunncouk/image_profile_pic.PNG/"; 
var user_labels_link = ['Master of Nunn, Inspirational Motivator', 'Retro Shop', 'Fancy a Drink', 'Life Planner Club', ['Party T shirts - beautiful', 'designs for partying'], 'Virtual Garden Designer & Plantsman', 'My Book Store'];
var links_list = [['https://MasterofNunn.co.uk'], ['https://seekandfindit.co.uk'], ['https://Fancyadrink.co.uk'], ['https://Lifeplanner.club'], ['https://party-t-shirts-3.creator-spring.com/'], ['https://masterofnunn.co.uk'], ['https://masterofnunn.co.uk'], [], [], [], [], []];
var user_selected_background = "backgrounds/image_background_10.jpg";
var user_social_media_links = [['https://facebook.com/www.seekandfindit.co.uk', 'facebook'], ['https://www.instagram.com/masterofnunn/', 'instagram'], ['mailto:masterofnunncouk@gmail.com', 'emailadress']];






////////////////////////////////////////////////////////
////////////////   BAKCGROUND   ////////////////////////////
////////////////////////////////////////////////////////
 const textureLoader = new THREE.TextureLoader,
     texture = textureLoader.load(user_selected_background),
     material = new THREE.MeshBasicMaterial({
         map: texture
     }),
     mesh = new THREE.Mesh(sphereGeometry, material);
 scene.add(mesh);










////////////////////////////////////////////////////////
////////////////    profile picture   ////////////////////////////
////////////////////////////////////////////////////////

 const image_prof_pic_texture = textureLoader.load(user_profile_pic_placeholder),
     geometry_prof_pic = new THREE.BoxGeometry(8, 8, .01, 1, 1, .01),
     material_prof_pic = new THREE.MeshBasicMaterial({
         map: image_prof_pic_texture,
         transparent: !0
     }),
     _prof_pic = new THREE.Mesh(geometry_prof_pic, material_prof_pic);
 _prof_pic.position.set(0, y_position_prof_pic, 0), scene.add(_prof_pic);























////////////////////////////////////////////////////////
////////////////   handle   ////////////////////////////
////////////////////////////////////////////////////////
loader.load(font_asd_loader_path, function (fontLoaded) {
  font = fontLoaded;
  var geom_ref_pric = user_username_Placeholder;
  var titleGeometry = new TextGeometry(geom_ref_pric, {
      font: font,
      size: 2.25, 
      height: 0.04
    });
    const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
    const title = new THREE.Mesh(titleGeometry, titleMaterial);
      const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
      const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
      const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
    title.position.set(0- (titleWidth/2), y_position_handle  - 0.4 , 0) ; // Center the title 
    scene.add(title); 
  }); 





























////////////////////////////////////////////////////////
////////////////   bio   ////////////////////////////
////////////////////////////////////////////////////////


//const strings_bio = ["Welcome to LethalLegends ", "Gaming linkPage for all your needs", "news,apply,questions"];

const strings_bio = user_bio_Placeholder;
let scale_x_bio_geo_1 = 1;
let scale_x_bio_geo_2 = 1.05;
if (strings_bio.length === 1){   
   scale_x_bio_geo_1 = 1.4;
  scale_x_bio_geo_2 = 1.45;
  loader.load(font_asd_loader_path, function (fontLoaded) {
    font = fontLoaded;
    var geom_ref_pric = strings_bio[0];
    var titleGeometry = new TextGeometry(geom_ref_pric, {
        font: font,
        size: 1.35, 
        height: 0.02
      });
      const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
      const title = new THREE.Mesh(titleGeometry, titleMaterial);
        const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
        const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
        const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;

      title.position.set(0- (titleWidth/2), y_position_bio-0.6, 0) ; // Center the title above the bar chart
      scene.add(title); 
    }); 
    }   // END IF
  // 3 lines of text
  else if  (strings_bio.length === 3) {     
        for (let i2 = 0; i2 < strings_bio.length ; i2++) {
            loader.load(font_asd_loader_path, function (fontLoaded) {
              font = fontLoaded;
              var geom_ref_pric = strings_bio[i2];
              var titleGeometry = new TextGeometry(geom_ref_pric, {
                  font: font,
                  size: 1.35, 
                  height: 0.02
                });
                const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
                const title = new THREE.Mesh(titleGeometry, titleMaterial);
                  const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
                  const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
                  const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
                title.position.set(0- (titleWidth/2), y_position_bio - (i2*1.9) + 1.1, 0) ; // Center the title above the bar chart
                scene.add(title); 
              });  // font loader
            }
    scale_x_bio_geo_1 = 1.3;
    scale_x_bio_geo_2 = 1.35;   //  for loop
        } // else

    // 4 lines of text
    else if  (strings_bio.length === 4) { 
        for (let i2 = 0; i2 < strings_bio.length ; i2++) {
            loader.load(font_asd_loader_path, function (fontLoaded) {
              font = fontLoaded;
              var geom_ref_pric = strings_bio[i2];
              var titleGeometry = new TextGeometry(geom_ref_pric, {
                  font: font,
                  size: 1.35, 
                  height: 0.02
                });
                const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
                const title = new THREE.Mesh(titleGeometry, titleMaterial);
                  const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
                  const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
                  const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
                title.position.set(0- (titleWidth/2), y_position_bio - (i2*1.9) + 2.28, 0) ; // Center the title above the bar chart
                scene.add(title); 
              });  // font loader
            } //  for loop
        } // else
      else { 
      for (let i2 = 0; i2 < strings_bio.length ; i2++) {
          loader.load(font_asd_loader_path, function (fontLoaded) {
            font = fontLoaded;
            var geom_ref_pric = strings_bio[i2];
            var titleGeometry = new TextGeometry(geom_ref_pric, {
                font: font,
                size: 1.35, 
                height: 0.02
              });
              const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
              const title = new THREE.Mesh(titleGeometry, titleMaterial);
                const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
                const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
                const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
              title.position.set(0- (titleWidth/2), y_position_bio - (i2*1.9) + 0.6, 0) ; // Center the title above the bar chart
              scene.add(title); 
            });  // font loader
          }
         scale_x_bio_geo_1 = 1.3;
        scale_x_bio_geo_2 = 1.35;//  for loop
      } // else

/////////////////////
if (!(strings_bio.length === 0)) {
loader_title.load("geometries/geometry_card_capsule_feature_size_3.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xC1C6D7
            });
            e.material = geometry_rect_image_card_feature_1;

        }
    }));
  geometry_rect_image_card_feature_1.position.set(0, y_position_bio, z_POS_ctaexplorer-0.2);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(scale_x_bio_geo_1, 1, 1);
  scene.add(geometry_rect_image_card_feature_1)
}));
//////////////////////////////
loader_title.load("geometries/geometry_card_capsule_feature_size_3.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0xFF4A4A
            });
            e.material = geometry_rect_image_card_feature_2_2;

        }
    })), geometry_rect_image_card_feature_2_2.position.set(0, y_position_bio, z_POS_ctaexplorer-0.35);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(scale_x_bio_geo_2, 1.15, 4), 
      scene.add(geometry_rect_image_card_feature_2_2)
}));
   }
/////////////////////////////
/////////////////////////////





























let numGeometries = user_social_media_links.length;
console.log(numGeometries, "bnumGeometriesop");

let positions = dict_positions_According_len_sociallinks[numGeometries];




////////////////////////////////////////////////////////
////////////////   LINK  x    ////////////////////////////
////////////////////////////////////////////////////////

for (let i = 0; i < numGeometries; i++) {

  let card_tik_texture; 

  y_position_x_link_image = positions[i];
   if (i >=  6 ){
       x_position_x_link_image =  -59.5;
     screenWidth < 768 ? (x_position_x_link_image = -49.5) : null;
   };
   if (i >=  12 ){
       x_position_x_link_image =  -79.5;
     screenWidth < 768 ? (x_position_x_link_image = -69.5) : null;
   };
  
  if (user_social_media_links[i][1] == "facebook"){
   card_tik_texture = textureLoader.load("static/icons/facebook.png")

  } else if (user_social_media_links[i][1]  == "x") {
   card_tik_texture = textureLoader.load("static/icons/x.png")
  } 
  else if (user_social_media_links[i][1]  == "youtube") {
   card_tik_texture = textureLoader.load("static/icons/youtube.png")
  } 
  else if (user_social_media_links[i][1]  == "linkedin") {
   card_tik_texture = textureLoader.load("static/icons/linkedin.png")
  } 
  else if (user_social_media_links[i][1]  == "snapchat") {
   card_tik_texture = textureLoader.load("static/icons/snapchat.png")
  } 
  else if (user_social_media_links[i][1]  == "tiktok") {
  card_tik_texture = textureLoader.load("static/icons/tiktok.png")
  } 
  else if (user_social_media_links[i][1]  == "emailadress") {
  card_tik_texture = textureLoader.load("static/icons/email.png")
  } 
  else if (user_social_media_links[i][1]  == "instagram") {
   card_tik_texture = textureLoader.load("static/icons/instagram.png")
  } 
  else if (user_social_media_links[i][1]  == "itunes") {
  card_tik_texture = textureLoader.load("static/icons/itunes.png")
  } 
  else if (user_social_media_links[i][1]  == "pinterest") {
   card_tik_texture = textureLoader.load("static/icons/pinterest.png")
  } 
  else if (user_social_media_links[i][1]  == "spotify") {
     card_tik_texture = textureLoader.load("static/icons/spotify.png")
  } 
  else if (user_social_media_links[i][1]  == "twitch") {
     card_tik_texture = textureLoader.load("static/icons/twitch.png")
  }
  else if (user_social_media_links[i][1]  == "discord") {
     card_tik_texture = textureLoader.load("static/icons/discord.png")
  };

   const  geometry_card_tik = new THREE.BoxGeometry(image_social_media_hei, image_social_media_wid, 1e-4, 1, 1, .1),
     material_card_tik = new THREE.MeshBasicMaterial({
         map: card_tik_texture,
         transparent: !0
     }),
     card_tik = new THREE.Mesh(geometry_card_tik, material_card_tik);
   card_tik.userData.link = user_social_media_links[i][0], 
   card_tik.position.set(x_position_x_link_image, y_position_x_link_image, z_position_x_link_image), 
   card_tik.rotation.set(0, y_rotation_x_link_geo, 0), 
   scene.add(card_tik);
};
////////////////////////
for (let i = 0; i < numGeometries; i++) {
loader_title.load("geometries/geometry_card_square_cta_form.glb", (e => {
  y_position_x_link_geo = positions[i];
  if (i >=  6 ){
    x_position_x_link_geo =  -59.5;
    screenWidth < 768 ? (x_position_x_link_geo = -49.5) : null;
  };
   if (i >=  12 ){
         x_position_x_link_geo =  -79.5;
     screenWidth < 768 ? (x_position_x_link_geo = -69.5) : null;
   };
  const geometry_rect_image_card_feature_1 = e.scene;
      geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0x1DA1F2
            });
            e.material = geometry_rect_image_card_feature_1;
          e.userData.link = user_social_media_links[i][0];
        }
    }));
  geometry_rect_image_card_feature_1.position.set(x_position_x_link_geo, y_position_x_link_geo, z_position_x_link_geo-    
  offset_y_position_x_link_geo_inner);
  geometry_rect_image_card_feature_1.rotation.set(0, y_rotation_x_link_geo, 0);
  geometry_rect_image_card_feature_1.scale.set(x_scale_x_link_geo_inner, y_scale_x_link_geo_inner, 1);
  console.log(y_position_x_link_geo , y_position_x_link_image, "beofre add geo loop");
  scene.add(geometry_rect_image_card_feature_1)
}));
///////////////////////
loader_title.load("geometries/geometry_card_square_cta_form.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0x14171A
            });
            e.material = geometry_rect_image_card_feature_2_2;
          e.userData.link = user_social_media_links[i][0];
        }
    })), 
    geometry_rect_image_card_feature_2_2.position.set(x_position_x_link_geo, y_position_x_link_geo, z_position_x_link_geo- offset_y_position_x_link_geo_outer);
    geometry_rect_image_card_feature_2_2.rotation.set(0, y_rotation_x_link_geo, 0);
    geometry_rect_image_card_feature_2_2.scale.set(x_scale_x_link_geo_outer, y_scale_x_link_geo_outer, -4), 
    scene.add(geometry_rect_image_card_feature_2_2)
}));
}; // for loop end
////////////////////////////////
////////////////////////////////
///////////////////////////////////





















































 const image_link_1_line_wid = 30;
    const image_link_1_line_hei = 2.32;










////////////////////////////////////////////////////////
////////////////   LINK 1   ////////////////////////////
////////////////////////////////////////////////////////

const y_offset_loop = 7  ;
let index_3 = 0;

for (let i = 0; i < user_labels_link.length; i++) {


if (typeof user_labels_link[i] === 'string' ){
console.log("enter if string");
  loader.load(font_asd_loader_path, function (fontLoaded) {
    font = fontLoaded;

    var geom_ref_pric = user_labels_link[i];
    var titleGeometry = new TextGeometry(geom_ref_pric, {
        font: font,
        size: 1.15, 
        height: 0.02
      });
      const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
      const title = new THREE.Mesh(titleGeometry, titleMaterial);
        const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
        const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
        const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
      title.position.set(0- (titleWidth/2), Y_position_image_link_1_texture - (i*y_offset_loop) - 0.4 , 0) ; 
      scene.add(title); 
    }); 
}  
  else{
    
  for (let i2 = 0; i2 < 2; i2++) {

      loader.load(font_asd_loader_path, function (fontLoaded) {
        font = fontLoaded;
        var geom_ref_pric = user_labels_link[i][i2];
        var titleGeometry = new TextGeometry(geom_ref_pric, {
            font: font,
            size: 1.15, 
            height: 0.02
          });
          const titleMaterial = new THREE.MeshPhongMaterial({ color: 0x0B0B0B }); // White color
          const title = new THREE.Mesh(titleGeometry, titleMaterial);
            const titleBoundingBox = new THREE.Box3().setFromObject(title); // Calculate the bounding box of the title
            const titleWidth = titleBoundingBox.max.x - titleBoundingBox.min.x;
            const titleHeight = titleBoundingBox.max.y - titleBoundingBox.min.y;
          title.position.set(0- (titleWidth/2), Y_position_image_link_1_texture - (i*y_offset_loop) + 0.4 - (i2*1.7), 0) ; 

          scene.add(title); 
        index_3 += 1;
        });  // font loader
  } //  for loop
    } // else
///////////////////////
loader_title.load("geometries/geometry_capsule_size_1_roundedXL.glb", (e => {
    const geometry_rect_image_card_feature_1 = e.scene;
  geometry_rect_image_card_feature_1.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_1 = new THREE.MeshPhongMaterial({
                color: 0xFFFFFF
            });
            e.material = geometry_rect_image_card_feature_1;
           e.userData.link = links_list[i];
        }
    }));
  geometry_rect_image_card_feature_1.position.set(0, Y_position_image_link_1_texture- (i*y_offset_loop), z_POS_ctaexplorer-0.2);
  geometry_rect_image_card_feature_1.rotation.set(0, 3.14, 0);
  geometry_rect_image_card_feature_1.scale.set(1, 1, 2);
  scene.add(geometry_rect_image_card_feature_1)
}));
/////////////////////////////////
loader_title.load("geometries/geometry_capsule_size_1_roundedXL.glb", (e => {
    const geometry_rect_image_card_feature_2_2 = e.scene;
  geometry_rect_image_card_feature_2_2.traverse((e => {
        if (e.isMesh) {
            const geometry_rect_image_card_feature_2_2 = new THREE.MeshPhongMaterial({
                color: 0x3459D6
            });
            e.material = geometry_rect_image_card_feature_2_2;
            e.userData.link = links_list[i];
        }
    })), geometry_rect_image_card_feature_2_2.position.set(0, Y_position_image_link_1_texture- (i*y_offset_loop), z_POS_ctaexplorer-0.35);
    geometry_rect_image_card_feature_2_2.rotation.set(0, 3.14, 0);
    geometry_rect_image_card_feature_2_2.scale.set(1.05, 1.15, 2), scene.add(geometry_rect_image_card_feature_2_2)
}));

  }













































 let disableOrbiting = !1;




 function disableOrbitControls() {
    console.log(" disable  OrbitControls");

     controls.enabled = 1
 }



 function enableOrbitControls() {
    console.log(" ENABLE OrbitControls");

     controls.enabled = !0
 }








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


   console.log(" end  onObjectMouseDown");

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
      }
  }

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
 controls.enableDamping = !0;
controls.rotateSpeed = .7;
controls.minDistance = 2;
controls.maxDistance = 255.1;



 // controls.dampingFactor=.45;


 console.log(" ");
 let currentRotationAngle2 = 0,
     rotationSpeed2 = 1.71,
     isRotating = !1,
     rotationStartTime = 0,
     ii = Math.random() - .5;
 var animate = function() {
     requestAnimationFrame(animate);
     for (let e = 0; e < models.length; e++) models[e].rotation.x += .004 * ii, models[e].rotation.y += 2 * ii * .002;
     for (let e = 0; e < cards.length; e++) {
         let t = getRandomColor();
         const i = new THREE.MeshPhongMaterial({
             color: t
         });
         cards[e].material = i
     }
     const e = Date.now();
     !isRotating && e - rotationStartTime > 2400 && (isRotating = !0, rotationStartTime = e, rotationSpeed2 = .005), isRotating && e - rotationStartTime > 900 && (isRotating = !1, rotationSpeed2 = .03), currentRotationAngle += 67e-5, !disableOrbiting && isTabActive && controls.update(), directionalLight.rotation.y += .54, mesh.rotation.y = currentRotationAngle, renderer.render(scene, camera)
 };
 animate();