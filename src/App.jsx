import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Hola from "./assets/components/Hola";
import LocationInfo from "./assets/components/LocationInfo";
import Pagination from "./assets/components/Pagination";

import ResidentList from "./assets/components/ResidentList";
import { getRandomNumber } from "./assets/utilss/handleRandom";


const RESIDENT_PERPAGE = 12;

function App() {
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameLocation(e.target.idLocation.value);
  };

  const pagination = () => {
    if (!location) return [];
    const maxLimit = page * RESIDENT_PERPAGE;
    const minLimit = maxLimit - RESIDENT_PERPAGE;

    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents;
  };

 /*  const numbersPage = () => {
    const quantityPages = Math.ceil(
      location?.residents.length / RESIDENT_PERPAGE
    );
    const arrayPages = [];
    for (let i = 1; i <= quantityPages; i++) {
      arrayPages.push(i);
    }
    return arrayPages;
  }; */

  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [nameLocation]);

  return (
    <div className="App ">
      <div className="backgroud">
      <Hola handleSubmit={handleSubmit} />
      </div>
      <div className="backgroud_container">
      <Pagination location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE}  setPage={setPage} />
      <LocationInfo location={location} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE}  setPage={setPage} />
    </div>
    </div>
    
  );
}

export default App;
