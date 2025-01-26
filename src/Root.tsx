import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import TrackingAppPage from "./pages/TrackingAppPage/TrackingAppPage";
import MoviesInfoPlatformPage from "./pages/MoviesInfoPlatformPage/MoviesInfoPlatformPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/tracking-app" element={<TrackingAppPage />} />
      <Route path="/movies-info-platform" element={<MoviesInfoPlatformPage />} />
    </Route>
  ), 
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
)

const Root = () => {
  return <RouterProvider router={router}/>
}

export default Root;