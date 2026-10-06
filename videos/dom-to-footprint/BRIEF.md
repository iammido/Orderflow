## DOM → MARKET ORDERS → FOOTPRINT

### Overall concept

Start with a clean DOM ladder and explain it visually before introducing any footprint chart.

The viewer should first understand:

- what DOM is
- where limit buyers are waiting
- where limit sellers are waiting
- where the current/LTP price is
- what happens when a market order enters
- how market orders consume resting limit orders
- how those completed transactions then appear in the footprint chart

The same price levels, quantities, and executions shown in DOM must later appear in the footprint.

Do not use random new numbers when switching to the footprint.

---

# SCENE 1 — INTRODUCE DOM

### Visual

Start on a dark background.

A vertical price ladder gradually appears in the center.

Initially show only the price column.

Example:

101.05  
101.00  
100.95  
100.90  
100.85  
100.80  
100.75

Then the left and right columns fade into view.

The full DOM becomes:

LIMIT BUYERS | PRICE | LIMIT SELLERS

Example:

             | 101.05 | 320
             | 101.00 | 220
             | 100.95 | 150
-------------| 100.90 |-------------
      180    | 100.85 |
      350    | 100.80 |
      620    | 100.75 |

Highlight the ladder subtly.

### Voiceover

“Before understanding how a footprint chart is built, we first need to understand the Depth of Market.”

Pause slightly.

“DOM shows us the orders that are currently waiting in the market.”

### Animation

Bring in the title:

**DEPTH OF MARKET**

Then reduce it to:

**DOM**

Underneath, briefly display:

**Orders waiting to trade**

Keep the DOM visible throughout.

---

# SCENE 2 — EXPLAIN THE PRICE LADDER

### Visual

Dim the buy and sell columns.

Highlight only the middle price column.

Animate a soft vertical glow moving along the ladder.

### Voiceover

“In the middle, we have the price ladder.”

“The market is continuously moving between these different price levels.”

### On-screen label

**PRICE**

Use a small pointer toward the middle column.

Do not add too much text.

---

# SCENE 3 — LIMIT SELLERS

Now highlight the right side of the DOM.

Fade the rest of the DOM slightly.

Example:

101.05 → 320  
101.00 → 220  
100.95 → 150

These should be above the current market.

### Voiceover

“Above the current price, we have sellers waiting to sell.”

“These are limit sell orders.”

“They are saying: sell my order if the market trades at this price.”

### Animation

Animate small horizontal bars behind the values.

For example:

101.05   ███████ 320

101.00   █████ 220

100.95   ███ 150

The size of the bar should correspond to the quantity.

Highlight:

**LIMIT SELLERS**

or

**RESTING SELL ORDERS**

Use a restrained sell-side colour.

---

# SCENE 4 — LIMIT BUYERS

Now shift focus smoothly to the left side.

Example:

180 ← 100.85  
350 ← 100.80  
620 ← 100.75

### Voiceover

“Below the current price, we have buyers waiting to buy.”

“These are limit buy orders.”

“They are waiting for sellers to trade into them.”

### Animation

Animate liquidity bars growing behind the buy quantities.

Highlight:

**LIMIT BUYERS**

or

**RESTING BUY ORDERS**

Again, keep the visual simple.

---

# SCENE 5 — IDENTIFY LTP / CURRENT TRADED PRICE

Bring the entire DOM back into focus.

Between the highest bid and lowest ask, highlight the most recently traded price.

Example:

101.00      220  
100.95      150  
--------------------
**100.90 ← LTP**
--------------------
180       100.85  
350       100.80

### Voiceover

“And this is the LTP — the last traded price.”

“It simply tells us the price where the most recent transaction happened.”

### Animation

Use a clear horizontal highlight across the LTP row.

Add a small label:

**LTP — LAST TRADED PRICE**

The highlight can pulse once and settle.

---

# SCENE 6 — SET UP A MARKET BUY ORDER

Now we move into the most important part.

Keep the DOM fully visible.

Use this simplified DOM:

BUYERS | PRICE | SELLERS

       | 101.05 | 300
       | 101.00 | 200
       | 100.95 | 100
-------| 100.90 |-------
  250  | 100.85 |
  400  | 100.80 |
  600  | 100.75 |

Current LTP:

100.90

Now introduce:

**MARKET BUY — 250**

### Voiceover

“Now imagine a trader sends a market buy order for 250 contracts.”

“A market order does not wait.”

“It wants to buy immediately at the best available prices.”

### Animation

Show a market-buy object or pulse entering from the left/bottom.

Label it:

**MARKET BUY: 250**

Do not use a cartoon arrow.

Use a clean animated block or pulse.

---

# SCENE 7 — MARKET BUY HITS LIMIT SELLERS

This needs to be very clear.

The best available sell order is:

100 contracts at 100.95.

So the market buy hits this level first.

### Animation — Step 1

Show:

MARKET BUY: 250

moving toward:

100.95 | 100 SELL

When it reaches that level:

100 SELL → 0

Market Buy remaining:

250 → 150

Flash the row briefly.

Move LTP:

100.90 → 100.95

### Voiceover

“The first available sellers are offering 100 contracts at 100.95.”

