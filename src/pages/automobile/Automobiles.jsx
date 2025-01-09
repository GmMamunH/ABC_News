import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../../components/shared/loader/Loading";
import { CardPlacehoderSkeleton } from "../../components/shared/loader/CardPlacehoderSkeleton";

export const Automobiles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-12-08&sortBy=publishedAt&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0"
      )
      .then((response) => {
        // handle success
        console.log(response?.data?.articles);
        setPosts(response?.data?.articles || []);
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <CardPlacehoderSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
