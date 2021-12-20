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
  Percent,
  BigintIsh,
} from "@uniswap/sdk";

function App() {
  console.log(ChainId, FACTORY_ADDRESS);

  //token 
  const TEST1 = new Token(
    ChainId.BAOBAB,
    "0x9aeccadcfcc18dfbf21a091f62471dc8bfd0ce16",
    18,
    "TEST1",
    "TEST1"
  );
  const TEST2 = new Token(
    ChainId.BAOBAB,
    "0xc8a1fba6a3cfc98109e5f923822a47bf6ff037c6",
    18,
    "TEST2",
    "TEST2"
  );
  const TEST3 = new Token(
    ChainId.BAOBAB,
    "0xd121e4008acd6ca6fc41d4e339e6b029e1e9bc78",
    18,
    "TEST3",
    "TEST3"
  );
  const TEST4 = new Token(
    ChainId.BAOBAB,
    "0x766d963cc36d56fd864da9af5581fcf7dbb99bd2",
    18,
    "TEST4",
    "TEST4"
  );
  const TEST5 = new Token(
    ChainId.BAOBAB,
    "0xbdf1e512d0140e45a62d7c3c3925b8b36cdeb11c",
    18,
    "TEST5",
    "TEST5"
  );
  const TEST6 = new Token(
    ChainId.BAOBAB,
    "0xbedd917a679f3b134017a8160205958f8084c205",
    18,
    "TEST6",
    "TEST6"
  );
  const TEST7 = new Token(
    ChainId.BAOBAB,
    "0x80a21b561853a903251186fed501b9df62ef39bb",
    18,
    "TEST7",
    "TEST7"
  );
  const TEST8 = new Token(
    ChainId.BAOBAB,
    "0x24b1cf3026b33e25b142f9fb92326e3f589d641b",
    18,
    "TEST8",
    "TEST8"
  );
  const TEST9 = new Token(
    ChainId.BAOBAB,
    "0x65bb640425879f0202a00feb8abd2415235f8935",
    18,
    "TEST9",
    "TEST9"
  );
  const TEST10 = new Token(
    ChainId.BAOBAB,
    "0xb3c057ccdb1ae994db3d15c281a21321a95362c6",
    18,
    "TEST10",
    "TEST10"
  );

  //Pair 
  const TEST1_TEST2 = new Pair(
    new TokenAmount(TEST1, "10000000000000000000000"), 
    new TokenAmount(TEST2, "10000000000000000000000")
  );
  const TEST3_TEST4 = new Pair(
    new TokenAmount(TEST3, "5000000000000000000000"),
    new TokenAmount(TEST4, "10000000000000000000000")
  );
  const TEST5_TEST6 = new Pair(
    new TokenAmount(TEST5, "2000000000000000000000"),
    new TokenAmount(TEST6, "10000000000000000000000")
  );
  const TEST7_TEST8 = new Pair(
    new TokenAmount(TEST7, "1000000000000000000000"),
    new TokenAmount(TEST8, "10000000000000000000000")
  );
  const TEST9_TEST10 = new Pair(
    new TokenAmount(TEST9, "7500000000000000000000"),
    new TokenAmount(TEST10, "10000000000000000000000")
  );


  const TEST2_TO_TEST1 = new Route([TEST1_TEST2], TEST2); //input:TEST2 output:TEST1 =>  const InputToken_TO_OutputToken = new Route([OutputToken_InputToken], InputToken);
  // const PairRouteName = new Route([PairName], selectedInput)

  const _bestTrade = Trade.bestTradeExactIn(
    [TEST1_TEST2], 
    new TokenAmount(TEST1, '10000000000000000000000'),
    TEST2, 
    { maxNumResults: 3, maxHops:3 }
  )

  console.log(_bestTrade,'_bestTrade');


  const trade = new Trade(
    TEST2_TO_TEST1, //PairRouteName
    new TokenAmount(TEST2, "1000000000000000"), //input 
    TradeType.EXACT_INPUT //lastModified === from 
  );

  console.log(trade,'trade');

  // const V2_SWAP_DEFAULT_SLIPPAGE = new Percent(5, 100) // .50%

  // if (trade instanceof Trade) return V2_SWAP_DEFAULT_SLIPPAGE
  return (
    <div className="App">
      <div>test !!</div>
    </div>
  );
}
export default App;
