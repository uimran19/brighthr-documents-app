import { Route, Routes } from "react-router-dom"
import FolderPage from "./pages/FolderPage"
import FilterInput from "./components/FilterInput"
import Sorting from "./components/Sorting"

function App() {

  return (
    <>
      <header className="bg-gray-200 grid grid-cols-3 p-6">
        <div></div>
        <div className="text-center">
          <FilterInput />
        </div>
        <div className="text-right mr-30">
          <Sorting />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<FolderPage/>} />
        <Route path="/:folderName" element={<FolderPage/>} />
      </Routes>
    </>
  )
}

export default App
