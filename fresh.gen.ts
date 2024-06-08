// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./src/routes/_404.tsx";
import * as $_app from "./src/routes/_app.tsx";
import * as $api_joke from "./src/routes/api/joke.ts";
import * as $greet_name_ from "./src/routes/greet/[name].tsx";
import * as $index from "./src/routes/index.tsx";
import * as $Counter from "./src/islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
