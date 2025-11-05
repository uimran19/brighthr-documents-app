import { FaFolder } from "react-icons/fa";
import { type FolderType } from "../data/data";

type FolderProps = {
    folder: FolderType
}

export default function Folder({folder}: FolderProps) {
    return (
        <div>
            <FaFolder />
            <p>{folder.name}</p>
        </div>
    )
}