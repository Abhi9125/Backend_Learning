import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    /**
     * ! Fetch data using axios.
     */
    axios
      .get("/api/jokes")
      // If request give positive response it show it.
      .then((Response) => {
        setJokes(Response);
        console.log(Response);
      })
      // If request give negative response it throw error.
      .catch((error) => {
        cosnole.log(error);
      });
  }, []);

  /**
   * ! // Fetching the Api using Fetch method 
      useEffect(() => {
    fetchDataFromBackend();
  }, []);
    const fetchDataFromBackend = async () => {
    const res = await fetch("/api/jokes");
    // console.log(res);
    const jsonData = await res.json();
    console.log(jsonData);
  };
  */

  // return (
  //   <>
  //     <h1>I am learning backend.</h1>
  //     {}
  //   </>
  // );

  return jokes.length === 0 ? (
    <h1>Simmer UI loading....</h1>
  ) : (
    <div>
      <h1>Jokes loading</h1>
      {/* {console.log(jokes.data)} */}
      {jokes.data.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
          {console.log(joke.id)}
        </div>
      ))}
    </div>
  );
}

export default App;
