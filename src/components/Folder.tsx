import { FaFolder } from "react-icons/fa";
import { type FolderType } from "../data/data";
import { Link } from "react-router-dom";

type FolderProps = {
    folder: FolderType
}

export default function Folder({folder}: FolderProps) {
    return (
        
        <div className="flex justify-center items-center">
            <Link className='inline-block p-7 border-2 border-white hover:border-blue-500 rounded-full hover:text-[#1a71c2]' to={`/${folder.name}`} title={`click to enter ${folder.name} folder`}>
                <FaFolder className="text-7xl text-[#1a71c2]"/>
                <p>{folder.name}</p>
            </Link>
        </div>
    )
}