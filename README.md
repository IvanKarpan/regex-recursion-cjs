# regex-recursion-cjs

CommonJS wrapper for [regex-recursion](https://github.com/slevithan/regex-recursion).

## Installation

```bash
pnpm add regex-recursion-cjs
```

## Usage

```js
// CommonJS
const { recursion } = require('regex-recursion-cjs');

// Use recursion to process a regex with recursive patterns
const pattern = '\\((?:(?R=2)|[^()])\\)';
const result = recursion(pattern);
console.log(result.pattern); // Processed pattern with recursion transformed
```

### More Examples

#### Nested Parentheses Matching

```js
const { recursion } = require('regex-recursion-cjs');

// Create a pattern that matches balanced parentheses
const pattern = '\\((?:(?R=10)|[^()])*\\)';
const processed = recursion(pattern);

// The processed pattern can be used with a standard RegExp
const regex = new RegExp(processed.pattern);
const text = 'foo (bar (baz) blah) end';
console.log(text.match(regex)[0]); // '(bar (baz) blah)'
```

#### Using Named Groups with Recursion

```js
const { recursion } = require('regex-recursion-cjs');

// Use named groups with recursion
const pattern = '\\((?<content>(?:\\g<content&R=2>|[^()]*)*)\\)';
const processed = recursion(pattern);

console.log(processed.pattern); // Shows the expanded pattern
```

## Development

### Setup

```bash
# Install dependencies
pnpm install
```

### Linting

This project uses [ts-standard](https://github.com/standard/ts-standard) for linting and code formatting, which is an extension of [StandardJS](https://standardjs.com/) for TypeScript.

```bash
# Run linting
pnpm lint

# Fix linting issues automatically
pnpm lint:fix
```

Pre-commit hooks (using Husky and lint-staged) ensure that code is properly linted before being committed.

### Building and Testing

```bash
# Clean build artifacts
pnpm clean

# Build the package
pnpm build

# Run tests
pnpm test

# Development workflow (clean, build, test)
pnpm dev
```

## Why

The original `regex-recursion` package is ESM-only, which can cause compatibility issues in CommonJS projects. This package provides a pre-built CommonJS version that can be used in any Node.js environment without the need for special configuration.

## License

MIT
