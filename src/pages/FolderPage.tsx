import rootDir, { type FileType, type FolderType, getAllFiles } from "../data/data"
import { useParams } from "react-router-dom"
import Folder from "../components/Folder"
import File from "../components/File"
import { appContext } from "../context/context"
import { useContext } from "react"
import { Link } from "react-router-dom"
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
    
    items.sort((a,b) => {
        if (ctx.sort === 'name') {
            return a.name.localeCompare(b.name)
        }
        else {
            if (a.type === 'folder' || b.type === 'folder') return -1;
            const dateA = new Date(a.added).getTime()
            const dateB = new Date(b.added).getTime()
            return dateB - dateA
        }
    })
    
    return (
        <>
            <main className="grow grid grid-cols-2 justify-items-center p-8">
                {items.map(item => {
                    if (item.type === 'folder') return <Folder key={item.name} folder={item} />

                    return <File key={item.name} file={item} />
                })}
            </main>
            {params.folderName && <Link className="text-white border mb-30 self-center p-3 rounded-lg bg-[#4cabf7] hover:bg-[#3579ad] cursor-pointer" to='/'>Back</Link>}
        </>
    )
}