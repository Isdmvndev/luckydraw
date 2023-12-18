export type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };
export const counterReducer = (state:boolean,action: CounterAction): boolean => {
  switch (action.type) {
    case 'INCREMENT':
      return true;
    case 'DECREMENT':
      return false;
    default:
      return false;
  }
};
