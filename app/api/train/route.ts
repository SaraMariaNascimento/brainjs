import { NextResponse } from 'next/server';
import { trainXor } from '@/app/lib/neural';

export async function GET() {
  const results = trainXor();
  return NextResponse.json(results);
}
