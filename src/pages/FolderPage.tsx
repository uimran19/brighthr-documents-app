import rootDir, { type FileType, type FolderType, getAllFiles } from "../data/data"
import { useParams } from "react-router-dom"
import Folder from "../components/Folder"
import File from "../components/File"
import { appContext } from "../context/context"
import { useContext } from "react"
/*
        /               rootDir
        /Misc           Misc
        /Expenses       Expenses
        /Misc/Photos
*/

export default function FolderPage() {

    const params = useParams()
    const ctx = useContext(appContext)

    let items: (FileType | FolderType)[] | null = rootDir // If we are on the home page
    if (ctx.filterQuery) { // Filter all files for match
        const files = getAllFiles()
        items = files.filter((file)=> file.name.toLowerCase().startsWith(ctx.filterQuery.toLowerCase()))
    }
    else if (params.folderName) {
        const folder = rootDir.find(item => {
            return item.type === 'folder' && item.name.toLowerCase() === params.folderName?.toLowerCase()
        })
        if (folder?.type === 'folder') {
            items = folder.files
        } else {
            items = null
        }
    }

    if (!items) return (
        <p>Invalid directory name</p>
    )

    if (items.length === 0) return (
        <p>No matches found</p>
    )
    
    return (
        <main className="grow grid grid-cols-2 justify-items-center p-8">
            {items.map(item => {
                if (item.type === 'folder') return <Folder key={item.name} folder={item} />

                return <File key={item.name} file={item} />
            })}
        </main>
    )
}