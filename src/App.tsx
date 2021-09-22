import { Global, css } from "@emotion/react";
import { useEffect, useState } from "react";
import BarChart from "./components/Barchart";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/Globalinfo";
import type { ResponseData, Country } from "./types"

const App: React.FunctionComponent = () => {
  const [data, setData] = useState< ResponseData | undefined>(undefined);
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data: ResponseData = await result.json();

    setData(data);
    console.log(data)
  }
;
  useEffect(() => {
    fetchData();
  }, []);

  //各国のonClick設定の定義
  const onCountryClick = (country: Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID === country.ID
    );

    if (countryIndex > -1){
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);
      setActiveCountries(newActiveCountries)
    } else{
      setActiveCountries([...activeCountries, country]);
    }
  };

  return (
    <div>
      <Global styles={css`
        body{
          background-color: #d4e3f7;
          color: #191717;
        }

      `} />

      {activeCountries.map((aCountry) => (
        <span>{aCountry.Country}</span>
      ))}
      { data ? (
      <>
        <GlobalInfo
          newConfirmed ={data?.Global.NewConfirmed}
          newDeaths = {data?.Global.NewConfirmed}
          newRecovered = {data?.Global.NewRecovered}
        />
        <hr />
          {activeCountries.length ? (<BarChart countries= {activeCountries }/>):null}
          <CountryList
            countries={data.Countries}
            onItemClick={onCountryClick}
            />
        </>
      ) : ("Loading...")
      }

    </div>

  );
}

export default App;
