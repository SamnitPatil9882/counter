import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Decrement, Increment } from './actions';

const Counter1 = () => {
   const { count } = useSelector((state: RootState) => ({
      count: state.count 
   }));
   const dispatch = useDispatch();
  
   return (
      <div>
         Counter
         <div>Count: {count} </div>
         <div>
            <button onClick={() => { dispatch(Increment(5)) }}>Increment</button>
            <button onClick={() => { dispatch(Decrement(5)) }}>Decrement</button>
         </div>
      </div>
   );
}

export default Counter1;
