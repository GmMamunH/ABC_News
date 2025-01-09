import axios from "axios";
import { useEffect, useState } from "react";
import { BusinessPost } from "./BusinessPost";
import { CardPlacehoderSkeleton } from "../../components/shared/loader/CardPlacehoderSkeleton";

export const Business = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0&page=${page}&pageSize=3`
      )
      .then((response) => {
        const newPosts = response?.data?.articles || [];
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setHasMore(newPosts.length > 0);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        hasMore &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <div key={index}>
            <BusinessPost post={post} />
          </div>
        ))}
      </div>
      {loading && <CardPlacehoderSkeleton />}
      
    </>
  );
};
