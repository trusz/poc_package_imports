# Demo: Package Imports (with Workspaces)

This is a demo to show how to use the native [↗ imports](https://nodejs.org/api/packages.html#subpath-imports) of `package.json`.

1. We have workspaces set up in [`package.json`](./package.json)

1. Set up imports in [`package.json`](./package.json):
   ```json
   {
      ...
      "imports": {
         "#lib/*": "./src/lib/*",
         "#app/*": "./src/app/*",
         "#assets/*": "./src/assets/*"
      },
      ...
   }
   ```

2. Use them for example in [`App.tsx`](./src/app/App.tsx):
   ```ts
   import reactLogo from '#assets/react.svg'
   import viteLogo from '/vite.svg'
   import './App.css'
   import { Counter } from '#lib/counter'
   ```


That is it. Native aliases.  
To try it out:
1. clone this repo
2. `npm install` or `yarn install` or `pnpm install` (does not matter)
3. `npm run dev`
4. open <http://localhost:5174/> 
5. see that the counter component is there and usable