import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const API_URL = "https://dummyjson.com/users";

  const [userData, setUserData] = useState([]);
  const [pages, setPages] = useState(1);
  const itemsNumber = 10;
  const pageNumber = Math.floor(userData.length / itemsNumber);

  let arrayPage = [];

  function pushArr() {
    for (let i = 1; i <= pageNumber; i++) {
      arrayPage.push(i);
    }
  }

  pushArr();

  let start = pages;
  let last = pages + itemsNumber;

  let filterData = userData.slice(start, last);

  console.log("filte", filterData);

  function fetchData() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUserData(data.users))
      .catch((err) => console.log(err));
  }

  console.log(userData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User data</h1>

      {filterData.map((item, index) => {
        return (
          <ul>
            <li>{item.firstName}</li>
          </ul>
        );
      })}

      <button onClick={() => setPages((prev) => prev - 1)}>prev</button>
      {arrayPage.map((item) => {
        return <button onClick={() => setPages(item)}>{item}</button>;
      })}
      <button onClick={() => setPages((prev) => prev + 1)}>next</button>
    </div>
  );
}
