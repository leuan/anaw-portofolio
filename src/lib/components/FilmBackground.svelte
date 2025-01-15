
<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;

  onMount(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer
    let stars: THREE.Group; // Group to hold stars
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;

    function init() {
      // Initialize Scene and Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000);
      camera.position.z = 500;

      // Check for WebGL support
      if (webGLSupport()) {
        renderer = new THREE.WebGLRenderer({ alpha: true });
      }
      
      renderer.setSize(WIDTH, HEIGHT);
      renderer.setClearColor(0x000011, 0); // Transparent background
      container.appendChild(renderer.domElement);

      // Create stars and set up animations
      starForge();
      window.addEventListener('resize', onResize);

      animate();
    }

    function starForge() {
      const starQty = 200;
      const loader = new THREE.TextureLoader();
      const imageUrls = [
        'images/cat1.png',
        'images/cat2.png',
        'images/cat3.png',
        // Add more images
      ];

      // Group to hold all stars
      stars = new THREE.Group();

      for (let i = 0; i < starQty; i++) {
        const texture = loader.load(imageUrls[Math.floor(Math.random() * imageUrls.length)]);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);

        sprite.position.set(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );

        const size = Math.random() * 50 + 20;
        sprite.scale.set(size, size, 1);

        stars.add(sprite);
      }

      scene.add(stars);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (stars) stars.rotation.y += 0.001; // Slowly rotate stars
      renderer.render(scene, camera);
    }

    function onResize() {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    }

    function webGLSupport(): boolean {
      // Check if WebGL is supported
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    }

    init();

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} style="position: absolute; width: 100%; height: 100%;"></div>