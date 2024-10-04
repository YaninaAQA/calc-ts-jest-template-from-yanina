import { User } from '../src/user'
import { Processor } from '../src/processor'

describe('Test for consent', () => {
  let user: User
  let processor: Processor

  beforeEach(() => {
    user = new User('Ivan', 'Ivanov', 20, '+375293761822', 'Vyduno g.25')
    processor = new Processor()
  })

  test('Initially created user have undefined consent', () => {
    expect(user.consentGiven).toBeUndefined()
  })

  test('Processor should verify fail consent when it is not given', () => {
    expect(processor.checkConsent(user)).toBe(false)
  })

  test('User is adult', () => {
    expect(processor.isUserAdult(user)).toBe(true)
  })

  test('Adult user can give consent', () => {
    processor.givenConsent(user)
    expect(user.consentGiven).toBe(true)
  })

  test('Revoke Consent', () => {
    processor.revokeConsent(user)
    expect(user.consentGiven).toBe(false)
  })
})
