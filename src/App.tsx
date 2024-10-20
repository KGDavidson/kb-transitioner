import { useState } from 'react'
import { KBLayout, KBLayoutType } from './enums/KBLayout'
import KeyboardLayout from './components/KeyboardLayout/KeyboardLayout'

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayoutType>(KBLayout.QWERTY)
  const [targetLayout, setTargetLayout] = useState<KBLayoutType>(KBLayout.WORKMAN)
  
  return (
    <div className='bg-zinc-900 h-screen w-screen p-8'>
      <KeyboardLayout layout={sourceLayout} />
    </div>
  )
}

export default App
