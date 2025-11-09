import { appContext } from "../context/context"
import { useContext } from "react"

export default function Sorting() {
    const ctx = useContext(appContext)

    function handleChange(value: string) {
        ctx.setSort(value)
    }
    
    return (
        <div>
            <label>
                <span>Sort by:</span>
                <select className='border ml-2' onChange={e => handleChange(e.currentTarget.value)}>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </select>
            </label>
        </div>
    )
}