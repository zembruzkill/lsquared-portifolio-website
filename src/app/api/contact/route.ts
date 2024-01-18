import { NextRequest, NextResponse } from 'next/server'
import { db } from '../../../../lib/db'

export async function POST(request: NextRequest) {
    const data = await request.json()

    console.log(data)

    return NextResponse.json(data, { status: 200 })
}
