import React from 'react';import {Series} from 'remotion';import {Hook} from './Hook';import {Book} from './Book';import {Execution} from './Execution';import {FootprintIntro} from './FootprintIntro';import {BuyAbsorption,SellAbsorption,AbsorptionSummary} from './Absorption';import {BuyerExhaustion,SellerExhaustion} from './Exhaustion';import {Comparison} from './Comparison';import {Final} from './Final';
export const Reel=()=> <Series>
<Series.Sequence name="Hook" durationInFrames={60}><Hook/></Series.Sequence>
<Series.Sequence name="Order Book" durationInFrames={120}><Book/></Series.Sequence>
<Series.Sequence name="Execution" durationInFrames={120}><Execution/></Series.Sequence>
<Series.Sequence name="Footprint and context" durationInFrames={210}><FootprintIntro/></Series.Sequence>
<Series.Sequence name="Buy absorption" durationInFrames={75}><BuyAbsorption/></Series.Sequence>
<Series.Sequence name="Sell absorption" durationInFrames={75}><SellAbsorption/></Series.Sequence>
<Series.Sequence name="Absorption takeaway" durationInFrames={60}><AbsorptionSummary/></Series.Sequence>
<Series.Sequence name="Buyer exhaustion" durationInFrames={150}><BuyerExhaustion/></Series.Sequence>
<Series.Sequence name="Seller exhaustion" durationInFrames={120}><SellerExhaustion/></Series.Sequence>
<Series.Sequence name="Comparison" durationInFrames={120}><Comparison/></Series.Sequence>
<Series.Sequence name="Final takeaway" durationInFrames={90}><Final/></Series.Sequence>
</Series>;
