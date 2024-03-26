import { Icon } from '@iconify-icon/solid'
import type { Component } from 'solid-js'

import Cube from '@components/Cube'

const App: Component = () => {
  return (
    <>
      <div class='flex w-fit mx-auto my-8 text-5xl space-x-2 items-center text-sky-800'>
        <Icon icon='logos:solidjs-icon' /> <span class='text-3xl'>+</span>
        <Icon icon='logos:typescript-icon' /> <span class='text-3xl'>+</span>
        <Icon icon='logos:tailwindcss-icon' /> <span class='text-3xl'>+</span>
        <Icon icon='logos:threejs' />
      </div>

      <div class='text-5xl font-semibold text-sky-800 underline underline-offset-2 text-center my-8'>
        Hello for ThreeJS with SolidJS
      </div>
      <div class='w-4/5 h-96 mx-auto my-8 rounded-xl overflow-hidden'>
        <Cube />
      </div>
    </>
  )
}

export default App
