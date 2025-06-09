import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // Log detailed request information
    console.log('Request details:', {
      url: event.request.url,
      method: event.request.method,
      headers: Object.fromEntries(event.request.headers),
      cf: event.request.cf
    })

    // Get the path from the URL
    const url = new URL(event.request.url)
    const path = url.pathname
    const host = event.request.headers.get('host')

    // Log the path and host
    console.log('Processing request:', { path, host })

    // If it's the root path, serve index.html
    if (path === '/' || path === '/index.html') {
      console.log('Serving root path')
      return new Response('Hello from agyani.me!', {
        headers: {
          'content-type': 'text/html',
          'cache-control': 'public, max-age=3600',
          'host': host || 'agyani.me'
        }
      })
    }

    // For all other paths, return a 404
    console.log('Path not found:', path)
    return new Response(`Path "${path}" not found`, {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'content-type': 'text/plain',
        'host': host || 'agyani.me'
      }
    })
  } catch (e) {
    // Log detailed error information
    console.error('Error details:', {
      message: e.message,
      stack: e.stack,
      name: e.name
    })
    return new Response('Internal Server Error', {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {
        'content-type': 'text/plain'
      }
    })
  }
} 