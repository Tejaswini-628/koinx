// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

export const H1 = () =>  {
    const container = useRef();

    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "60",
            "timezone": "Asia/Kolkata",
            "theme": "light",
            "style": "3",
            "locale": "en",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "hide_legend": true,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      },
      []
    );
  
    return (
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 132px)", width: "100%" }}></div>
      </div>
  );
}
