import { Route, Routes } from "react-router-dom"
import FolderPage from "./pages/FolderPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<FolderPage/>} />
        <Route path="/:folderName" element={<FolderPage/>} />
      </Routes>
    </>
  )
}

export default App
