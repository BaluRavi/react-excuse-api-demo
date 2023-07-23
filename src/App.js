import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [generateExcuse, setGenerateExcuse] = useState("");
  const fetchExcuseData = (excuse) => {

    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      //.then((response) => response.data.map((item) => setExcuse(item.excuse)))
      .then((response) => setGenerateExcuse(response.data[0].excuse))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        else if (error.request) {
          console.log(error.request)

        }
        else {
          console.log('Error is ' + error.message);
        }
      })
  }

  return (
    <div className="App">

      <h1 style={{ marginBottom: "0px" }}>Generate An Excuse</h1>
      <button onClick={() => fetchExcuseData("party")} >Party</button><br></br>
      <button onClick={() => fetchExcuseData("family")} className="margin-top">Family</button><br></br>
      <button onClick={() => fetchExcuseData("office")} className="margin-top">Office</button><br></br>

      <h1>{generateExcuse}</h1>

    </div>
  );
}

export default App;
