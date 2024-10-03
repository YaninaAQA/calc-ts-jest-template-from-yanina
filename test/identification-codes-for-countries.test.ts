import { generateCodeEst, generateCodeLtu, generateCodeLva } from '../src/identification-codes'

test('starting part of the Estonia code is EST-', () => {
  expect(generateCodeEst().startsWith('EST-'))
})

test('starting part of the Latvia code is LVA-', () => {
  expect(generateCodeLva().startsWith('LVA-'))
})

test('starting part of the Lithuania code is LTU-', () => {
  expect(generateCodeLtu().startsWith('LTU-'))
})

test('length of Estonia code is 8', () => {
  expect(generateCodeEst().length).toBe(8)
})

test('length of Latvia code is 8', () => {
  expect(generateCodeLva().length).toBe(8)
})

test('length of Lithuania code is 8', () => {
  expect(generateCodeLtu().length).toBe(8)
})

test('code matches the pattern Estonia prefix and four digits', () => {
  expect(/EST-\d{4}/.test(generateCodeEst())).toBe(true)
})

test('code matches the pattern Latvia prefix and four digits', () => {
  expect(/LVA-\d{4}/.test(generateCodeLva())).toBe(true)
})

test('code matches the pattern Lithuania prefix and four digits', () => {
  expect(/LTU-\d{4}/.test(generateCodeLtu())).toBe(true)
})
