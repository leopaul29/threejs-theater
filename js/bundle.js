(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // js/app.js
  var THREE = __toModule(require("https://orvillechomer.github.io/miscJsFiles/THREEJS/build/three.module.js"));
  var import_TrackballControls = __toModule(require("https://orvillechomer.github.io/miscJsFiles/THREEJS/r120/jsm/controls/TrackballControls.js"));
  var import_CSS3DRenderer = __toModule(require("https://orvillechomer.github.io/miscJsFiles/THREEJS/r120/jsm/renderers/CSS3DRenderer.js"));
  var camera;
  var scene;
  var renderer;
  var controls;
  var Element = function(id, x, y, z, ry) {
    var div = document.createElement("div");
    div.style.width = "480px";
    div.style.height = "360px";
    div.style.backgroundColor = "#000";
    var iframe = document.createElement("iframe");
    iframe.style.width = "480px";
    iframe.style.height = "360px";
    iframe.style.border = "0px";
    iframe.src = [
      "https://www.youtube.com/embed/",
      id,
      "?rel=0&autoplay=1&mute=1"
    ].join("");
    div.appendChild(iframe);
    var object = new import_CSS3DRenderer.CSS3DObject(div);
    object.position.set(x, y, z);
    object.rotation.y = ry;
    return object;
  };
  init();
  animate();
  function init() {
    var container = document.getElementById("container");
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5e3);
    camera.position.set(500, 350, 750);
    scene = new THREE.Scene();
    renderer = new import_CSS3DRenderer.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    var group = new THREE.Group();
    group.add(new Element("TlLijkYQjlw", 0, 0, 240, 0));
    group.add(new Element("RbtgTFGDkxA", 240, 0, 0, Math.PI / 2));
    group.add(new Element("fuyZFMRtXGs", 0, 0, -240, Math.PI));
    group.add(new Element("uqj9j-qz4AE", -240, 0, 0, -Math.PI / 2));
    scene.add(group);
    controls = new import_TrackballControls.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 4;
    window.addEventListener("resize", onWindowResize, false);
    var blocker = document.getElementById("blocker");
    blocker.style.display = "none";
    document.addEventListener("mousedown", function() {
      blocker.style.display = "";
    });
    document.addEventListener("mouseup", function() {
      blocker.style.display = "none";
    });
  }
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
})();
