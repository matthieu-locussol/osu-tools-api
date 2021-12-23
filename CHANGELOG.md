# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.8](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.7...v1.1.8) (2021-12-23)


### Bug Fixes

* added DOTNET_PATH to the deployment workflow ([abe84e1](https://github.com/matthieu-locussol/osu-tools-api/commit/abe84e1c1a083fed0bd0d3573c739e70b0698141))

### [1.1.7](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.6...v1.1.7) (2021-12-23)

### Bug Fixes

-  added DOTNET_PATH to the deployment workflow
   ([a08725d](https://github.com/matthieu-locussol/osu-tools-api/commit/a08725df175b84640d05cbb732968d7839153780))

### [1.1.6](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.5...v1.1.6) (2021-12-23)

### [1.1.5](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.4...v1.1.5) (2021-12-23)

### Bug Fixes

-  updated dotnet path default value
   ([cfb9da9](https://github.com/matthieu-locussol/osu-tools-api/commit/cfb9da98dc59ef5837a224f0d9224819e6d36727))

### [1.1.4](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.3...v1.1.4) (2021-12-23)

### Bug Fixes

-  updated dotnet relative path to use an environment variable
   ([86394ee](https://github.com/matthieu-locussol/osu-tools-api/commit/86394ee5161db24f3e0adc2bc855aed15286dfbb))

### [1.1.3](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.2...v1.1.3) (2021-12-23)

### Bug Fixes

-  updated dotnet relative path
   ([f231a4f](https://github.com/matthieu-locussol/osu-tools-api/commit/f231a4fdf9ae2d5c5e3c0df42a3f41d4fb3d5b7e))

### [1.1.2](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.1...v1.1.2) (2021-12-22)

### Bug Fixes

-  start script launches the correct tool version
   ([0799e18](https://github.com/matthieu-locussol/osu-tools-api/commit/0799e18d90b47854e5844bbb8f7b6db547768b31))

### [1.1.1](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.1.0...v1.1.1) (2021-12-22)

### Bug Fixes

-  updated workflow to overwrite remote files on deploy
   ([0098541](https://github.com/matthieu-locussol/osu-tools-api/commit/0098541b707e76581b54e072a15b04c1df06f5af))

## [1.1.0](https://github.com/matthieu-locussol/osu-tools-api/compare/v1.0.0...v1.1.0) (2021-12-22)

### Features

-  exposes version of the API under the root controller
   ([f1b48e5](https://github.com/matthieu-locussol/osu-tools-api/commit/f1b48e5ad99c66a569de6b52e5517f4b3e8118c0))

### Bug Fixes

-  added some security checks in the execute function
   ([4ad12f7](https://github.com/matthieu-locussol/osu-tools-api/commit/4ad12f77694022fc5220d12f29866bb76edfbd8b))
-  indent
   ([85ab15c](https://github.com/matthieu-locussol/osu-tools-api/commit/85ab15cf8dc37d2bf7ea7f758184f788f0ead9c7))
-  revert last commit
   ([1acc19f](https://github.com/matthieu-locussol/osu-tools-api/commit/1acc19fbb9245093d0541dd20ff70fb3b3228dfe))

## 1.0.0 (2021-12-18)

### Features

-  added a simulate controller & refactored forEach
   ([f584b68](https://github.com/matthieu-locussol/osu-tools-api/commit/f584b68b468bef5a69bdf2c173198287618188ec))
-  added base code & prettier + eslint configurations
   ([969413a](https://github.com/matthieu-locussol/osu-tools-api/commit/969413a937daed86ec260471aae950cd7c431a1b))
-  added osu-tools as a submodule
   ([ac5db4b](https://github.com/matthieu-locussol/osu-tools-api/commit/ac5db4b131b3f1c2b4ccabe538f99b7e994b3493))
-  added some tests, updated eslint config & refactored some code
   ([67e4448](https://github.com/matthieu-locussol/osu-tools-api/commit/67e4448180082d14db826f1b1f32fea644953e65))
-  added support for catch beatmaps
   ([f2d8dab](https://github.com/matthieu-locussol/osu-tools-api/commit/f2d8dab3d85cd51b2d9653dbc3254ceb0765d262))
-  added support for the simulate/mania/one & simulate/mania/many endpoints
   ([0dd23fd](https://github.com/matthieu-locussol/osu-tools-api/commit/0dd23fdd51210b4b33da96b98cddf326cf6d0689))
-  added taiko endpoint & updated error messages
   ([5e043cb](https://github.com/matthieu-locussol/osu-tools-api/commit/5e043cbb4a8b775794543252d0f2514d568d60e2))
-  checkout submodules recursively
   ([863719c](https://github.com/matthieu-locussol/osu-tools-api/commit/863719ccb04b14b0b0bf4b1ee398a94824327aea))
-  correctly typed execute & simulate return values
   ([b1a3933](https://github.com/matthieu-locussol/osu-tools-api/commit/b1a393310ae28f8cad949d8551544884420d133b))
-  deploy workflow will now run at least everyday to fit with osu-tools updates
   ([bcc5537](https://github.com/matthieu-locussol/osu-tools-api/commit/bcc5537e26c13d267f7de2ef466361f0a120e3b3))
-  exposed the PerformanceCalculator profile feature to the web, updated CI &
   tests
   ([c7d6bd0](https://github.com/matthieu-locussol/osu-tools-api/commit/c7d6bd0a6017d3ccd432765cdbb07ef1c36a7757))
-  first attempt to expose simulate command to the web
   ([2375db1](https://github.com/matthieu-locussol/osu-tools-api/commit/2375db1d1d0fb206cb4e9b41d24e45918aed987a))
-  updated main.ts
   ([03e61de](https://github.com/matthieu-locussol/osu-tools-api/commit/03e61de3b6f3c90bbbd6732714fac0873db8aac3))

### Bug Fixes

-  build osu-tools during the tests job
   ([c21f6a1](https://github.com/matthieu-locussol/osu-tools-api/commit/c21f6a1acc640b189ee32fa3cf9e81e1bbaa856a))
-  CI install dotnet to build osu-tools
   ([67405e9](https://github.com/matthieu-locussol/osu-tools-api/commit/67405e93b710f11ede0e7ea5e13a243d7922c146))
-  console log stderr on error in execute
   ([8b0ff28](https://github.com/matthieu-locussol/osu-tools-api/commit/8b0ff2807cf9304b9b1fbf43abc55991cc63a54a))
-  created .env file for the CI
   ([405bcd4](https://github.com/matthieu-locussol/osu-tools-api/commit/405bcd485004eb3bfdcea4c0cad6c17b47c443b5))
-  example path is now relative
   ([da13b54](https://github.com/matthieu-locussol/osu-tools-api/commit/da13b545dec261ea2c27c65a774b766e9ae1fcb0))
-  fixed error throwing on beatmap cache-miss
   ([19cd181](https://github.com/matthieu-locussol/osu-tools-api/commit/19cd18137794cf45639e599925b48911c3e221cf))
-  fixed parallel writing issue, updated eslint config & added vscode
   configuration files (workspace, terminals)
   ([48b7f9f](https://github.com/matthieu-locussol/osu-tools-api/commit/48b7f9f7bce94a7a6be24869fd895d16e5178906))
-  fixed simulate stdout parsing
   ([fa14331](https://github.com/matthieu-locussol/osu-tools-api/commit/fa14331ec974a7159c8e24ecc430336ad624b3cd))
-  indent in main.yml
   ([33cbfb0](https://github.com/matthieu-locussol/osu-tools-api/commit/33cbfb03d1a3a0c96e2c9a6979ee28f3bae9d562))
-  prettier fixes
   ([3649673](https://github.com/matthieu-locussol/osu-tools-api/commit/3649673c824d1fc38b328d54fbc860a3e42ce801))
-  removed an incorrect test
   ([749cf80](https://github.com/matthieu-locussol/osu-tools-api/commit/749cf80eb4c92dce3259baa85ffc3ef2c5c7af31))
-  removed console log
   ([5e318cf](https://github.com/matthieu-locussol/osu-tools-api/commit/5e318cf229346116e362ea23f18af2a0d3ced4c1))
-  reset the version env variable to avoid dotnet error
   ([768aacb](https://github.com/matthieu-locussol/osu-tools-api/commit/768aacb1a0e42ae29af37cfe106fcca3b78f2fa8))
-  unit_tests job clone submodules recursively
   ([af15ef4](https://github.com/matthieu-locussol/osu-tools-api/commit/af15ef41258ce1567bf04d80fb2f37b8bf3013ff))
-  updated eslint import config
   ([6910389](https://github.com/matthieu-locussol/osu-tools-api/commit/69103896bb48969a7b61efa7606212706363e5cb))
