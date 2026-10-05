import {theme as t} from '../config/theme';
export const ExecutionPulse=({strength=1,phase,color=t.ask}:{strength?:number;phase:number;color?:string})=><div style={{position:'absolute',inset:0,pointerEvents:'none',border:`${2+strength*2}px solid ${color}`,borderRadius:8,scale:1+phase*.07*strength,opacity:(1-phase)*strength}}/>;
