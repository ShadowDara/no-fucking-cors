# No fucking CORS

a Vercel powered CORS ignoring webserver

## Try it

go to `https://no-fucking-cors.vercel.app/api?url=` and
add your link after `?url=`

## Please

**if you want to use this tool usually or continious,
please deploy the Code to your own Vercel Server**

Because this is a free tool and so on it is running over the
free plan of Vercel which is obviously limited!

When the Dataload is getting to big, i am forced to take the
server down or i've to increase the cache time a lot and
i dont want this to happen

## How to deploy

- Copy the Code of this Repository

- Paste it in a new Repository in your Github Account

- Deploy it to your own vercel account on [vercel.com](https://vercel.com)

- then open `https://your_vercel_link.vercel.app/api?url=https://shadowdara.github.io/assets/icons/Dara-3.ico`

finsihed!

## Settings

in `app/api/route.ts` in line 5 `const CACHE_TTL = 900 * 1000`,
this means, the website caches the data for 15 minutes
