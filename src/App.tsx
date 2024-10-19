import { useState } from 'react'
import { KBLayout, KBLayoutType } from './enums/KBLayout'

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayoutType>(KBLayout.QWERTY)
  const [targetLayout, setTargetLayout] = useState<KBLayoutType>(KBLayout.WORKMAN)
  
  return (
    <>
    </>
  )
}

export default App
