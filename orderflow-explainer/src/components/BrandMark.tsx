import {brand} from '../config/content';import {theme as t} from '../config/theme';
export const BrandMark=()=> <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontSize:32,fontWeight:800,letterSpacing:2}}>{brand.name}</div><div style={{fontSize:23,letterSpacing:3,color:t.muted}}>{brand.subtitle}</div></div>;
