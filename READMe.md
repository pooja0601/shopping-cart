# Project - Shopping Cart

## About

This simple NodeJS application implements a subset of a shopping cart functionality. One or more products can be added to the shopping cart where each product may be in a quantity of one or more. This application implementation allows one product to be added to the cart at a time, and subsequently more products can be appended to the cart. With each addition of the product, the total price and Sales tax is computed afresh.

### Assumptions

There are a certain assumptions made by the developer for the solution to work. Here are a couple of those:

1. All products with their id, name and price are initially set in the application.
2. Sales Tax is computed only when there are two unique products added to the cart.

## Technologies

- NodeJS
- Jest - Testing

## Installation

1. Download/ Clone from gitHub
2. On command line run `npm install` command

## Running tests

### Test suite

On command line, type `npm test` to execute the full test suite.

### Running individual tests

On command line, type `npm test <filename>` to execute individual test files.

_Refer package.json file for more information on the commands._

## Use Case Implementation details:

### Use case 1: Add products to the shopping cart.

The relevant test case can be found in
Filename: add-to-cart.test.js
Test Case: "Successfully adds one product with given quantity"

### Use case 2: Add additional products of the same type to the shopping cart.

The relevant test case can be found in
Filename: add-to-cart.test.js
Test Case: "Updates quantity of product when cart already has the selected product"

### Use case 3: Calculate the tax rate of the shopping cart with multiple items

The relevant test case can be found in
Filename: add-to-cart.test.js
Test Case: "Calculates sales tax when 2 products with different IDs are added to cart"

## Developer

Pooja Shenoy
