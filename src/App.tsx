import { useState } from 'react'

enum KBLayout {
  QWERTY = "qwertyuiopasdfghjkl;zxcvbnm,./",
  AZERTY = "azertyuiopqsdfghjklmwxcvbn,;:!",
  DVORAK = "',.pyfgcrlaoeuidhtns;qjkxbmwvz",
  COLEMAK = "qwfpgjluy;arstdhneiozxcvbkm,./",
  WORKMAN = "qdrwbjfup;ashtgyneoizxmcvkl,./"
}

function App() {
  const [sourceLayout, setSourceLayout] = useState<KBLayout | null>(null)
  const [targetLayout, setTargetLayout] = useState<KBLayout | null>(null)
  
  return (
    <>
    </>
  )
}

export default App
