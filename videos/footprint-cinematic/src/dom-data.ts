import {imbalanceFootprintData} from './concept-data';
// Shared anchor: exactly the prices in the existing closing footprint.
// Bids are below asks: this is an uncrossed, illustrative resting order book.
export const domData=imbalanceFootprintData.map((r,i)=>({price:r.price,bidLiquidity:[0,0,0,1250,940,120,320][i],askLiquidity:[180,1100,900,0,0,0,0][i]}));
export const domTiming={transitionEnd:84,liquidity:174,execution:264,relationship:408,behaviour:486,teaser:576,end:636};
export const executionHits=[294,333,372];
export const executionSizes=[250,270,260];
