# Linting & formatting

- [Languages](#languages)
- [Scripts](#scripts)
  - [Terminal](#terminal)
  - [Pre-commit](#pre-commit)
  - [Editor](#editor)
- [Configuration](#configuration)
- [FAQ](#faq)

This project uses ESLint and Prettier to catch errors and avoid bikeshedding by enforcing a common code style.

## Languages

- **JavaScript** is linted by ESLint and formatted by Prettier
- **HTML** (in templates) is linted by ESLint
- **CSS** is formatted by Prettier (TODO: look into stylelint)
- **Markdown** is formatted by Prettier
- **JSON** is formatted by Prettier

### Pre-commit

Staged files are automatically linted and tested before each commit.

### Editor

In supported editors, all files will be linted and formatted on-save. See [editors.md](editors.md) for details.
