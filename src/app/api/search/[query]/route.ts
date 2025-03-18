import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		query: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const { query } = params

	return NextResponse.json({ query })
}
