import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { useState } from "react"
import Menu from "./components/Menu/Menu";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Header isOpen={isOpen} openMenu={handleOpen} onClose={handleClose} />
      <main>
        <Outlet />

        <Menu onClose={handleClose} isOpen={isOpen} />
      </main>
    </>
  )
}

export default App
