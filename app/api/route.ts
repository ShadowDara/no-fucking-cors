// app/api/proxy/route.ts
import { NextRequest } from 'next/server'

const cache = new Map<string, { data: ArrayBuffer, contentType: string, expiresAt: number }>()
const CACHE_TTL = 900 * 1000

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const target = searchParams.get('url')

  if (!target) {
    return new Response(JSON.stringify({ error: 'Missing url param' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const cached = cache.get(target)
  const now = Date.now()
  if (cached && cached.expiresAt > now) {
    console.log(`[CACHE HIT] ${target}`)
    return new Response(cached.data, {
      status: 200,
      headers: { 'Content-Type': cached.contentType },
    })
  }

  try {
    console.log(`[CACHE MISS] Fetching ${target}`)
    const response = await fetch(target)
    const contentType = response.headers.get('content-type') || 'text/plain'
    const data = await response.arrayBuffer()

    cache.set(target, {
      data,
      contentType,
      expiresAt: now + CACHE_TTL,
    })

    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
      },
    })
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
