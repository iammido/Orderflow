export const brand={name:'@Orderfl0wTalks',subtitle:'ORDER FLOW EDUCATION'};
export const content={
 hook:{section:'THE ORDER FLOW SERIES',title:'What actually moves price?',subtitle:'ORDER BOOK → EXECUTION → FOOTPRINT'},
 orderBook:{section:'01 / DEPTH OF MARKET',title:'Orders waiting.',subtitle:'Bid = limit buys. Ask = limit sells.'},
 marketBuy:{section:'02 / MARKET BUY',title:'Buyers take the ask.',subtitle:'Aggressive buyers consume limit sell liquidity.'},
 marketSell:{section:'03 / MARKET SELL',title:'Sellers take the bid.',subtitle:'A separate book snapshot. Aggressive sellers consume limit buys.'},
 footprintTransition:{section:'04 / SAME TRADES',title:'From book to footprint.',subtitle:'Executions travel to their matching price and side.'},
 footprintExplanation:{section:'05 / FOOTPRINT',title:'Trades executed.',subtitle:'LEFT: market sells. RIGHT: market buys.'},
 absorptionIntro:{section:'06 / READ THE RESPONSE',title:'Absorption.',subtitle:'High aggression. Little price progress.'},
 buyAbsorption:{section:'07 / POSSIBLE BUY ABSORPTION',title:'Heavy buying. Price stalls.',subtitle:'High ask volume + little upward progress.'},
 sellAbsorption:{section:'08 / POSSIBLE SELL ABSORPTION',title:'Heavy selling. Price stalls.',subtitle:'High bid volume + little downward progress.'},
 exhaustionIntro:{section:'09 / THE OPPOSITE',title:'Exhaustion.',subtitle:'Price progresses. Aggression fades.'},
 buyerExhaustion:{section:'10 / POSSIBLE BUYER EXHAUSTION',title:'Higher prices. Less buying.',subtitle:'Price extends while ask-side aggression declines.'},
 sellerExhaustion:{section:'11 / POSSIBLE SELLER EXHAUSTION',title:'Lower prices. Less selling.',subtitle:'Price extends while bid-side aggression declines.'},
 comparison:{section:'12 / TWO DIFFERENT STORIES',title:'Know the difference.',subtitle:'Context matters. Neither guarantees a reversal.'},
 finalSummary:{section:'THE TAKEAWAY',title:'Don’t just read volume.',subtitle:'Read how price responds to it.'},
};
export const labels={bid:'BID',ask:'ASK',price:'PRICE',waiting:'RESTING LIQUIDITY · NO TRADE YET',filled:'FILLED',remaining:'REMAINING',recorded:'EXECUTED VOLUME · BID × ASK',context:'VOLUME + PRICE RESPONSE = CONTEXT',passiveSell:'Passive sellers may be absorbing buyers.',passiveBuy:'Passive buyers may be absorbing sellers.',inferred:'Passive participation is inferred—not directly displayed.',buyerFading:'Buyers may be running out.',sellerFading:'Sellers may be running out.',possible:'Possible—not a guaranteed reversal.',absorption:'AGGRESSION CONTINUES. PRICE DOESN’T.',exhaustion:'PRICE CONTINUES. AGGRESSION FADES.',final:'Volume shows aggression. Price response gives it context.',follow:'Follow for more Order Flow concepts'};
