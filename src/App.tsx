import React, { useMemo } from "react";
import "./App.css";
import {
  ChainId,
  FACTORY_ADDRESS,
  Token,
  Pair,
  Route,
  Trade,
  TradeType,
  TokenAmount,
} from "@uniswap/sdk";

function App() {
  console.log(ChainId, FACTORY_ADDRESS);

  const TEST1 = new Token(
    ChainId.BAOBAB,
    "0x9aeccadcfcc18dfbf21a091f62471dc8bfd0ce16",
    18,
    "TEST1",
    "TEST1"
  );
  console.log(TEST1);
  const HOT = new Token(
    ChainId.BAOBAB,
    "0xc0FFee0000000000000000000000000000000000",
    18,
    "HOT",
    "Caffeine"
  );
  const NOT = new Token(
    ChainId.BAOBAB,
    "0xDeCAf00000000000000000000000000000000000",
    18,
    "NOT",
    "Caffeine"
  );
  const HOT_NOT = new Pair(
    new TokenAmount(HOT, "2000000000000000000"),
    new TokenAmount(NOT, "1000000000000000000")
  );
  const NOT_TO_HOT = new Route([HOT_NOT], NOT);

  const trade = new Trade(
    NOT_TO_HOT,
    new TokenAmount(NOT, "1000000000000000"),
    TradeType.EXACT_INPUT
  );
  console.log(trade.route);

  return (
    <div className="App">
      <div>test !!</div>
    </div>
  );
}
export default App;
