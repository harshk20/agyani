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

    // Try to serve the asset from KV
    try {
      return await getAssetFromKV(event, {
        cacheControl: {
          browserTTL: 60 * 60 * 24, // 1 day
          edgeTTL: 60 * 60 * 24 * 365, // 1 year
          bypassCache: false
        }
      })
    } catch (e) {
      // If the asset is not found, serve index.html for all routes
      // This enables client-side routing
      if (e.status === 404) {
        try {
          return await getAssetFromKV(event, {
            cacheControl: {
              browserTTL: 60 * 60 * 24, // 1 day
              edgeTTL: 60 * 60 * 24 * 365, // 1 year
              bypassCache: false
            }
          }, {
            mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req)
          })
        } catch (e) {
          return new Response('Not Found', {
            status: 404,
            statusText: 'Not Found',
            headers: {
              'content-type': 'text/plain'
            }
          })
        }
      }
      throw e
    }
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