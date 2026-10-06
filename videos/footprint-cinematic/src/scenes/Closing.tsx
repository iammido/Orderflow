import React from 'react';import {useCurrentFrame} from 'remotion';import {SceneTitle} from '../components';
export const Closing=()=>{const f=useCurrentFrame();return f<27?<SceneTitle lines={['CANDLES SHOW','WHERE PRICE MOVED.']}/>:<SceneTitle key="footprint" lines={['FOOTPRINT SHOWS','WHAT HAPPENED','INSIDE.']} emphasis="FOOTPRINT SHOWS"/>};
