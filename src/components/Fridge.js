import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import * as FBXLoader from "three-fbxloader-offical"
import OrbitControls  from "three-orbitcontrols"
import TWEEN from "@tweenjs/tween.js"
import "./Fridge.scss"
import "./Menu.css"
import { Link } from "react-router-dom";

class Fridge extends Component {
  
  componentDidMount() {


    var OutlineShader = {

      uniforms: {
        offset: { type: 'f', value: 0.01 }
      },
    
      vertexShader: [
    
        "uniform float offset;",
    
        "void main() {",
        "  vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );",
        "  gl_Position = projectionMatrix * pos;",
        "}"
    
      ].join('\n'),
    
      fragmentShader: [
    
        "void main() {",
        "  gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );",
        "}"
    
      ].join('\n')

    
    
    };


    // -----------------------------------------------------
    var renderer = new THREE.WebGLRenderer( { alpha: true } );
    var container = document.getElementById( 'container' );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    renderer.domElement.style.cursor = 'grab';
    
    var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, .1, 100000 );
    camera.position.set( -2.0, 2.6, 3.5 );
    
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.target.y = 0.9;
    controls.update();
    controls.enabled = false;
    
    var scene = new THREE.Scene();
    
    var aLight = new THREE.AmbientLight( 0x404040 );
    scene.add( aLight );
    
    var dLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    dLight.position.set( 0.1, 0.7, 1 );
    scene.add( dLight );
    
    //
  

    var fbxLoader = new FBXLoader();
    
    var root = 'https://cdn.jsdelivr.net/gh/davidlyons/codevember17@v1/08fridge/';
    fbxLoader.load(root + 'model/fridge.fbx', function(fbx){
    
      var fridgeGroup = fbx.children[0];
    
      var back = fridgeGroup.getObjectByName('back');
      var topDoor = fridgeGroup.getObjectByName('topDoor');
      var bottomDoor = fridgeGroup.getObjectByName('bottomDoor');
      var topHandle = fridgeGroup.getObjectByName('topHandle');
      var bottomHandle = fridgeGroup.getObjectByName('bottomHandle');
    
      // materials
    
      var fridgeMat = new THREE.MeshToonMaterial({
        color: 0x5bbdc8,
        shininess: 2,
        specular: 0xcccccc
      });
    
      var handleMat = new THREE.MeshToonMaterial({
        color: 0xfffffd,
        shininess: 5
      });
    
      back.material = topDoor.material = bottomDoor.material = fridgeMat;
      topHandle.material = bottomHandle.material = handleMat;
    
      // outline
    
      var outlineMat = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone( OutlineShader.uniforms ),
        vertexShader: OutlineShader.vertexShader,
        fragmentShader: OutlineShader.fragmentShader,
        side: THREE.BackSide
      });
    
      var children = [back, topDoor, bottomDoor, topHandle, bottomHandle];
      children.forEach(function(obj){
        var outline = new THREE.Mesh( obj.geometry, outlineMat );
        obj.add( outline );
      });
    
      scene.add( fridgeGroup );
    
      topDoor.userData.isOpen = false;
      bottomDoor.userData.isOpen = false;
    
      // input
    
      function toggleDoor( door ) {
    
        if ( door.userData.isOpen ) {
    
          var close = new TWEEN.Tween( door.rotation )
            .to( { y: 0 }, 200 )
            .easing( TWEEN.Easing.Exponential.In )
            .start();
    
          // impact from the slam
          var slam = new TWEEN.Tween( fridgeGroup.rotation )
            .to( { y: 0 }, 200 )
            .delay( 200 )
            .easing( TWEEN.Easing.Quintic.Out )
            .start();
    
        } else {
    
          var open = new TWEEN.Tween( door.rotation )
            .to( { y: Math.PI / 2 }, 800 )
            .easing( TWEEN.Easing.Elastic.Out )
            .start();
    
          // so impact doesn't have to reset
          var slide = new TWEEN.Tween( fridgeGroup.rotation )
            .to( { y: THREE.Math.degToRad(10) }, 200 )
            .delay( 150 )
            .easing( TWEEN.Easing.Cubic.Out )
            .start();
        }
    
        door.userData.isOpen = !door.userData.isOpen;

        // document.getElementById('menu').click();
        document.getElementById('menu').classList.toggle('toggleDisplay');
        document.getElementById('menu-open-button').click();
        document.getElementById('menu-open-button').classList.toggle('toggleDisplay');
    
      }
    
      var which = true;
      var count = 0;
    
      function mousedown(e){
    
        TWEEN.removeAll();
    
        var door = which ? topDoor : bottomDoor;
        door.rotation.y = door.userData.isOpen ? Math.PI / 2 : 0;
    
        count++;
        if ( count % 2 ) which = !which;
    
        door = which ? bottomDoor : bottomDoor;
        toggleDoor( door );

        
    
      }
    
      renderer.domElement.addEventListener('mousedown', mousedown, false);
    
    });
    
    //
    
    window.addEventListener( 'resize', resize, false );
    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    
    loop();
    
    function loop() {
      requestAnimationFrame( loop );
      TWEEN.update();
      renderer.render( scene, camera );
    }

  }
  render() {
    return (
      <div>
        <div id="container">
        <nav className="menu toggleDisplay"  id="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label id="menu-open-button" className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"></span>
            <span className="lines line-2"></span>
            <span className="lines line-3"></span>
          </label>
          <Link to="/SearchbarCountry" className="menu-item yellow">  <i className="fa fa-anchor"> </i> </Link>
          <Link to="/recipe-of-the-day" className="menu-item red"> <i className="fa fa-heart"></i> </Link>
          <Link to="/ingredients" className="menu-item orange"> <i className="fa fa-star"></i> </Link>
          
          
        </nav>  
        </div>
      
      </div>

    )
  }
}


export default Fridge 