“So the market buyer consumes all 100 contracts.”

“Now 150 contracts are still left to buy.”

---

# SCENE 8 — MARKET BUY MOVES TO NEXT LEVEL

Next sell level:

101.00 | 200 SELL

The remaining market order is:

150

### Animation — Step 2

Move the remaining order upward.

MARKET BUY: 150

hits:

101.00 | 200 SELL

Animate:

200 → 50

Market Buy remaining:

150 → 0

LTP moves:

100.95 → 101.00

### Voiceover

“The remaining 150 contracts then move to the next available sellers at 101.”

“150 contracts are executed there.”

“The market buy is now completely filled.”

---

# SCENE 9 — EXPLAIN WHY PRICE MOVED

Pause the DOM.

The final state should now look like:

       | 101.05 | 300
       | 101.00 | 50
       | 100.95 | 0
-------| 101.00 | LTP
  250  | 100.85 |
  400  | 100.80 |
  600  | 100.75 |

### Voiceover

“This is how aggressive market orders interact with resting limit orders.”

“The market buyer had to consume liquidity at multiple price levels.”

“And because buyers kept lifting the available sell orders, the traded price moved higher.”

### On-screen message

**MARKET ORDERS CONSUME LIQUIDITY**

Then:

**PRICE MOVES TO THE NEXT AVAILABLE LEVEL**

Keep this brief.

---

# SCENE 10 — FREEZE THE EXECUTED TRADES

Now isolate the two executions that just happened.

Execution 1:

100 @ 100.95

Execution 2:

150 @ 101.00

Show these beside the DOM.

### Voiceover

“Now remember these two executions.”

“100 contracts traded at 100.95.”

“And 150 contracts traded at 101.”

“These trades have now happened.”

Important visual:

Everything else in the DOM dims.

Only the two executed trades remain strongly highlighted.

---

# SCENE 11 — TRANSITION DOM → FOOTPRINT

This transition is critical.

Do NOT hard cut.

The DOM price ladder should remain in exactly the same vertical position.

Keep the same price rows:

101.05  
101.00  
100.95  
100.90  
100.85

Gradually fade out the resting liquidity columns.

The central price ladder stays.

Then introduce two new columns around the same ladder:

BID | PRICE | ASK

or visually:

BID     ASK

### Voiceover

“And this is where the footprint comes in.”

“The DOM showed us the orders waiting to trade.”

“The footprint records what actually traded.”

---

# SCENE 12 — PRINT THE SAME EXECUTIONS INTO FOOTPRINT

Now use the exact two executions from the DOM.

Because these were MARKET BUY orders hitting resting sellers, the executed volume should print on the **Ask side** of the footprint.

For example:

BID | PRICE | ASK

  0 | 101.00 | 150
  0 | 100.95 | 100
    | 100.90 |
    | 100.85 |

Animate them one at a time.

First:

100 appears at 100.95 on the Ask side.

Then:

150 appears at 101.00 on the Ask side.

The numbers should appear exactly when the corresponding execution is replayed.

### Voiceover

“The 100 contracts bought at 100.95 are recorded here.”

“And the 150 contracts bought at 101 are recorded here.”

“Because the buyers were the aggressive side, these trades print on the Ask.”

---

# SCENE 13 — SHOW THE CONNECTION

Now briefly show DOM and footprint side by side.

Left:

DOM

Right:

Footprint

Highlight the same trades with connecting lines.

DOM execution:

100 @ 100.95

connects to:

Footprint Ask: 100

DOM execution:

150 @ 101.00

connects to:

Footprint Ask: 150

### Voiceover

“So these are not two separate things.”

“The DOM shows liquidity waiting to be executed.”

“And the footprint shows the result after those orders actually trade.”

---

# SCENE 14 — FINAL CONCEPT

Simplify the screen.

Show:

**DOM**

Resting Orders  
Before Execution

Then:

→ EXECUTION →

Then:

**FOOTPRINT**

Executed Orders  
After Execution

### Voiceover

“DOM shows what is waiting.”

“Market orders interact with that liquidity.”

“And the footprint records the transaction.”

Pause.

“That is how order flow moves from the order book into the footprint chart.”

---

# FINAL VISUAL

End with the footprint candle visible.

Inside it, retain the same:

100 at 100.95 Ask

150 at 101.00 Ask

Then subtly reveal:

**THIS IS HOW A FOOTPRINT IS BUILT.**

Below:

**ORDERFL0WTALKS**

Keep this frame long enough for the message to land.

---

# IMPORTANT ACCURACY RULES

The animation must preserve the following logic:

1. Limit sellers are resting above/current Ask side.
2. Limit buyers are resting below/current Bid side.
3. A market buy consumes resting SELL limit orders.
4. A market sell consumes resting BUY limit orders.
5. Market orders consume the best available price first.
6. If the market order is larger than available liquidity at that level, the remaining quantity moves to the next price level.
7. The executed volume then becomes footprint volume.
8. Aggressive buys print on the Ask side of the footprint.
9. Aggressive sells print on the Bid side.
10. The quantities shown in the footprint must exactly match the executions shown earlier in the DOM animation.

Do not generate unrelated footprint numbers after the DOM sequence.
