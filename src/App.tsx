import { useEffect, useState } from "react";

// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2021-09-17T12:43:28.273Z"
// ID: "9e0b0fe0-0a4e-4f19-bece-4c94d8741751"
// NewConfirmed: 0
// NewDeaths: 0
// NewRecovered: 0
// Premium: {}
// Slug: "afghanistan"
// TotalConfirmed: 154361
// TotalDeaths: 7183
// TotalRecovered: 0


type Country = {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecoverd: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecoverd: number;
}

type GlobalData = {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}


type ResponseData = {
     Countries: Country[];
     Date: string;
     Global: GlobalData;
     ID: string;
     Message: string;

};



const App: React.FunctionComponent = () => {
  const [data, setData] = useState< ResponseData | undefined>(undefined);

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

  return (
    <div>
      <h1>コロナウイルス感染状況データ</h1>

    </div>

  );
}

export default App;
