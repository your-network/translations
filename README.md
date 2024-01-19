# Translations

> Notes for translators

## File structure

Each folder represent a sort of encapsulated part of the project, this is mainly for internal development organization.

File names follow this **convention**:

- `~.json`: for app wide **urls** translated definitions
- `_.json`: for app wide **common** translations
- `$data.json`: dollar prefix for static **data** like arrays, objects, .etc
- `~route-name.json`: lower cased for **route/page** specific data, we use `~` instead of `/` for nested folders pathnames, e.g. `/my/account-settings` would use a `~my~account-settings.json` file.
- `ComponentName.json`: pascal cased for **components** specific data

## Interpolation

- Interpolated `string` values are surrounded by `{{ }}`, move them but not delete them.
- Interpolated `HTML` values are written as `<some-name>This is a translation</some-name>`, move them but not delete them.

## `.docx` files

Pages with a lot of content do not use JSON for their translation (except for their SEO data), we instead convert .docx file to html. NB: This only happens at deploy time.
`.docx` files are placed alongisde the other translation files. Changes to these files should go through git as for any other file in the repo.

## Rich content

Some translations keys like `faqs` and various blocks of most content pages support rich content through the [`<HTMLContent />` component](../libs/molecules/HTMLContent.tsx). Here is the list of what is supported:

### Paragraphs

Paragraphs can be created in two ways:

- using standard surrounding `<p>` HTLM tag around a portion of text:

```json
  "block": {
    "text": "<p>A paragraph.</p><p>Another paragraph.</p>A paragraph again."
  }
```

- using an _array of `strings`_ instead of a simple string in the translated value:

```json
  "block": {
    "title": "A simple string",
    "text": [
      "A paragraph",
      "Another paragraph"
    ]
  }
```

### Links

There are three ways to add links:

- Using a plain absolute URL in the text will turn the link into an HTML link string without the protocol so this:

```json
  "text": "a plain absolute URL https://example.com",
```

will be nicely displayed as: a plain absolute URL [example.com](https://example.com)

- Using a standard `<a>` HTML tag for when you want your link to have a specific text, remember to use **single quotes** around the `href` value, e.g.:

```json
  "text": "a standard <a href='https://example.com'>HTML link</a>",
```

- Using a custom `<a to="aroutename">` value for when you want to link to a page within the application, the value of `to` will be automatically localised and it needs to match a **valid** _route name_ that you can derive from [this file](./en/~.json). Ask to the developers if you are unsure. Example:

```json
  "text": "sign in <a to='auth.signin'>here</a>",
```

### Bold

To make some **bold text**:

```json
  "text": "Some <b>bold text</b>",
```

### Italic

To make some _italic text_:

```json
  "text": "Some <em>italic text</em>",
```

### Strikethrough

To make some ~~deleted text~~:

```json
  "text": "Some <del>deleted text</del>",
```

### Code

To make some `code text`:

```json
  "text": "Some <code>code text</code>",
```

### Lists

To make a list:

- List element one
- List element two

```json
  "text": "<ul><li>List element one</li><li>List element two</li></ul>",
```

## Dev notes

Use [`act`](https://github.com/nektos/act) to test the [github action](https://github.com/knitkode/koine/tree/main/actions/i18n) locally.
