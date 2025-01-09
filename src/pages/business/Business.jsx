import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BusinessPost } from "./BusinessPost";
import { Loading } from "../../components/shared/loader/Loading";
import { CardPlacehoderSkeleton } from "../../components/shared/loader/CardPlacehoderSkeleton";

export const Business = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0"
      )
      .then(function (response) {
        // handle success
        console.log(response?.data?.articles);
        setPosts(response?.data?.articles);
        setLoading(false)
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> 
        {loading?(<CardPlacehoderSkeleton/>):posts.map((post) => (
          <div key={post?.index}>
            <BusinessPost post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
