import { useEffect, useState } from "react";
// import ChampDetails from "./ChampDetails";

function AllChamps(props) {
  const [champList, setChampList] = useState([]);

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/Aatrox.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setChampList(data);
      });
  }, []);
  console.log("champs");
  return <div>{champList}</div>;
}

export default AllChamps;
