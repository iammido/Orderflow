import React from 'react';import {Composition,Folder} from 'remotion';import {Reel} from './Reel';import {Hook} from './Hook';import {Book} from './Book';import {Execution} from './Execution';import {FootprintIntro} from './FootprintIntro';import {BuyAbsorption,SellAbsorption,AbsorptionSummary} from './Absorption';import {BuyerExhaustion,SellerExhaustion} from './Exhaustion';import {Comparison} from './Comparison';import {Final} from './Final';
export const Root=()=> <>
<Composition id="OrderflowReel" component={Reel} durationInFrames={1200} fps={30} width={1080} height={1920}/>
<Folder name="Scenes">
<Composition id="Hook" component={Hook} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="OrderBook" component={Book} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="Execution" component={Execution} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="Footprint" component={FootprintIntro} durationInFrames={210} fps={30} width={1080} height={1920}/>
<Composition id="BuyAbsorption" component={BuyAbsorption} durationInFrames={75} fps={30} width={1080} height={1920}/>
<Composition id="SellAbsorption" component={SellAbsorption} durationInFrames={75} fps={30} width={1080} height={1920}/>
<Composition id="AbsorptionSummary" component={AbsorptionSummary} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="BuyerExhaustion" component={BuyerExhaustion} durationInFrames={150} fps={30} width={1080} height={1920}/>
<Composition id="SellerExhaustion" component={SellerExhaustion} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="Comparison" component={Comparison} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="Final" component={Final} durationInFrames={90} fps={30} width={1080} height={1920}/>
</Folder></>;
