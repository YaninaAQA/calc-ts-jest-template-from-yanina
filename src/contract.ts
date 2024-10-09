import { UserEstonia } from './user-estonia'
import { UserLatvia } from './user-latvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  sign(user: UserEstonia): void {
    if (user.mobileIDAuthorization) {
      this.signed = true
    }
  }

  signLV(user: UserLatvia): void {
    if (user.activateEParakstsForLatvia) {
      this.signed = true
    }
  }
}
