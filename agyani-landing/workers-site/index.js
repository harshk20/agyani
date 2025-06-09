import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // Log the request
    console.log('Handling request:', event.request.url)

    // Get the path from the URL
    const url = new URL(event.request.url)
    const path = url.pathname

    // If it's the root path, serve index.html
    if (path === '/' || path === '/index.html') {
      return new Response('Hello from agyani.me!', {
        headers: {
          'content-type': 'text/html',
          'cache-control': 'public, max-age=3600'
        }
      })
    }

    // For all other paths, return a 404
    return new Response(`Path "${path}" not found`, {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'content-type': 'text/plain'
      }
    })
  } catch (e) {
    // Log any errors
    console.error('Error handling request:', e)
    return new Response('Internal Server Error', {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {
        'content-type': 'text/plain'
      }
    })
  }
} 