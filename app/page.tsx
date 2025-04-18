// app/page.tsx

import Image from "next/image";

export const metadata = {
  title: "No fucking CORS",
  description: "a webserver for ignoring CORS",
};

export default function Home() {
  return (
    <div>
      <head>
        <meta httpEquiv="refresh" content="0.1;url=https://github.com/ShadowDara/no-fucking-cors"></meta>
      </head>
    </div>
  );
}
