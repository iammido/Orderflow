export const FPS=30;
export const sceneDurations={hook:2,orderBook:3,marketBuy:4,marketSell:3.5,footprintTransition:2.5,footprintExplanation:3.5,absorptionIntro:1.5,buyAbsorption:3,sellAbsorption:2.5,exhaustionIntro:1.5,buyerExhaustion:3,sellerExhaustion:2.5,comparison:3.5,finalSummary:4};
export type SceneKey=keyof typeof sceneDurations;
export const enabledScenes:Record<SceneKey,boolean>={hook:true,orderBook:true,marketBuy:true,marketSell:true,footprintTransition:true,footprintExplanation:true,absorptionIntro:true,buyAbsorption:true,sellAbsorption:true,exhaustionIntro:true,buyerExhaustion:true,sellerExhaustion:true,comparison:true,finalSummary:true};
export const sceneOrder=Object.keys(sceneDurations) as SceneKey[];
export const frames=(key:SceneKey,fps=FPS)=>Math.round(sceneDurations[key]*fps);
export const startFrame=(key:SceneKey,fps=FPS)=>sceneOrder.slice(0,sceneOrder.indexOf(key)).reduce((n,k)=>n+(enabledScenes[k]?frames(k,fps):0),0);
export const totalFrames=(fps=FPS)=>Math.max(1,sceneOrder.reduce((n,k)=>n+(enabledScenes[k]?frames(k,fps):0),0));
export const motion={revealSeconds:.32,pulseSeconds:.5,curve:[.16,1,.3,1] as const,absorptionProgress:[8,4,1,0]};
