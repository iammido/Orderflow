import {theme as t} from '../config/theme';
export const LiquidityBar=({quantity,max,side}:{quantity:number;max:number;side:'bid'|'ask'})=><div style={{height:24,width:`${Math.max(0,quantity)/max*100}%`,background:side==='bid'?t.bid:t.ask,opacity:.25,position:'absolute',left:side==='ask'?0:undefined,right:side==='bid'?0:undefined,borderRadius:3}}/>;
