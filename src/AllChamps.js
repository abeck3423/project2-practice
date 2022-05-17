import { useEffect, useState } from "react";
import ChampDetails from "./ChampDetails";

function AllChamps(props) {
  const [champList, setChampList] = useState([]);
  let test = "hello world"

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setChampList(data.data);
      });
  }, []);
  console.log({ champList, test });
  return (
    <>
      {Object.keys(champList).map((champ) => (
        <>
          <ChampDetails data={champList[champ]} />
        </>
      ))} 
    </>
  );
}

export default AllChamps;
