// ----------------------------------------------
// JS Variales (*defined using `let` keyword)
// ----------------------------------------------
let count = 0

// Check whether count variable above is actually 0
console.log(count)

// JavaScript also supports mathematical operations
let product = 5 * 7
console.log(product)

// The usual convention is to store actual values into variables
let FirstBatch = 10
let SecondBatch = 20

// ----------------------------------------------
// Operations
// ----------------------------------------------

// Multiply
let Batch_Product = FirstBatch * SecondBatch
console.log(Batch_Product)

// Addition
let Batch_Add = FirstBatch + SecondBatch
console.log(Batch_Add)

// Subtraction
let Batch_Subtract = SecondBatch - FirstBatch
console.log(Batch_Subtract)

// Division
let Batch_Divide = SecondBatch / FirstBatch
console.log(Batch_Divide)

// ----------------------------------------------
// Increments (*Defined without `let` keyword)
// ----------------------------------------------
FirstBatch = FirstBatch + 10
  // Initial FirstBatch value is 10
  // New value should be 10 + 10 = 20

FirstBatch = FirstBatch + 50
  // New Value is 20 + 50 = 70
console.log(FirstBatch)