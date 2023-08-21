# Demo: Package Imports (with Workspaces)

This is a demo to show how to use the native [↗ imports](https://nodejs.org/api/packages.html#subpath-imports) of `package.json`
with a workspace setup.

The aliases are working as expected in both built version and 
directly linked source version of the `lib`.

Try out by running:

```sh
make run
```

## Noteworthy Points

1. We have workspaces set up in [`package.json`](./package.json)
   ```json
   "workspaces": [
      "packages/app",
      "packages/lib"
   ],
   ```

2. The two packages, `app` and `lib`
   ```txt
   └── packages
       ├── app
       └── lib
   ```

3. `app` depends on `lib`; [`package.json`](./package.json):
   ```json
   "dependencies": {
      "@poc_package_imports/lib": "*",
   }
   ```

4. `lib` uses aliases in [`index.ts`](./packages/lib/src/index.ts)
   ```ts
   export * from "#app/App.tsx"
   ```

5. we don't include react with the built library: [`vite.config.ts`](./packages/lib/vite.config.ts)
   ```ts
   rollupOptions: {
      external: ['react', 'react-dom'],
   },
   ```

6. `app` imports the `App` component from `lib`; [`main.tsx`](./packages/app/src/main.tsx)
   ```ts
   import { App } from "@poc_package_imports/lib"
   ```


---

#### Issues

- for some reason the lib does not produces a TypeScript declaration, but 
  everything works still
