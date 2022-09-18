import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FilterContainer from "../../components/molecules/filters-container/filter-container";
import ListNews from "../../components/organisms/list-news/list-news";

const WatchlistNews = () => {
    return (
            <Container  maxWidth="xl">
                <Box id="scrollableDiv" sx={{ bgcolor: '#f5f5f5', height: '93vh', overflow:"auto" }} >
                    <FilterContainer/>
                    <ListNews/>
                </Box>
            </Container>
    );
}


export default WatchlistNews;
