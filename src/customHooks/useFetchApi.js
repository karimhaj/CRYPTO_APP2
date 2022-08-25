import { useState, useEffect } from "react";

export function useFetchApi(){
    const [symbol, setSymbol] = useState([])
    const [price, setPrice] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const urlCrypto = "https://api.binance.com/api/v3/exchangeInfo";
    const url2 = 'https://api.binance.com/api/v3/ticker/price'

    const symbolData = async function fetcher(){
        setLoading(true)
        setError(false)
        try {
        const fetchSymbols = await fetch(urlCrypto)
        const symbolsJson = await fetchSymbols.json()
        setSymbol(symbolsJson.symbols)
        }
        catch(e){
            setError(e)
        }
        finally{
            setLoading(false)
        }
      }

      const priceData = async function fetcher2(){
        setLoading(true)
        setError(false)
        try{const fetchPrice = await fetch(url2)
        const priceJson = await fetchPrice.json()
        setPrice(priceJson);
        }
        catch(e){
            setError(e)
        }
        finally{
            setLoading(false)
        }
      }

      useEffect(()=>{
        symbolData()
        priceData()
      }, [])

      return { symbol, price, error, loading }

}