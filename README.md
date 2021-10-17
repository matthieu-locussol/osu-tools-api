# osu-tools-api [![CodeQL](https://github.com/matthieu-locussol/osu-tools-api/actions/workflows/codeql.yml/badge.svg)](https://github.com/matthieu-locussol/osu-tools-api/actions/workflows/codeql.yml) [![Deploy](https://github.com/matthieu-locussol/osu-tools-api/actions/workflows/main.yml/badge.svg)](https://github.com/matthieu-locussol/osu-tools-api/actions/workflows/main.yml)

This repository is an attempt to make the
[osu-tools](https://github.com/ppy/osu-tools) features accessible through a web
API.

## Requirements

-  A desktop platform with the
   [.NET SDK 5.0](https://www.microsoft.com/net/learn/get-started) or higher
   installed.
-  Note that there are
   **[additional requirements for Windows 7 and Windows 8.1](https://docs.microsoft.com/en-us/dotnet/core/install/windows?tabs=net50#dependencies)**
   which you may need to manually install if your operating system is not
   up-to-date.

## Getting started

-  Clone the repository include submodules

```bash
git clone --recurse-submodules https://github.com/matthieu-locussol/osu-tools-api.git
```

-  Build the `osu-tools`'s `PerformanceCalculator` .NET project by running:

```bash
dotnet build submodules/osu-tools/PerformanceCalculator/PerformanceCalculator.csproj --configuration Release
```

-  (Optional) If you need to use the `Profile` feature of the
   `PerformanceCalculator` tool, create a `.env` file similar to the
   `.env.sample` provided and set your
   [osu! app client id & app client secret](https://osu.ppy.sh/home/account/edit#new-oauth-application).
