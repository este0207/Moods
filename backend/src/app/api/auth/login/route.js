

'use server';

import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req) {

  const formData = await req.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  

  if (!email || !password) {
    return NextResponse.json({ status: "Email or Password is missing" });
  }

  try {
    const headers = {
      "Content-Type": "application/json",
      "x-internal-secret": process.env.SERVER_KEY,
    };

    const usersRes = await fetch(
      "http://localhost:3000/api/database/getusers",
      {
        method: "GET",
        headers,
      }
    );

    if (!usersRes.ok) {
      return NextResponse.json({ status: "Failed to fetch users" }, { status: 500 });
    }

    const users = await usersRes.json();

    for (const user of users) {
      if (user.email === email) {
        const match = await bcrypt.compare(password, user.password);

        if (match) {
          return NextResponse.json({ status: "Valid"
           });
        } else {
          return NextResponse.json({ status: "Not Valid" });
        }
      }
    }
    return NextResponse.json({ status: "401 - user not found" });
  } catch (err) {
    return NextResponse.json({ status: "401 - Error fetching users or processing request" });
  }
}