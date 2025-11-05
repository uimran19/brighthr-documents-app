import { FaFolder } from "react-icons/fa";
import { type FolderType } from "../data/data";
import { Link } from "react-router-dom";

type FolderProps = {
    folder: FolderType
}

export default function Folder({folder}: FolderProps) {
    return (
        
        <Link to={`/${folder.name}`}>
            <FaFolder />
            <p>{folder.name}</p>
        </Link>
    )
}