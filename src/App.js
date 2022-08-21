import DataTable from "react-data-table-component";
import useSWR from "swr";

const columns = [
  {
    name: "Nome Mercato",
    selector: (row) => row.symbol,
    sortable: true,
  },
  {
    name: "BaseAsset",
    selector: (row) => row.baseAsset,
  },
  {
    name: "QuoteAsset",
    selector: (row) => row.quoteAsset,
  },
  {
    name: "Prezzo",
    selector: (row) => row.current_price,
  },
];

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false

const urlCrypto = "https://api.binance.com/api/v3/exchangeInfo";
const urlPrice = "https://api.binance.com/api/v3/ticker/price";

// .then(result=> console.log(result))
// .then(data => data.map(item=> ({
// id: item.id,
// symbol: item.current_price,
// year: item.year})))

const fetcher = (url) => fetch(url).then((response) => response.json());

export function App() {
  const { data } = useSWR(urlCrypto, fetcher);

  return (
    <div className="App">
      <DataTable columns={columns} data={data?.symbols} />
    </div>
  );
}

export default App;

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
