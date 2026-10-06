# Remotion teaching videos

| Video | Editable project | Latest MP4 |
|---|---|---|
| Candlestick → Footprint → DOM → Liquidity | [footprint-cinematic](footprint-cinematic/README.md) | [39.4-second MP4](exports/Orderfl0wTalks-Footprint-DOM-Liquidity.mp4) |
| DOM → Market orders → Footprint candle | [dom-to-footprint](dom-to-footprint/README.md) | [76-second MP4](exports/Orderfl0wTalks-DOM-Footprint-Candle-v2.mp4) |

Both are silent 1080×1920 videos at 30 fps. Projects are independent from the existing repository videos.

From the repository root:

```powershell
cd videos/footprint-cinematic
npm install
npm start
```

For the second project, use `videos/dom-to-footprint` instead. Their Studio ports are 3020 and 3030.

The install script copies Segoe UI / Consolas assets from the user's installed Windows fonts; those machine-specific binaries are excluded from Git. To use another licensed font directory, set `ORDERFLOW_FONT_DIR` before installing. Noto Sans Malayalam and its OFL license are included in the cinematic project.

Verification reports are in [verification](verification/). Browser paths in verification scripts can be configured with `REMOTION_BROWSER_EXECUTABLE`; otherwise Remotion chooses its browser. Render commands in each project's package scripts use Remotion's default browser selection.
