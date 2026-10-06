# DOM → Market Orders → Footprint

Separate native Remotion video for Orderfl0wTalks. Silent text and animation, as requested. 1080×1920, 30 fps, 2,280 frames / 76 seconds.

## Open and render

```powershell
.\remotion.cmd studio src/index.ts --no-open --port=3030
.\remotion.cmd render src/index.ts DOMToFootprint out/DOM-Market-Orders-Footprint.mp4 --image-format=png --color-space=bt709 --concurrency=1 --crf=16
node node_modules/typescript/lib/tsc.js --noEmit
node verify.cjs
```

Studio: http://localhost:3030/DOMToFootprint

## Source

- `src/model.ts`: initial book, simplified execution book, two execution events, replay times, LTP, remaining order quantity, and footprint volumes. The replay reads the original execution objects; it does not generate another dataset.
- `src/ladder.tsx`: shared price ladder, DOM liquidity bars, footprint recording layer, side-by-side comparison, and connecting lines.
- `src/graphics.tsx`: scene titles, market-order block, frozen trade cards, and replay packets.
- `src/scenes.tsx`: chapter captions and explanations.
- `src/Root.tsx`: fifteen authored timeline sequences, including the final hold. Brand is editable in Studio controls.
- `src/execution-views.tsx`: the replacement Scenes 10–14, with a persistent left DOM, separate right footprint candle, curved execution chips and trails, timed Ask recording, connector paths, and final teaching hold.

Scenes 1–9 remain unchanged. From Scene 10 onward, the DOM stays visible on the left and a separate footprint candle appears on the right. Both share exactly aligned price levels. There is no DOM-to-footprint morph. Bid × Ask values are enclosed by the candle body, with a wick and subtle active-row shading.

Only the executed quantity chips detach from the DOM execution badges; the DOM rows and remaining quantities stay in place. The chips follow curved paths with restrained trails, then stamp/count into the matching Ask row. The original execution objects supply their prices and quantities. The footprint remains empty until each corresponding chip lands.

## Execution accuracy

A 250-contract market buy first takes all 100 available at 100.95. There are 150 left to buy, and LTP becomes 100.95. It then takes 150 from the 200 available at 101.00, leaving 50 sellers there. The market buy is filled and LTP becomes 101.00.

The footprint prints exactly 100 on Ask at 100.95 and 150 on Ask at 101.00. Bid execution volume is zero because this example demonstrates only aggressive buys. The final footprint retains those same quantities.

The opening book quantities change once at the clearly labeled simplified example, following the brief's two supplied DOM snapshots. No further unrelated book or footprint numbers are introduced. Price levels are never duplicated to show LTP; the marker moves to the existing row.

`out/execution-check.json` verifies both fills, LTP changes, sell quantities, and conservation of the 250-contract order. `out/transfer-check.json` verifies that each Ask row is empty before landing and records exactly its source execution quantity afterward. `out/scenes-1-to-9-preservation.json` confirms nine reference frames are byte-identical after replacement. `out/revised-stills/` and `out/revised-proof.jpg` show inspected transfer, impact, connector and final frames. `out/metadata.json` records the format.

## Timeline

0–42s: unchanged Scenes 1–9 (DOM, price, limit orders, LTP, market buy, both fills, and why price moved).

42–47s: DOM and an empty footprint candle together.

47–59s: transfer and record the 100 and 150 execution chips, one at a time.

59–64s: reveal the completed candle record.

64–70s: connect each exact DOM execution to its corresponding Ask print.

70–76s: final teaching frame, with both views visible and a subtle brand tag.

`BRIEF.md` preserves the supplied request. Local font files are included. The previous cinematic project and its saved MP4 are not modified by this project.
