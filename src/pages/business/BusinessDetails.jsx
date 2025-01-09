import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/shared/loader/Loading";
import { CardPlacehoderSkeleton } from "../../components/shared/loader/CardPlacehoderSkeleton";

export const BusinessDetails = () => {
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0`
      )
      .then((response) => {
        const article = response?.data?.articles.find((item) => item.title === title);
        setPost(article);
        console.log(article);
      })
      .catch((error) => console.log(error));
  }, [title]);

  return (
    <div className="p-5">
      {post ? (
        <>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p>{post.author}</p>
          <img
            src={post.urlToImage}
            alt={post.title}
            className="my-5 w-full object-cover"
          />
          <p>{post.description}</p>
          <p className="text-gray-500 mt-2">{post.content}</p>
        </>
      ) : (
        <CardPlacehoderSkeleton/>
      )}
    </div>
  );
};
