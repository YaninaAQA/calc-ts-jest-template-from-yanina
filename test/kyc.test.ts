import { UserEstonia } from '../src/user-estonia'
import { KycVerification } from '../src/kyc-verification'
import { UserLatvia } from '../src/user-latvia'
import { Contract } from '../src/contract'

describe('Test KYC for Estonia', () => {
  let user: UserEstonia
  let kyc: KycVerification
  let contract: Contract

  beforeEach(() => {
    user = new UserEstonia('Tom', 'Jason', 20, 466778899, '+33345566', 'Estonia')
    kyc = new KycVerification()
    contract = new Contract('Test Contract')
  })

  test('Verify that the mobileIDAuthorization field is undefined by default', () => {
    expect(user.mobileIDAuthorization).toBeUndefined()
  })

  test('Verify that if mobileIDAuthorization is not activated the contract is not signed', () => {
    user.mobileIDAuthorization = undefined
    contract.sign(user)
    expect(contract.signed).toBe(false)
  })

  test("Verify that the activateMobileIDForEstonia method activates Mobile ID if the user's age is greater than 16", () => {
    kyc.activateMobileIDForEstonia(user)
    expect(user.mobileIDAuthorization).toBe(true)
  })

  test('Verify that the contract signed if Mobile ID authorization is activated', () => {
    user.mobileIDAuthorization = true
    contract.sign(user)
    expect(contract.signed).toBe(true)
  })

  test('Verify that attempting to activate Mobile ID for a user younger than 16 throws an error', () => {
    user.age = 14
    expect(() => {
      kyc.activateMobileIDForEstonia(user)
    }).toThrow('User is too young')
  })
})

describe('Test KYC for Latvia', () => {
  let user: UserLatvia
  let kyc: KycVerification
  let contract: Contract

  beforeEach(() => {
    user = new UserLatvia('Tom', 'Jason', 20, 466778899, '+33345566', 'Latvia')
    kyc = new KycVerification()
    contract = new Contract('Test Contract2')
  })

  test('Verify that the eParakstsForLatvia field is undefined by default', () => {
    expect(user.activateEParakstsForLatvia).toBeUndefined()
  })

  test('Verify that if activateEParakstsForLatvia is not activated the contract is not signed', () => {
    user.activateEParakstsForLatvia = undefined
    contract.signLV(user)
    expect(contract.signed).toBe(false)
  })

  test("Verify that the activateEParakstsForLatvia method activates Mobile ID if the user's age is greater than 18", () => {
    kyc.activateEParakstsForLatvia(user)
    expect(user.activateEParakstsForLatvia).toBe(true)
  })

  test('Verify that the contract signed if activateEParakstsForLatvia is activated', () => {
    user.activateEParakstsForLatvia = true
    contract.signLV(user)
    expect(contract.signed).toBe(true)
  })

  test('Verify that attempting to activate EParakts for a user younger than 18 throws an error', () => {
    user.age = 14
    expect(() => {
      kyc.activateEParakstsForLatvia(user)
    }).toThrow('User is too young')
  })
})
