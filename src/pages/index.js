'use client'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux/features/counterSlice';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Count: {count}</h1>
      <button onClick={() => dispatch(increment())} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">
        Decrement
      </button>
    </div>
  );
}
