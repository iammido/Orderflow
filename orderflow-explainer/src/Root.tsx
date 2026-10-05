import {Composition,Folder} from 'remotion';
import {FPS,frames,totalFrames} from './config/timing';
import {OrderflowExplainer} from './OrderflowExplainer';
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
export const Root=()=> <>
<Composition id="OrderflowExplainer" component={OrderflowExplainer} width={1080} height={1920} fps={FPS} durationInFrames={totalFrames()} calculateMetadata={()=>({durationInFrames:totalFrames()})}/>
<Folder name="Independent-Scenes">
<Composition id="HookScene" component={HookScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('hook')}/>
<Composition id="OrderBookScene" component={OrderBookScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('orderBook')}/>
<Composition id="MarketBuyScene" component={MarketBuyScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('marketBuy')}/>
<Composition id="MarketSellScene" component={MarketSellScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('marketSell')}/>
<Composition id="FootprintTransitionScene" component={FootprintTransitionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('footprintTransition')}/>
<Composition id="FootprintExplainerScene" component={FootprintExplainerScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('footprintExplanation')}/>
<Composition id="AbsorptionIntroScene" component={AbsorptionIntroScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('absorptionIntro')}/>
<Composition id="BuyAbsorptionScene" component={BuyAbsorptionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('buyAbsorption')}/>
<Composition id="SellAbsorptionScene" component={SellAbsorptionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('sellAbsorption')}/>
<Composition id="ExhaustionIntroScene" component={ExhaustionIntroScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('exhaustionIntro')}/>
<Composition id="BuyerExhaustionScene" component={BuyerExhaustionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('buyerExhaustion')}/>
<Composition id="SellerExhaustionScene" component={SellerExhaustionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('sellerExhaustion')}/>
<Composition id="AbsorptionVsExhaustionScene" component={AbsorptionVsExhaustionScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('comparison')}/>
<Composition id="FinalSummaryScene" component={FinalSummaryScene} width={1080} height={1920} fps={FPS} durationInFrames={frames('finalSummary')}/>
</Folder></>;

