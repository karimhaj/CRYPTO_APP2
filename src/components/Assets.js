import DataTable from "react-data-table-component";
import { useEffect, useState } from "react"; 
import { useFetchApi } from "../customHooks/useFetchApi";
import { Link } from 'react-router-dom'

const columns = [
  {
    name: "Base assets",
    selector: (row) =>(
      <Link className="nav-link2" to={`/markets?base_assets=${row.baseAsset}`}>
    {row.baseAsset}
      </Link>),
    sortable: true,
  },
  {
    name: "Markets",
    selector: (row) => row.markets,
    sortable: true,
  }
];

export function Assets() {
 const {symbol, error, loading} = useFetchApi()
 const [data, setData] = useState('')
 console.log(symbol)


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
        {loading && <h2>Loading data...</h2>}
        {error && <h3>an error has occurred.</h3>}
        {data && <>
              <DataTable columns={columns} data={data} pagination noDataComponent={<h2>Loading data...</h2>}/></>
        }


    </div>
  );
}

export default Assets;
