// This test can be run after building the package
'use strict'

const { recursion } = require('./dist/index.cjs')

// Test the recursion function
const pattern = '\\((?:(?R=2)|[^()])\\)'
const result = recursion(pattern)
console.log('Test result:', result)

// Expected output should have processed the recursion pattern
if (result != null && typeof result.pattern === 'string' && result.pattern !== pattern) {
  console.log('✅ Test passed!')
} else {
  console.error('❌ Test failed!')
  process.exit(1)
}
