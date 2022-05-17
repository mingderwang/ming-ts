# ming-ts

A Typescript Template with a package build for Windows and Mac OS

## features

* a typescript template
* web app (html) using parcel
* package your app for windows, linux and mac os
* supports eslint

## run your app as a web app

```sh
yarn
yarn dev
```

## eslint

```sh
yarn
yarn lint
```

## package your app

```sh
yarn
yarn start
```

## build and run

```sh
yarn build
yarn package
```

> output

```sh
➜ yarn
➜ yarn build
➜ yarn package
yarn install v1.22.15
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.12s.
yarn run v1.22.15
$ tsc index.ts
✨  Done in 2.06s.
yarn run v1.22.15
$ npm run build && pkg index.js

> ming-ts@1.0.1 build
> tsc index.ts

> pkg@5.6.0
> Targets not specified. Assuming:
  node16-linux-arm64, node16-macos-arm64, node16-win-arm64
✨  Done in 4.89s.
```

> test run in mac os

```sh
➜ ./index-macos
My name is Mike and I'm 25 years old!
```
