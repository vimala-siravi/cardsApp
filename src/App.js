import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import useInfiniteScroll from "./customHooks/useInfinite";

function App() {
  // State to keep track of the cards fetched by the API
  const [cardItems, setCardItems] = useState([]);
  // State to keep track of the pagination while fetching more cards
  const [page, setPage] = useState(10);
  // A custom hook to fetch more cards when the user scrolls the page
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreCards);

  useEffect(() => {
    fetchInitialListOfCards();
  }, []);

  const fetchInitialListOfCards = async () => {
    //Function to fetch firt 10 cards on the inital render
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`
    );
    const data = await response.json();
    setCardItems(data);
  };

  async function fetchMoreCards() {
    //Function to fetch more cards as the user scrolls the page
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`
    );
    const data = await response.json();
    setCardItems([...cardItems, ...data]);
    setPage(page + 10);
    // set the isFetching state to false to again load more cards on the further scroll
    setIsFetching(false);
  }

  return (
    <div className="container">
      <h2 className="App pt-4">List of Cards</h2>
      <div className="pt-4 ml-5 mr-4 row">
        <Cards cardItems={cardItems} />
      </div>
    </div>
  );
}

export default App;
