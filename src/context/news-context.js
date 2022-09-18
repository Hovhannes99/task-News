import React, {createContext, useContext, useState, useMemo} from 'react'

const NewsContext = createContext([])

const AllNewsContext = ({children}) => {

    const [autoRefreshOfNews, setAutoRefreshOfNews] = useState(0)
    const [news, setNews] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("")

    const contextValues = useMemo(
        () => ({
            news,
            setNews,
            autoRefreshOfNews,
            setAutoRefreshOfNews,
            nextPageToken,
            setNextPageToken
        }),
        [autoRefreshOfNews, news, nextPageToken],)

    return <NewsContext.Provider value={contextValues}>{children}</NewsContext.Provider>
}

export default AllNewsContext
export const useNewsContext = () => useContext(NewsContext)
