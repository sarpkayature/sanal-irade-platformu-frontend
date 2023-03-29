'use client';

type VectorMapAction = {
  type: 'HOVER' | 'FOCUS' | 'CLICK';
  payload: {
    name: string;
    id: string;
  };
};

export const VectorMapInitialState = {
  hovered: {
    name: 'None',
    id: 'None',
  },
  focused: {
    name: 'None',
    id: 'None',
  },
  clicked: {
    name: 'None',
    id: 'None',
  },
};

export const VectorMapReducer = (state = VectorMapInitialState, action: VectorMapAction) => {
  switch (action.type) {
    case 'HOVER':
      return { ...state, hovered: action.payload };
    case 'FOCUS':
      return { ...state, focused: action.payload };
    case 'CLICK':
      return { ...state, clicked: action.payload };
    default:
      return state;
  }
};
