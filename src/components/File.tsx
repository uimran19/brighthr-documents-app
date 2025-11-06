import { type FileType } from "../data/data"
import { FaFileCsv, FaFilePdf, FaFile } from "react-icons/fa6";
import { BsFiletypeMov } from "react-icons/bs";

type IconProps = {
    className: string
}

type FileProps = {
    file: FileType
}


export default function File({file}: FileProps) {

    const Icon = ({ className }: IconProps) => {
        if (file.type === 'pdf') return <FaFilePdf className={className} />
        if (file.type === 'csv') return <FaFileCsv className={className} />
        if (file.type === 'doc') return <FaFile className={className} />
        if (file.type === 'mov') return <BsFiletypeMov className={className} />
    }
    
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
                <Icon className="text-6xl"/>
                <p>{file.name}</p>
                <p>{file.added}</p>
            </div>
        </div>
    )
}