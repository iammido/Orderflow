import React from 'react';import {useCurrentFrame} from 'remotion';import {SceneTitle} from '../components';
export const Information=()=>{const f=useCurrentFrame();return <SceneTitle key={Math.floor(f/18)} lines={[f<18?'VOLUME.':f<36?'AGGRESSION.':'IMBALANCE.']} subtitle="THE TRADES BEHIND THE MOVE."/>};
