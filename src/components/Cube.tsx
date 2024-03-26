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
      alpha: true,
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    canvas.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({
      color: 0x5cbdb4,
      // wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // 使用EdgesGeometry从BoxGeometry提取线框
    const edgesGeometry = new THREE.EdgesGeometry(geometry)

    // 创建线条材质
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 })

    // 使用LineSegments创建线框
    const wireframe = new THREE.LineSegments(edgesGeometry, lineMaterial)
    cube.add(wireframe)

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
