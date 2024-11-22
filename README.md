# React Movie CA1

[React][react] SPA for movie browsing, using the
[*"The Movie Database (TMDb)"*][tmdb-key] API.

## Features

- [x] Responsive React UI thanks to [MUI][mui].
- [x] Cached TMDb API queries thanks to [TanStack Query][tanstack].
- [x] Loading spinners and informative error messages.
- [x] Fast and efficient JavaScript bundling thanks to [Vite][vite].

## Usage

> [!NOTE]
> You will need to provide [your own TMDb API key][tmdb-key].

```bash
# Install dependencies
npm install

# Add TMDb key
nano .env.template
mv .env.template .env

# Run app
npm run dev
```

## Development

> [!NOTE]
> I recommend [installing `pre-commit`][pre-commit] to use the provided Git hooks.

```bash
# Install pre-commit hooks
pre-commit install

# Start dev server
npm run dev

# Lint (also includes Prettier)
npm run lint

# Build for production
npm run build
```

## Licenses

This project is licensed under the [GNU GPL v3.0][license].

Based on the following course material:

```txt
╔══════════════════════════════════════════════╗
║ "React Movie App" Labs                       ║
╠══════════════════════════════════════════════╣
║ Web App Development 2                        ║
║ BSc (Hons.) Software Systems Development     ║
║ South East Technological University          ║
║                                              ║
║ Lecturer: Rosanne Birney (rbirney@wit.ie)    ║
╚══════════════════════════════════════════════╝
```

Made using the following resources:

| Resource                                  | License                           |
|:------------------------------------------|:----------------------------------|
| [CRA to Vite guide][cra-vite]             | N/A                               |
| [`.js` to `.jsx` script][js-jsx]          | N/A                               |
| [Vite usage guide][vite-guide]            | [MIT][vite-license]               |
| [Supabase React quickstart][supa-start]   | N/A                               |
| [WebGradients][gradient]                  | N/A[^1]                           |

[^1]: *"Free for commercial or personal use by [Dima Braven][dima]"*.

[react]: https://react.dev/
[mui]: https://mui.com/
[tanstack]: https://tanstack.com/query/latest
[vite]: https://vite.dev/
[pre-commit]: https://pre-commit.com/#install
[tmdb-key]: https://developer.themoviedb.org/docs/getting-started
[license]: ./LICENSE
[cra-vite]: https://medium.com/@mun1013/guide-to-migrating-from-create-react-app-cra-to-vite-5516f55aa410
[js-jsx]: https://gist.github.com/parties/90cdf35f9a3d05bea6df76dc83a69641
[vite-guide]: https://vite.dev/guide/
[vite-license]: https://github.com/vitejs/vite/blob/main/LICENSE
[supa-start]: https://supabase.com/docs/guides/auth/quickstarts/react
[gradient]: https://webgradients.com/
[dima]: https://twitter.com/dimabraven
