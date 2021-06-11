# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2021-06-11

- Updated dependencies (dev).
- Pull requests from dependabot to fix a couple alerts.

## [1.2.1] - 2020-11-04

### Fixed

- Correction on the config object for the second example in README.

## [1.2.0] - 2020-10-25

### Changed

- The main function accepts a config object as the third argument. The user can setup the type of the result (`Number` or `String`), and the max number of decimals to round the result to.

## [1.0.2] - 2020-07-20

### Security

- Version of lodash bumped from 4.17.15 to 4.17.19 by dependabot and package-lock.json updated.

## [1.0.1] - 2020-04-30

### Changed

- Rounded (precisely) result to 9 decimal positions.

## [1.0.0] - 2020-04-30

🎊 Initial release

### Added

- Main function (and helpers) to calculate the Pearson correlation coeficient of two arrays of numbers.
- Checks for correct number of arrays, arrays of same length, with valid content.
- Basic tests for all functions.
