import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ErrorPage from "./pages/ErrorPage"
import ConversationTranscriber from "./pages/Transcription"
import AuthenticationPage from "./pages/AuthenticationPage"
import Dashboard from "./pages/DashboardPage"
import SurveyPage from "./pages/SurveyPage"
import ProfilePage from "./pages/ProfilePage"
function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="*" element={<ErrorPage/>}/>
    <Route path="/transcription" element={<ConversationTranscriber/>}/>
    <Route path="/authenticate" element={<AuthenticationPage/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/survey" element={<SurveyPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
   </Routes>
    </>
  )
}
export default App