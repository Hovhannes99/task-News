import {Accordion, AccordionDetails, AccordionSummary, LinearProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllNewsApi from "../../../apis/all-news/get-news";
import {useNewsContext} from "../../../context/news-context";
import InfiniteScroll from "react-infinite-scroll-component";
import {languages, order} from "../../molecules/filters-container/data";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Error} from "@mui/icons-material";
import ScoreNews from "../../molecules/score-news/score-news";

const ListNews = () => {
    const [expanded, setExpanded] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const {news, setNews, setNextPageToken, nextPageToken} = useNewsContext()


    const getNews = async () => {
        try {
            const result = await AllNewsApi.getNews("en", "top");
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

    useEffect(() => {
        if (!news.length) {
            getNews()
        }
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleMoreNews = async () => {
        const randomOrder = Math.floor(Math.random() * order.length);
        const randomLanguages = Math.floor(Math.random() * languages.length);
        try {
            const result = await AllNewsApi.nextPageNews(languages[randomLanguages].id, order[randomOrder].id, nextPageToken)
            if (result.status === 200 && !result.data?.error) {
                const {stories} = result.data
                setNews(news.concat(stories))
                setNextPageToken(result?.data.next_page_token)
            } else {
                setNews([])
                setErrorMessage(`${result.data?.error},`+ " " + "Please click on the Refresh button")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={"lists-wrapper"}>
            {news.length ?
                <InfiniteScroll
                    dataLength={news.length}
                    next={() => handleMoreNews()}
                    hasMore={nextPageToken !== "EOD"}
                    loader={<h2>Loading...</h2>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <h2>
                            <b>Yay! You have seen it all</b>
                        </h2>
                    }
                >{news.map((item) => (
                    <Accordion expanded={expanded === item.uuid} onChange={handleChange(item.uuid)} key={item.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <img width={70} height={75} src={item?.imageUrls ? item?.imageUrls[0] : " "}
                                 alt="not have image"/>
                            <div className={"lists-wrapper__description"}>
                                <div className={"lists-wrapper__description__wrapper"}>
                                    <a href={item.url} target="_blank">{item.title}</a>
                                    <div className={"lists-wrapper__description__wrapper__media"}>
                                        <img width={18} height={18} src={item.domain_cached_logo_url} alt="wd"/>
                                        <p>{item.domain_name}</p>
                                        <p>1d</p>
                                    </div>
                                </div>
                                <div className={`lists-wrapper__description__score`+ `${item.score > 50 ?"_good" : item.score < 20 ?"_bad" : "_normal"}`}>
                                    <p>{item.score}%</p>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{marginLeft: "75px"}}>
                                {item.description}
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails sx={{borderTop: "1px solid #b9b9b9", display:"flex", justifyContent:"end"}}>
                          <ScoreNews/>
                        </AccordionDetails>
                    </Accordion>))}
                </InfiniteScroll>
                :
                <>
                    <LinearProgress color="secondary"/>
                    <Error/>
                    <h3>{errorMessage}</h3>
                </>
            }
        </div>
    )
}

export default ListNews