import { Component, createEffect, createSignal, onMount } from 'solid-js'
import * as THREE from 'three'

const Cube: Component = () => {
  onMount(() => {
    // Get the canvas element
    const canvas = document.getElementById('canvas') as HTMLElement

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    )

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    canvas.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()
  })

  return <div id='canvas' class='w-full h-full'></div>
}

export default Cube
