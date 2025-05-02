'use server'

import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from "../../lib/prisma";
import jwt from 'jsonwebtoken';


const SECRETKEY = process.env.SECRET_TOKEN_KEY;




export async function POST(req) {

    const formData = await req.formData();
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');


    if (!email || !password || !username) {
        return NextResponse.json({ status: "Missing Fields" });
    }

    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-internal-secret': process.env.SERVER_KEY,
        };

        const usersRes = await fetch('http://localhost:3000/api/database/getusers', {
            method: 'GET',
            headers: headers,
        });

        if (!usersRes.ok) {
            return NextResponse.json({ status: "Failed to fetch users" }, { status: 500 });
        }


        const users = await usersRes.json();


        const existingUser = users.find(user => user.email === email || user.username === username);
        if (existingUser) {
            if (existingUser.email === email) {
                return NextResponse.json({ status: "User already has an account" });
            }
            if (existingUser.username === username) {
                return NextResponse.json({ status: "User already has this username" });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            email,
            username,
            password: hashedPassword,
        };
        await prisma.user.create({ data: newUser });
        const token = jwt.sign({ email: newUser.email, username: newUser.username }, SECRETKEY)
        return NextResponse.json({ status: "Successfully created user",
            token: token
         });

    } catch (err) {
        console.error(err)
        return NextResponse.json({ status: "401 - Error fetching users or processing request" });
    }
}