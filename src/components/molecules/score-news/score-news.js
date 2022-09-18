import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


const ScoreNews = () => (
    <div className="score">
        <div className="score__icon__wrapper">
            <ThumbUpOffAltIcon/>
            <p>Like</p>
        </div>
        <div className="score__icon__wrapper">
            <ThumbDownOffAltIcon/>
            <p>Dislike</p>
        </div>
        <div className="score__icon__wrapper">
            <BookmarkBorderIcon/>
            <p>Bookmark</p>
        </div>
    </div>
)

export default ScoreNews