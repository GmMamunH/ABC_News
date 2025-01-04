import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Business = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0"
      )
      .then(function (response) {
        // handle success
        console.log(response?.data?.articles);
        setPosts(response?.data?.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post?.index}>
          <p>{post?.content}</p>
        </div>
      ))}
    </>
  );
};
