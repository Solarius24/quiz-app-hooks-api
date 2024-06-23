import { useState, useEffect } from "react";
import axios from "axios";

export function useGetQuizData(difficulty, category) {
  const [dataApi, setDataApi] = useState(null);
  useEffect(() => {
    const linksFactory = () => {
      if (category.option === "any" && difficulty === "any") {
        return `https://opentdb.com/api.php?amount=10`;
      } else if (category.option === "any" && difficulty !== "any") {
        return `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
      } else if (category.option !== "any" && difficulty === "any") {
        return `https://opentdb.com/api.php?amount=10&category=${category.option}&type=multiple`;
      } else {
        return `https://opentdb.com/api.php?amount=10&category=${category.option}&difficulty=${difficulty}&type=multiple`;
      }
    };
    const dataFetch = async () => {
      const data = await axios.get(`${linksFactory()}`);
      const dataApiNew = data.data.results;
      setDataApi(dataApiNew);
    };
    dataFetch();
  }, [category, difficulty]);
  return dataApi;
}
