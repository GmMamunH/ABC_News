import axios from "axios";
import { useEffect } from "react"


export const Automobiles = () => {
  useEffect(()=>{
   axios
     .get(
       "https://newsapi.org/v2/everything?q=tesla&from=2024-12-08&sortBy=publishedAt&apiKey=0cc82a8a00ef4b29b7c20b3705bb46e0"
     )
     .then(function (response) {
       // handle success
       console.log(response.data);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .finally(function () {
       // always executed
     });
  })
  return (
    <div>Automobiles</div>
  )
}
