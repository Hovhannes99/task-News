import './global.scss';
import Header from "./components/organisms/header/header";
import WatchlistNews from "./pages/wathclist-news/wathchlist-news";
import AllNewsContext from "./context/news-context";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
        <AllNewsContext>
            <WatchlistNews/>
        </AllNewsContext>
    </div>
  );
}

export default App;
