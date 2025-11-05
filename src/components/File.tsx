import { type FileType } from "../data/data"

type FileProps = {
    file: FileType
}

export default function File({file}: FileProps) {
    
    return (
        <div>
            <p>{file.name}</p>
            <p>{file.added}</p>
        </div>
    )
}