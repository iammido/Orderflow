# OrderflowExplainer — @Orderfl0wTalks

Native Remotion React/TypeScript project. 1080 × 1920, 30 fps, 40 seconds. No narration or music. No HTML or MP4 export is included.

## Start

```bash
npm install
npx remotion studio --no-open
```

Select `OrderflowExplainer`, or any composition in `Independent-Scenes`. Run `npm run typecheck` for TypeScript validation.

## Edit

- `src/config/theme.ts`: colors, safe area, typography, cell sizes.
- `src/config/content.ts`: brand, headings, labels.
- `src/config/data.ts`: prices, liquidity, exact executions, footprint volumes.
- `src/config/timing.ts`: scene durations in seconds, enable/disable toggles. Timeline positions and total duration automatically follow this file.
- `src/scenes/`: independently editable scene components, registered as standalone compositions.
- `src/components/`: reusable React elements with data supplied via props.

All motion follows the Remotion frame. There are no GSAP, CSS transitions, timers or browser animation loops.

Trading data are synthetic. The sell execution uses a separate book snapshot. Footprints aggregate executions across snapshots, not the initial DOM quantities. Passive absorption is inferred from aggressive transactions and limited price progress. Neither absorption nor exhaustion guarantees reversal.

