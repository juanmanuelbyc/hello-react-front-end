import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './greetingSlice';

export const Greeting = () =>  {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>{message}</h1>
        <button
          type="button"
          aria-label="Update message"
          onClick={() => dispatch(fetchGreeting())}
        >
          Update
        </button>
      </div>
    </div>
  );
};
