import axios from 'axios'

const getNews = async (languages = "en", order = "top", limit = "20") => {
    const data = await axios.get(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${limit}&languages=${languages}&order=${order}`)
    return data
}

const nextPageNews = async (languages = "en", order = "top", token, limit = "20") => {
    const data = await axios.get(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${limit}&languages=${languages}&order=${order}&page_token=${token}`)
    return data
}

const AllNewsApi = {
    getNews,
    nextPageNews
}

export default AllNewsApi
