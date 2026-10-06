Create a premium cinematic motion-graphics video in Remotion introducing **Orderflow Footprint Charts** for the Instagram page **Orderfl0wTalks**.

## FORMAT

- Resolution: 1080 × 1920
- Aspect ratio: 9:16 vertical Instagram Reel
- Duration: approximately 10 seconds
- Frame rate: 30 FPS
- Style: premium institutional trading / orderflow aesthetic
- Background: very dark navy-black
- Main colors:
  - Off-white text
  - Muted teal/cyan for buyers
  - Warm red/orange for sellers
  - Subtle amber highlights
- Avoid excessive neon, holographic interfaces or gaming-style graphics.
- Keep the design clean, sophisticated and professional.
- Use smooth motion with spring animations, easing, opacity fades and subtle camera movement.

The animation should visually explain the transition from a **normal candlestick chart** into an **orderflow footprint chart**.

---

# CORE HOOK

The main idea of the video is:

**“Candles show where price moved.  
Footprint shows what happened inside the candle.”**

Do not simply display this as static text.

The visual animation itself should communicate the idea.

---

# SCENE 1 — WHAT YOU NORMALLY SEE
### 0.0s – 2.2s

Start with a dark trading chart.

Show approximately 7–8 clean candlesticks appearing from left to right.

The final candle should be a large bullish candle.

Use a subtle grid in the background.

Animate price moving upward into the large bullish candle.

Camera subtly pushes toward this candle.

Display minimal text:

**YOU SEE THIS.**

Then underneath:

**PRICE MOVED UP.**

Typography should appear with a smooth fade/slide animation.

Keep the emphasis on the bullish candle.

---

# SCENE 2 — BUT WHAT HAPPENED INSIDE?
### 2.2s – 4.0s

Freeze the chart.

Dim all candles except the large bullish candle.

The selected candle becomes highlighted.

Slowly zoom toward it.

Display:

**BUT WHAT HAPPENED  
INSIDE THE CANDLE?**

Make “INSIDE” slightly emphasized.

As the camera approaches, make the body of the candlestick subtly expand horizontally.

Create the feeling that we are entering the candle.

---

# SCENE 3 — CANDLE TRANSFORMS INTO FOOTPRINT
### 4.0s – 7.2s

The candlestick splits open and smoothly morphs into a **Bid × Ask footprint candle**.

Create multiple horizontal price levels inside the candle.

Example structure:

      BID    ASK

      42  ×  118
      67  ×  194
      91  ×  260
     155  ×  438
     203  ×  517
     166  ×  292
      88  ×  121

Animate the numbers rapidly counting upward from zero.

The right-hand ASK numbers should subtly emphasize aggressive buying.

Animate small market-buy particles/arrows striking the Ask side.

Then briefly animate sell-market-order particles striking the Bid side.

Do NOT make it look like random Matrix numbers.

Numbers must remain aligned into clear footprint rows.

Add a thin horizontal volume bar behind each price level so larger traded volumes visually occupy more space.

The highest-volume row can receive a subtle amber highlight.

---

# SCENE 4 — REVEAL THE INFORMATION
### 7.2s – 9.0s

Pull the camera back slightly.

The footprint candle is now completely visible.

Show small labels appearing around it:

**BUYERS**

pointing toward the Ask column.

**SELLERS**

pointing toward the Bid column.

Then briefly introduce:

**VOLUME**

**AGGRESSION**

**IMBALANCE**

These should appear sequentially, not simultaneously.

Keep animations fast and refined.

The footprint numbers should continue making tiny updates so the chart feels alive.

---

# FINAL HOOK FRAME
### 9.0s – 10.0s

Fade the labels away.

Keep the footprint candle centered.

Display the main message:

**CANDLES SHOW  
WHERE PRICE MOVED.**

Quick transition.

Replace it with:

**FOOTPRINT SHOWS  
WHAT HAPPENED INSIDE.**

Make **FOOTPRINT** the visual emphasis.

At the bottom, very subtly display:

**ORDERFL0WTALKS**

No large logo animation.

End on the footprint chart so the final frame can transition naturally into the next educational section.

---

# OPTIONAL VOICEOVER

Use this voiceover timing:

0.0–2.3s:
“Candles tell you where price moved.”

2.3–4.2s:
“But they don't tell you what happened inside the candle.”

4.2–7.8s:
“That’s where the footprint chart comes in.”

7.8–10.0s:
“It shows you the battle between buyers and sellers.”

---

# MOTION DETAILS

Use Remotion-native animation wherever possible.

Use:

- `interpolate()`
- `spring()`
- `useCurrentFrame()`
- `Sequence`
- reusable React components

Avoid CSS animations that depend on browser timing.

Create reusable components such as:

- `Candlestick`
- `CandlestickChart`
- `FootprintCandle`
- `FootprintRow`
- `MarketOrderParticle`
- `VolumeBar`
- `AnimatedNumber`
- `CalloutLabel`
- `SceneTitle`

Make the footprint data configurable as a JavaScript array so numbers and volume values can easily be changed later.

Example:

```ts
const footprintData = [
  {price: 201.60, bid: 42, ask: 118},
  {price: 201.55, bid: 67, ask: 194},
  {price: 201.50, bid: 91, ask: 260},
  {price: 201.45, bid: 155, ask: 438},
  {price: 201.40, bid: 203, ask: 517},
  {price: 201.35, bid: 166, ask: 292},
  {price: 201.30, bid: 88, ask: 121},
];
```

The footprint chart must look structurally believable to traders.

Do not place Bid and Ask values randomly.

Bid must remain on the left.

Ask must remain on the right.

Use enough spacing that everything remains readable on a phone screen.

---

# IMPORTANT DESIGN RULE

Do not make this feel like a generic finance explainer.

The key visual moment is:

**NORMAL CANDLE → ZOOM INSIDE → FOOTPRINT DATA REVEALED**

That transformation should be the hero animation.

The viewer should understand within ten seconds that a footprint chart exposes information hidden inside an ordinary candlestick.

Make the source code modular so individual scenes, text, numbers, timing and colors can easily be edited later in Remotion Studio.
