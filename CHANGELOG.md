# @ctx-core/version\_\_obj

## 7.1.7

### Patch Changes

- Updated dependencies
  - @ctx-core/object@25.1.0

## 7.1.6

### Patch Changes

- Updated dependencies
  - @ctx-core/object@25.0.1

## 7.1.5

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/object@25.0.0

## 7.1.4

### Patch Changes

- Updated dependencies
  - @ctx-core/object@24.1.8

## 7.1.3

### Patch Changes

- Updated dependencies
  - @ctx-core/object@24.1.7

## 7.1.2

### Patch Changes

- Updated dependencies
  - @ctx-core/object@24.1.6

## 7.1.1

### Patch Changes

- 15f224d0f: @ctx-core/object: workspace:^24.1.4 -> 24.1.5

## 7.1.0

### Minor Changes

- extract _.js & _.d.ts into directories

## 7.0.41

### Patch Changes

- @swc/core: ^1.3.31 -> ^1.3.32

## 7.0.40

### Patch Changes

- tsconfig.json: - importsNotUsedAsValues

## 7.0.39

### Patch Changes

- rimraf: ^4.0.1 -> ^4.0.4

## 7.0.38

### Patch Changes

- rimraf: ^3.0.2 -> ^4.0.1

## 7.0.37

### Patch Changes

- package.json: exports: update

## 7.0.36

### Patch Changes

- sideEffects = false

## 7.0.35

### Patch Changes

- @swc/core: ^1.2.125 -> ^1.2.127

## 7.0.34

### Patch Changes

- version bump

## 7.0.33

### Patch Changes

- .js + .d.ts instead of .ts

## 7.0.32

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts

## 7.0.31

### Patch Changes

- tsconfig.json: "target": "ES2021"

## 7.0.30

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience

## 7.0.29

### Patch Changes

- fix: build

## 7.0.28

### Patch Changes

- \*.d.ts export

## 7.0.27

### Patch Changes

- fix: tsconfig.json: "rootDir": "."

## 7.0.26

### Patch Changes

- fix: package.json: exports

## 7.0.25

### Patch Changes

- package.json: svelte: ./dist/index.js

## 7.0.24

### Patch Changes

- package.json: - module

## 7.0.23

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 7.0.22

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 7.0.21

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 7.0.20

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 7.0.19

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 7.0.18

### Patch Changes

- @swc/core: ^1.2.110 -> ^1.2.111

## 7.0.17

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 7.0.16

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 7.0.15

### Patch Changes

- compile using swc

## 7.0.14

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4

## 7.0.13

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 7.0.12

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 7.0.11

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 7.0.10

### Patch Changes

- exports: + "package.json": "./package.json"

## 7.0.9

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 7.0.8

### Patch Changes

- tsconfig.json: "target": "es2019"

## 7.0.7

### Patch Changes

- fix: cjs: load as a Promise

## 7.0.6

### Patch Changes

- "main": "./dist/index.cjs"

## 7.0.5

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 7.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 7.0.3

### Patch Changes

- support cjs & esm: + "exports"

## 7.0.2

### Patch Changes

- fix: "type": "module"

## 7.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 7.0.0

### Major Changes

- "type": "module": module npm type

## 6.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 6.0.9

### Patch Changes

- dist directory

## 6.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 6.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 6.0.6

### Patch Changes

- fix: deploying \*.js files

## 6.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 6.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 6.0.3

### Patch Changes

- fix: npm run clean

## 6.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 6.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 6.0.0

### Major Changes

- move from dist to src directory

## 5.3.3

### Patch Changes

- version bump: run build

## 5.3.2

### Patch Changes

- fix: build: clean up old build files in dist

## 5.3.1

### Patch Changes

- update dependencies

## 5.3.0

### Minor Changes

- fix tsc build directory issues

## 5.2.1

### Patch Changes

- .gitignore: - \*.js

## 5.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 5.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 5.1.2

### Patch Changes

- .npmignore: + ~

## 5.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 5.1.0

### Minor Changes

- "noImplicitAny": true

## 5.0.11

### Patch Changes

- - Reflect.get

## 5.0.10

### Patch Changes

- update dependencies

## 5.0.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 5.0.8

### Patch Changes

- version bump

## 5.0.7

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 5.0.6

### Patch Changes

- fix: npm run compile: tsc -b .

## 5.0.5

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 5.0.4

### Patch Changes

- version bump

## 5.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 5.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 5.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 5.0.0

### Major Changes

- src directory

## 4.1.0

### Minor Changes

- self_lazyload as lazyload\_\_self,argument types

## 4.0.5

### Patch Changes

- - .rush

## 4.0.4

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 4.0.3

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 4.0.1

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 4.0.0

### Major Changes

- Typescript strict checking

## 3.1.34

### Patch Changes

- fix: npm run compile: path to tsc
