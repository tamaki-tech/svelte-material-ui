# SvelteKit Installation

Check out the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit).

You will need to install the packages you use individually as well as the theme package.

```sh
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# etc...

npm install --save-dev smui-theme
```

You need to use the [Easy Styling Method](/SASS.md#easy-styling-method). Create theme files with `smui-theme`.

```sh
npx smui-theme template src/theme
```

You can [modify your theme variables](/THEMING.md) in the files now in `src/theme`.

You'll need one of these sets of prepare scripts in your `package.json` file.

- Without Dark Mode support.

  ```
  "prepare": "npm run smui-theme",
  "smui-theme": "smui-theme compile static/smui.css -i src/theme"
  ```

- With Dark Mode.

  ```
  "prepare": "npm run smui-theme-light && npm run smui-theme-dark",
  "smui-theme-light": "smui-theme compile static/smui.css -i src/theme",
  "smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"
  ```

Now in your `src/app.html` file, add the following to the `head` section:

```html
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
```

And this for no Dark Mode support.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" />
```

Or this for Dark Mode.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link
  rel="stylesheet"
  href="/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```
