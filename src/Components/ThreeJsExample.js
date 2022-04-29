import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function ThreeJsExample(canvasID) {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      16 / 9,
      0.1,
      1000
    );

    camera.position.z = 2;
    camera.position.x = 0;
    camera.position.y = 0;

    scene.add(camera)


    const geometry = new THREE.IcosahedronGeometry();
    const material = new THREE.MeshBasicMaterial({color:0x000000, wireframe:true})
    const Icosahedron = new THREE.Mesh(geometry,material);
    scene.add(Icosahedron);

        

    const canvas = document.getElementById(canvasID);
    const renderer = new THREE.WebGL1Renderer({
      canvas,
      antialias:true,
      alpha:true
    });
    renderer.setSize(320, 180);
    const controls = new OrbitControls(camera, renderer.domElement)


    const animate = () =>{

        Icosahedron.rotation.x += 0.002;
        Icosahedron.rotation.y += 0.002;

        controls.update();

      renderer.render(scene,camera);
      window.requestAnimationFrame(animate);
    }
    animate();
}
