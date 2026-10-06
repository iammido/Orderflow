# Orderflow Footprint — cinematic introduction

Native Remotion project for Orderfl0wTalks. 1080×1920, 30 fps, 1182 frames / 39.4 seconds. Silent, following the previously chosen audio preference.

The opening reads “നിങ്ങൾ എല്ലാവരും candles കണ്ടിട്ടുണ്ട്”, set in local Noto Sans Malayalam. The next question is translated too, with “അകത്ത്” highlighted. The top eyebrow and opening subtitle are removed. The brand appears subtly only in the extended closing, as requested. The font's OFL license is included in `public/`.

## Preview and export

From this folder:

```powershell
.\remotion.cmd studio src/index.ts --no-open --port=3020
.\remotion.cmd render src/index.ts FootprintIntroduction out/orderflow-footprint-cinematic.mp4 --image-format=png --color-space=bt709 --concurrency=1 --crf=16
node node_modules/typescript/lib/tsc.js --noEmit
node verify.cjs
```

Studio: http://localhost:3020/FootprintIntroduction

## Edit

- `src/config.ts`: footprint data array, candlestick geometry, and color palette.
- `src/Root.tsx`: the main composition, scene placement, candle focus/expansion, and registered independent scene timelines. Its Zod schema exposes the footprint data in Studio controls.
- `src/scenes/`: opening, question, transformation, information, and closing typography.
- `src/components.tsx`: reusable Candlestick, CandlestickChart, FootprintCandle, FootprintRow, MarketOrderParticle, VolumeBar, AnimatedNumber, CalloutLabel, and SceneTitle.
- `src/concept-data.ts`: separate volumeFootprintData, aggressionFootprintData, and imbalanceFootprintData arrays.
- `src/concept-components.tsx`: ConceptTitle, FootprintExample, shared transition frame, and buy-pressure arrows.
- `src/scenes/VolumeFocus.tsx`, `AggressionFocus.tsx`, `ImbalanceFocus.tsx`, and `ConceptClosing.tsx`: independent editable later scenes.
- `src/dom-data.ts`: an uncrossed resting order book on the same prices as the existing closing footprint, execution sizes, and extension timings.
- `src/dom-components.tsx`: DOMLadder, DOMRow, LiquidityBar, LiquidityHighlight, MarketOrderPulse, ExecutionAnimation, and FootprintExecutionRow.
- `src/scenes/DOMExtension.tsx`: the continuous footprint-to-DOM expansion, liquidity demonstration, executions, relationship labels, and teaser.

Bid stays left and represents aggressive selling; Ask stays right and represents aggressive buying. Price levels descend from top to bottom. The highest-volume example row receives an amber accent. All motion is derived from Remotion's frame, interpolation, and springs; no browser-clock animation is used.

## Timing

0–2.2s: eight candlesticks appear; the final bullish candle is emphasized.

2.2–4s: the surrounding chart dims, and the selected candle moves toward the center and expands.

4–7.2s: the body opens into seven aligned footprint rows with counted volumes and short order-particle strikes.

7.2–10.2s: Volume, a fresh candle with growing bars/counts and one amber high-volume level.

10.2–13.2s: Aggression, a different Ask-dominant example with order strikes, flashes, and rapid value updates.

13.2–16.2s: Imbalance, a third example with boxes and brackets on two Ask = 12 × Bid levels.

16.2–18.2s: the existing closing idea over a clean footprint with a subtle ORDERFL0WTALKS tag. Concept scenes overlap the next scene by 12 frames for crossfades.

18.2–21s: the same footprint price levels move toward the center as resting BUY and SELL columns appear outside its recorded transactions. Both views coexist.

21–24s: DOM / Depth of Market, with controlled resting quantity updates.

24–27s: Liquidity bars build across the book, including a 120 vs 1,250 comparison in the existing ladder.

27–31.8s: market buys consume 250, 270, and 260 at 6038.25. Resting sell liquidity goes 900 → 650 → 380 → 120. The same fills add to its existing recorded Ask volume: 174 → 424 → 694 → 954. This preserves the prior footprint value while conserving executed quantities.

31.8–34.4s: DOM = orders waiting; Footprint = orders executed, with the live visualization retained.

34.4–37.4s: the remaining 120 trades at 6038.25, then price approaches the 1,100 cluster at 6038.50 and trades 450 into it. The cluster remains visible at 650; its recorded Ask volume grows from 408 to 858.

37.4–39.4s: a restrained teaser about changing liquidity, without introducing advanced order-book concepts.

The original 0–7.2s intro is retained as an untouched component inside the main timeline. The transition holds its last frame before fading into Volume. Seven reference frames (0, 50, 80, 119, 150, 205, 215) were compared as PNG bytes before and after: all are identical. See `out/intro-preservation.json`; run `node preserve-intro.cjs after` to repeat that comparison.

The subsequent DOM extension also preserves the entire existing 0–18.2s video as an unchanged component. Ten reference frames across all existing sections were compared byte-for-byte before and after: all are identical. See `out/existing-preservation.json`; run `node preserve-existing.cjs after` to repeat that comparison. DOM starts only after frame 545.

`BRIEF.md` preserves the original supplied request. Local font files were copied from this machine, with Noto Sans Malayalam included separately. `out/concept-stills/` and `out/concept-contact-sheet.jpg` contain inspected new scenes and transitions; `out/metadata.json` records the extended composition dimensions and timing. The render output is `out/orderflow-footprint-cinematic.mp4`.

DOM proof frames are in `out/dom-stills/`; `out/dom-contact-sheet.jpg` shows the bridge, depth, liquidity, executions, relationship, and behavior. Bid liquidity appears only below Ask liquidity, so the resting book is not crossed. All examples are illustrative.
