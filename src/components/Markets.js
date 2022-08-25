import DataTable from "react-data-table-component";
import { useEffect, useState } from "react"; 
import { useFetchApi } from "../customHooks/useFetchApi";
import { useSearchParams } from "react-router-dom";


const columns = [
  {
    name: "Market",
    selector: (row) => row.symbol,
    sortable: true,
  },
  {
    name: "BaseAsset",
    selector: (row) => row.baseAsset,
    sortable: true,
  },
  {
    name: "QuoteAsset",
    selector: (row) => row.quoteAsset,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
];


export function Markets() {
 const {symbol, price, error, loading} = useFetchApi()
  const [data, setData]= useState(symbol)
  const [searchedText, setSearchedText] = useState('');

  const [searchParams] = useSearchParams(); 
  const filterBaseAsset = searchParams.get('base_assets'); 
 
  let priceMap = price.reduce((acc, curr) => {
    acc[curr.symbol] = curr
    return acc; }, {});
    let combined = symbol.map(sign=> Object.assign(sign, priceMap[sign.symbol]))

  
  let money = combined?.filter((coin)=> coin.symbol?.toLowerCase().includes(searchedText.toLowerCase()))

  if(filterBaseAsset){
    money = money.filter((data)=> data.baseAsset === filterBaseAsset)
  }

  useEffect(()=>{
    setData(money)
  }, [money])


  return (
    <div className="App">
        {loading && <h2>Loading data...</h2>}
        {error && <h3>an error has occurred.</h3>}
        {data && <>
          <div className="search-bar--container">
              <input type="text" value={searchedText} onChange={(event) => setSearchedText(event.target.value)} placeholder="search..." className="search-bar"/></div>
              <DataTable columns={columns} data={data} pagination noDataComponent={<h2>Loading data...</h2>}/></>
        }


    </div>
  );
}

export default Markets;


