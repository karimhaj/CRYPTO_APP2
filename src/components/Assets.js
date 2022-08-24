import DataTable from "react-data-table-component";
import { useEffect, useState } from "react"; 
import { useFetchApi } from "./useFetchApi";


const columns = [
  {
    name: "Base assets",
    selector: (row) => row.baseAsset,
    sortable: true,
  },
  {
    name: "Markets",
    selector: (row) => row.markets,
    sortable: true,
  }
];

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false



export function Assets() {
 const {symbol, error, loading} = useFetchApi()
 const [data, setData] = useState('')
 console.log(symbol)

//   const symbolReduced = symbol.reduce((current, next)=> { if (current.baseAsset === next.baseAsset){return next.baseAsset}})
//   console.log(symbolReduced)

useEffect(()=>{
    if (symbol) {
        const baseAssetObj = symbol.reduce((acc, next)=>{
            return {
                ...acc,
                [next.baseAsset]: acc[next.baseAsset] + 1 || 0 || 1,
            };
        }, {});
        console.log(baseAssetObj)

        const _data = Object.keys(baseAssetObj).map((key)=>({
            baseAsset: key,
            markets: baseAssetObj[key]
        }))
        setData(_data)

    }

},[symbol])

  return (
    <div className="App">
        {loading && <h3>Loading...</h3>}
        {error && <h3>an error has occurred.</h3>}
        {data && <>
              <DataTable columns={columns} data={data} pagination/></>
        }


    </div>
  );
}

export default Assets;

// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { Home } from "./Home";

// export function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

//commento