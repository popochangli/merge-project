# Merge Project

This project implements a TypeScript function to merge three integer arrays into a single sorted array.

## Problem Description

The `merge` function accepts three integer arrays with specific sorting characteristics and merges them into one array sorted in ascending order:

- `collection_1`: Already sorted from min to max (ascending).
- `collection_2`: Already sorted from min to max (ascending).
- `collection_3`: Already sorted from max to min (descending).

**Requirement:** The implementation does not use any built-in sort functions (e.g., `Array.prototype.sort`).

## Project Structure

- `src/merge.ts`: Contains the implementation of the merge function.
- `src/index.ts`: A sample script demonstrating usage.
- `test/merge.test.ts`: Unit tests using Jest.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

## Usage

### Running the Example
You can run the included example script to see the merge function in action:

```bash
npm start
```

### Importing the Function
You can import and use the `merge` function in your own TypeScript files:

```typescript
import { merge } from './src/merge';

const collection_1 = [1, 4, 7];
const collection_2 = [2, 5, 8];
const collection_3 = [9, 6, 3];

const result = merge(collection_1, collection_2, collection_3);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Testing

The project includes unit tests to verify correctness, including edge cases like empty arrays and arrays of different sizes. To run the tests:

```bash
npm test
```
