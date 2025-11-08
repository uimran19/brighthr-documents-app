import { Route, Routes } from "react-router-dom"
import FolderPage from "./pages/FolderPage"
import FilterInput from "./components/FilterInput"

function App() {

  return (
    <>
      <header className="bg-gray-200 flex justify-center p-6">
        <FilterInput />
      </header>
      <Routes>
        <Route path="/" element={<FolderPage/>} />
        <Route path="/:folderName" element={<FolderPage/>} />
      </Routes>
    </>
  )
}

export default App
