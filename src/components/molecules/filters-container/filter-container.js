import RefreshButton from "../../atoms/refresh-button";
import AllFilterButton from "../../atoms/all-filter-button";
import MultipleSelect from "../multiSelect/multi-select";
import PrimaryButton from "../../atoms/primary-button/primary-button";
import {useEffect, useState} from "react";
import {order, languages, autoRefresh} from "./data";
import BasicSelect from "../../atoms/basic-select/basic-select";
import {useNewsContext} from "../../../context/news-context";
import AllNewsApi from "../../../apis/all-news/get-news";


const FiltersContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [orderName, setOrderName] = useState([]);
    const [languageName, setLanguage] = useState([]);
    const [timeRefresh, setAutoRefresh] = useState(0)
    const {setNews, setNextPageToken} = useNewsContext()

    const handleChangeTime = (event) => {
        setAutoRefresh(event.target.value);
    };
    const handleOrderType = (event) => {
        const {target: {value}} = event;
        setOrderName(typeof value === 'string' ? value.split(',') : value);
    };

    const handleLanguageType = (event) => {
        const {target: {value}} = event;
        setLanguage(typeof value === 'string' ? value.split(',') : value);
    };

    const handleUpdateNews = async () => {
        try {
            const result = await AllNewsApi.getNews(languageName.join(","), orderName.join(","))
            if (result.status === 200) {
                const {stories} = result.data
                setNews(stories)
                setNextPageToken(result?.data.next_page_token)
            } else {
                setNews([])
            }
        } catch (e) {
            console.log(e)
        }
    }

    const onRefreshPage = async () => {
        const randomOrder = Math.floor(Math.random() * order.length);
        const randomLanguages = Math.floor(Math.random() * languages.length);
        try {
            const result = await AllNewsApi.getNews(languages[randomLanguages].id, order[randomOrder].id,)
            if (result.status === 200) {
                const {stories} = result.data
                setNews(stories)

            } else {
                setNews([])
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (timeRefresh && timeRefresh > 0) {
            const interval = setInterval(onRefreshPage, timeRefresh);
            return () => clearInterval(interval);
        }
    }, [timeRefresh]);
    return (
        <div className={"filter"}>
            <h2 className={"filter__title"}>Watchlist Name</h2>
            <div>
                <div className={"filter__buttons"}>
                    <RefreshButton onClick={() => onRefreshPage()}/>
                    <AllFilterButton onClick={() => setIsOpen(!isOpen)}/>
                </div>
                {isOpen &&
                    <div className={"filter__popup"}>
                        <BasicSelect data={autoRefresh} value={timeRefresh} nameOfSelect={"Auto Refresh"}
                                     onChange={handleChangeTime}/>
                        <MultipleSelect data={order} label={"Order"} name={orderName} value={orderName}
                                        onChange={handleOrderType}/>
                        <MultipleSelect data={languages} label={"Languages"} name={languageName} value={languageName}
                                        onChange={handleLanguageType}/>
                        <PrimaryButton onClick={() => handleUpdateNews()}>RESET</PrimaryButton>
                    </div>}
            </div>

        </div>
    )
}


export default FiltersContainer