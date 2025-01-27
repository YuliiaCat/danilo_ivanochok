import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import { useEffect, useState } from "react"
import Menu from "./components/Menu/Menu";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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
