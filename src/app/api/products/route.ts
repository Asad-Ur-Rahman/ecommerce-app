import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({message: "Hi"})
        
    } catch (error) {
        return NextResponse.json({message: "failed"})
    }
}