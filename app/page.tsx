'use client';
import { useState } from 'react';

export default function Home() {
  const [results, setResults] = useState<Record<string, number> | null>(null);

  async function treinar() {
    const res = await fetch('/api/train');
    setResults(await res.json());
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Brain.js + Next.js</h1>
      <button onClick={treinar}>Treinar XOR</button>
      {results && (
        <pre>{JSON.stringify(results, null, 2)}</pre>
      )}
    </main>
  );
}
