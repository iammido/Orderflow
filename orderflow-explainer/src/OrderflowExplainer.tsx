import {AbsoluteFill,Sequence,useVideoConfig} from 'remotion';
import {enabledScenes,frames,startFrame} from './config/timing';
import {HookScene} from './scenes/HookScene';
import {OrderBookScene} from './scenes/OrderBookScene';
import {MarketBuyScene} from './scenes/MarketBuyScene';
import {MarketSellScene} from './scenes/MarketSellScene';
import {FootprintTransitionScene} from './scenes/FootprintTransitionScene';
import {FootprintExplainerScene} from './scenes/FootprintExplainerScene';
import {AbsorptionIntroScene} from './scenes/AbsorptionIntroScene';
import {BuyAbsorptionScene} from './scenes/BuyAbsorptionScene';
import {SellAbsorptionScene} from './scenes/SellAbsorptionScene';
import {ExhaustionIntroScene} from './scenes/ExhaustionIntroScene';
import {BuyerExhaustionScene} from './scenes/BuyerExhaustionScene';
import {SellerExhaustionScene} from './scenes/SellerExhaustionScene';
import {AbsorptionVsExhaustionScene} from './scenes/AbsorptionVsExhaustionScene';
import {FinalSummaryScene} from './scenes/FinalSummaryScene';
export const OrderflowExplainer=()=>{const {fps}=useVideoConfig();return <AbsoluteFill>
{enabledScenes.hook&&<Sequence name="HookScene" from={startFrame('hook',fps)} durationInFrames={frames('hook',fps)}><HookScene/></Sequence>}
{enabledScenes.orderBook&&<Sequence name="OrderBookScene" from={startFrame('orderBook',fps)} durationInFrames={frames('orderBook',fps)}><OrderBookScene/></Sequence>}
{enabledScenes.marketBuy&&<Sequence name="MarketBuyScene" from={startFrame('marketBuy',fps)} durationInFrames={frames('marketBuy',fps)}><MarketBuyScene/></Sequence>}
{enabledScenes.marketSell&&<Sequence name="MarketSellScene" from={startFrame('marketSell',fps)} durationInFrames={frames('marketSell',fps)}><MarketSellScene/></Sequence>}
{enabledScenes.footprintTransition&&<Sequence name="FootprintTransitionScene" from={startFrame('footprintTransition',fps)} durationInFrames={frames('footprintTransition',fps)}><FootprintTransitionScene/></Sequence>}
{enabledScenes.footprintExplanation&&<Sequence name="FootprintExplainerScene" from={startFrame('footprintExplanation',fps)} durationInFrames={frames('footprintExplanation',fps)}><FootprintExplainerScene/></Sequence>}
{enabledScenes.absorptionIntro&&<Sequence name="AbsorptionIntroScene" from={startFrame('absorptionIntro',fps)} durationInFrames={frames('absorptionIntro',fps)}><AbsorptionIntroScene/></Sequence>}
{enabledScenes.buyAbsorption&&<Sequence name="BuyAbsorptionScene" from={startFrame('buyAbsorption',fps)} durationInFrames={frames('buyAbsorption',fps)}><BuyAbsorptionScene/></Sequence>}
{enabledScenes.sellAbsorption&&<Sequence name="SellAbsorptionScene" from={startFrame('sellAbsorption',fps)} durationInFrames={frames('sellAbsorption',fps)}><SellAbsorptionScene/></Sequence>}
{enabledScenes.exhaustionIntro&&<Sequence name="ExhaustionIntroScene" from={startFrame('exhaustionIntro',fps)} durationInFrames={frames('exhaustionIntro',fps)}><ExhaustionIntroScene/></Sequence>}
{enabledScenes.buyerExhaustion&&<Sequence name="BuyerExhaustionScene" from={startFrame('buyerExhaustion',fps)} durationInFrames={frames('buyerExhaustion',fps)}><BuyerExhaustionScene/></Sequence>}
{enabledScenes.sellerExhaustion&&<Sequence name="SellerExhaustionScene" from={startFrame('sellerExhaustion',fps)} durationInFrames={frames('sellerExhaustion',fps)}><SellerExhaustionScene/></Sequence>}
{enabledScenes.comparison&&<Sequence name="AbsorptionVsExhaustionScene" from={startFrame('comparison',fps)} durationInFrames={frames('comparison',fps)}><AbsorptionVsExhaustionScene/></Sequence>}
{enabledScenes.finalSummary&&<Sequence name="FinalSummaryScene" from={startFrame('finalSummary',fps)} durationInFrames={frames('finalSummary',fps)}><FinalSummaryScene/></Sequence>}
</AbsoluteFill>};

