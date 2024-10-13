import { connectDB } from '@/lib/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    firstName: String,
    lastName: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const newUser = new User(body);
        const savedUser = await newUser.save();
        return NextResponse.json({ message: 'User created successfully', userId: savedUser._id }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching users', error: error.message }, { status: 500 });
    }
}