import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ErrorPage from "./pages/ErrorPage"
function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="*" element={<ErrorPage/>}/>
   </Routes>
    </>
  )
}
export default App