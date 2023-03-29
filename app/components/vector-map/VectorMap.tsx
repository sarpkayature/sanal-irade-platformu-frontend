'use client';

import { useReducer } from 'react';
import { VectorMapReducer, VectorMapInitialState } from './reducer/reducer';
import { VectorMap } from '@south-paw/react-vector-maps';
import classes from './VectorMap.module.scss';
import TurkeyMap from './constants/Turkey.json';

export function VectorMaps() {
  const [state, dispatch] = useReducer(
    VectorMapReducer,
    VectorMapInitialState,
    () => VectorMapInitialState
  );

  const { hovered } = state;

  const layerProps = {
    onMouseEnter: ({ target }: any) => {
      dispatch({
        type: 'HOVER',
        payload: {
          name: target!.attributes.name.value,
          id: target.attributes.id.value,
        },
      });
    },
    onMouseLeave: () =>
      dispatch({
        type: 'HOVER',
        payload: {
          name: 'None',
          id: 'None',
        },
      }),
    onFocus: ({ target }: any) =>
      dispatch({
        type: 'FOCUS',
        payload: {
          name: target.attributes.name.value,
          id: target.attributes.id.value,
        },
      }),
    onBlur: () =>
      dispatch({
        type: 'FOCUS',
        payload: {
          name: 'None',
          id: 'None',
        },
      }),
    onClick: ({ target }: any) =>
      dispatch({
        type: 'CLICK',
        payload: {
          name: target.attributes.name.value,
          id: target.attributes.id.value,
        },
      }),
  };

  return (
    <div className={classes['map-container']}>
      <VectorMap {...TurkeyMap} layerProps={layerProps} />
      {hovered.name !== 'None' && (
        <div className={classes['tooltip']}>
          <p>{hovered.name}</p>
        </div>
      )}
    </div>
  );
}
