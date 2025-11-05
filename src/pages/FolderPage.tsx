import rootDir, { type FileType, type FolderType } from "../data/data"
import { useParams } from "react-router-dom"
import Folder from "../components/Folder"
import File from "../components/File"
/*
        /               rootDir
        /Misc           Misc
        /Expenses       Expenses
        /Misc/Photos
*/

export default function FolderPage() {

    const params = useParams()

    let items: (FileType | FolderType)[] | null = rootDir // If we are on the home page
    if (params.folderName) {
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
    
    return (
        <>
            {items.map(item => {
                if (item.type === 'folder') return <Folder key={item.name} folder={item} />

                return <File key={item.name} file={item} />
            })}
        </>
    )
}