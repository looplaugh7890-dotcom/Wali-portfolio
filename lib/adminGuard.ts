import { NextResponse } from 'next/server';
import { getSession, SessionPayload } from './auth';

export async function requireAdmin(): Promise<
  { session: SessionPayload; error: null } | { session: null; error: NextResponse }
> {
  const session = await getSession();
  if (!session) {
    return { session: null, error: NextResponse.json({ error: 'Not authenticated.' }, { status: 401 }) };
  }
  return { session, error: null };
}
