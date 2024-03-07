import React from "react";
import { H24 } from "./Tradingviewwidget/H24";
import { H1 } from "./Tradingviewwidget/H1";
import { W1 } from "./Tradingviewwidget/W1";
import { Y1 } from "./Tradingviewwidget/Y1";
import { M1 } from "./Tradingviewwidget/M1";

const GraphContent = ({ period }) => {
  switch (period) {
    case "1H":
      return <H1 />;
    case "24H":
      return <H24 />;
    case "7D":
      return <W1 />;
    case "1M":
      return <M1 />;
    case "1Y":
      return <Y1 />;
    case "ALL":
      return <Y1 />;
    default:
      return null;
  }
};

export default GraphContent;
