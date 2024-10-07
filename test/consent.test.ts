import { User } from '../src/user'
import { Processor } from '../src/processor'

describe('Test for consent', () => {
  let user: User
  let processor: Processor

  beforeEach(() => {
    user = new User('Ivan', 'Ivanov', 20, '+375293761822', 'Vyduno g.25')
    processor = new Processor()
  })

  test('Initially created user has undefined consent', () => {
    expect(user.consentGiven).toBeUndefined()
  })

  test('Processor should verify fail consent when it is not given', () => {
    expect(processor.checkConsent(user)).toBe(false)
  })

  test('Processor checks if the user is of legal age', () => {
    expect(processor.isUserAdult(user)).toBe(true)
  })

  test('Adult user can give consent', () => {
    processor.givenConsent(user)
    expect(user.consentGiven).toBe(true)
  })

  test('Revoke previous consent of user', () => {
    processor.revokeConsent(user)
    expect(user.consentGiven).toBe(false)
  })
})
