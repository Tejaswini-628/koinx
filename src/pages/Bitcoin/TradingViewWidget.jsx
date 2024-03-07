import React, { useEffect, useRef, useState } from 'react';

const TradingViewWidget = ({ symbol }) => {
  const container = useRef();
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": "D",
      "timezone": "Asia/Kolkata",
      "theme": "dark",
      "style": "2",
      "locale": "en",
      "enable_publishing": false,
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "hide_top_toolbar": true,
      "allow_symbol_change": true,
      "hide_legend": true,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com",
      "container_id": "tv_chart_container" // Added container_id to identify the container
    });
    container.current.appendChild(script);
    
    // Access the TradingView API after the script is loaded
    window.addEventListener('DOMContentLoaded', () => {
      const widget = window.TradingView.widget();
      widget.onChartReady(() => {
        // Use the API to get the current price
        const currentSymbol = widget.activeChart().symbol()
        const currentPrice = widget.activeChart().chart().createStudy('Moving Average', false, false, [1]).seriesPrices().close.slice(-1)[0];
        setCurrentPrice(currentPrice);
      });
    });
    
    return () => {
      container.current.innerHTML = ''; // Clean up when component unmounts
    }
  }, [symbol]);

  return (
    <div>
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" id="tv_chart_container" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      </div>
      {currentPrice && (
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold ">
          {currentPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default TradingViewWidget;
