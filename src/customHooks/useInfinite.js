import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    // callback here is the function we passed to the useInfiniteScroll hook i.e. fetchMoreCards
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    //condition to check if the user has reached the bottom of the window/page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
      setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
