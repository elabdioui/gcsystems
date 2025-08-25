'use client';

import { useEffect, useRef, useState } from 'react';

interface StatProps {
  number: string;
  label: string;
  index: number;
}

export default function AnimatedStat({ number, label, index }: StatProps) {
  const [count, setCount] = useState(number); // Start with final value
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation logic here
  }, [number]);

  return (
    <div ref={elementRef}>
      <div className="text-4xl font-bold mb-2">{count}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}