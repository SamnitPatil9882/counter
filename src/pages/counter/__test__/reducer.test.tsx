import { counterReducer } from "../reducers";

describe('counterReducer', () => {

  it('should handle INCREMENT action', () => {
    const initialState = { count: 5 };
    const action = { type: 'INCREMENT', payload: 5 };
    expect(counterReducer(initialState, action)).toEqual({ count: 10 });
  });

  it('should handle DECREMENT action', () => {
    const initialState = { count: 10 };
    const action = { type: 'DECREMENT', payload: 5 };
    expect(counterReducer(initialState, action)).toEqual({ count: 5 });
  });

  it('should handle SET_COUNTER action', () => {
    const initialState = { count: 0 };
    const action = { type: 'SET_COUNTER', payload: 5 };
    expect(counterReducer(initialState, action)).toEqual({ count: 5 });
  });


});
