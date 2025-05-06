'use server';
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET(req) {
  const secretKey = process.env.SERVER_KEY;
  const requestKey = req.headers.get('x-internal-secret');

  if (requestKey !== secretKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}