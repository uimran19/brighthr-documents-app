import { useContext } from "react"
import { appContext } from "../context/context"

export default function FilterInput() {
    const ctx = useContext(appContext)

    function handleChange(value: string) {
        ctx.setFilterQuery(value)
    }

    return (
    
        <label>
            <span>Filter by filename:</span>
            <input onChange={(e) => handleChange(e.currentTarget.value)} className='border ml-2 pl-1' placeholder="filename.." type="text" />
        </label>
    )
}