import { User } from './user'
export class Processor {
  givenConsent(userInput: User): void {
    if (this.isUserAdult(userInput)) {
      userInput.consentGiven = true
    }
  }

  checkConsent(userInput: User): boolean {
    return userInput.consentGiven === true
  }

  isUserAdult(user: User): boolean {
    return user.age >= 18
  }

  revokeConsent(userInput: User): void {
    userInput.consentGiven = false
  }
}
