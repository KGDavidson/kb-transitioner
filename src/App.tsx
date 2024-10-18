import { useState } from 'react'
import { KBLayout } from './enums/KBLayout'

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayout | null>(null)
  const [targetLayout, setTargetLayout] = useState<KBLayout | null>(null)
  
  return (
    <>
    </>
  )
}

export default App
