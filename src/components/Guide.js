export function Guide(){
    return(
        <>
        <div className="top-container">
        <h1 className="page-title">Crypto App Guide </h1>
        </div>
        <br/>
        <span className="guide-intro-subtitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16"> <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/> </svg>
        <h2>Introduction</h2>
        </span>
        <p className="guide-intro-p">This website has two main pages:
        <br/>
        <b>- Assets</b>
        <br/>
        <b>- Markets</b>
        <br/>
        <br/>
        each page has one data table that shows data of Cryptovalues, 
        in the Markets' table there are markets, base assets, quote assets and prices.
        when we look at the assets page we can see all the base assets and the number of 
        markets in the markets table. 
        <br/>
        <br/>
        The asset page can filter the markets' data. 
        By clicking on one of the base assets you will be able to see only the markets that are aligned with the chosen base asset.
        </p>
        </>
    )
}