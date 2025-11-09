import { createContext, useState, type ReactNode } from "react";

type AppContext = {
    filterQuery: string,
    setFilterQuery: (newFilterQuery: string) => void,
    setSort: (newSort: string) => void,
    sort: string,
    ascending: boolean
}

export const appContext = createContext<AppContext>({
    filterQuery: "",
    setFilterQuery() {},
    setSort() {},
    sort: "name",
    ascending: false
})

export function AppContextProvider({children}: {children: ReactNode}) {
    
    const [filterQuery, setFilterQuery] = useState('')
    const [sort, setSort] = useState('name')
    const [ascending, setAscending] = useState(false)

    const ctx: AppContext = {
        filterQuery,
        setFilterQuery,
        setSort,
        sort,
        ascending
    }

    return <appContext.Provider value={ctx}>{children}</appContext.Provider>
}