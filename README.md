# Calculate Correlation

## What is this

A simple node package that calculates the [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) of two arrays. No dependencies needed.

## Installation

As with any other node package:

```bash
npm install calculate-correlation
```

## Usage

The package exports a function.

The function takes **two required arguments**: two arrays of numbers, with equal length.

And the function returns the correlation coefficient of the two arrays of numbers.

### Example

Use it as follows:

```js
// import the fn
const calculateCorrelation = require("calculate-correlation");

// given 4 points: (2,3), (5,3), (4,6) and (1,7)
const x = [2, 5, 4, 1];
const y = [3, 3, 6, 7];

const correlation = calculateCorrelation(x, y);

console.log(correlation); // logs -0.442807443
```

### Be careful

- Passing less or more than two arguments will return an error.
- Passing two arrays with non-numerical values in them will return an error.
- Passign two arrays with different length will also return an error.

If the input is correct, the result will be a `Number` between 1 and -1, rounded up to 9 decimal positions.

### More details

As of now, the formula used by the package to calculate correlation is the one for **samples**.

## Future

Some kind of possible roadmap:

- [x] Limit result number to _n_ decimal positions.
- [ ] Add a config option to calculate correlation of a **population** instead of a sample.
- [ ] Add a config option to specify the decimal positions in result.
- [ ] Add a config option to specify if the result is preferred as string or number.
- [ ] Throw different error messages depending on what was the problem with the input.
- [ ] Return other statistic values like _average_, _standard deviation_, _variance_, _covariance_, etc.
