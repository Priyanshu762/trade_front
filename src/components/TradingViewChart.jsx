// import React, { useEffect, useRef } from 'react';

// const TradingViewChart = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       "width": "100%",
//       "height": "600",
//       // "autosize": true,
//       "symbol": "NASDAQ:AAPL",
//       "interval": "D",
//       "timezone": "Etc/UTC",
//       "theme": "Dark",
//       "style": "1",
//       "locale": "en",
//       "toolbar_bg": "#f1f3f6",
//       "enable_publishing": false,
//       "withdateranges": true,
//       "range": "YTD",
//       "hide_side_toolbar": false,
//       "allow_symbol_change": true,
//       "details": true,
//       "hotlist": true,
//       "calendar": true,
//       "show_popup_button": true,
//       "popup_width": "1000",
//       "popup_height": "650",
//       "container_id": "tradingview-widget-container"
//     });

//     containerRef.current.appendChild(script);

//     return () => {
//       containerRef.current.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="tradingview-widget-container" ref={containerRef}>
//       {/* Chart will be rendered here */}
//     </div>
//   );
// };

// export default TradingViewChart;


// TradingViewWidget.jsx
// TradingViewWidget.jsx




// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "NASDAQ:AAPL",
//         "interval": "5",
//         "timezone": "Etc/UTC",
//         "theme": "dark",
//         "style": "1",
//         "locale": "en",
//         "enable_publishing": false,
//         "gridColor": "rgba(0, 0, 0, 0.06)",
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;
//     container.current.appendChild(script);
    
//     // Clean up the script when the component unmounts
//     return () => {
//       container.current.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//       <div className="tradingview-widget-copyright">
       
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "5",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
    
    // Clean up the script when the component unmounts
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }} />
  );
}

export default memo(TradingViewWidget);
