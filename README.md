# package.json
```shell
    "dev": "vite-ssr --port 3333", 
    "build": "vite-ssr build",
    "serve": "vite-ssr --mode production",
    "build:noexternal": "vite-ssr build --config vite.config.noexternal.ts",
    "preview": "node ./dist/server/server.cjs"
```

# init submit git store
```shell
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:freretigre/Vite3Vue3SSRKit.git
git push -u origin main
```