import { UserEstonia } from './user-estonia'
import { UserLatvia } from './user-latvia'
import { Contract } from './contract'
import { BaseBalticUser } from './base-baltic-user'

export class KycVerification {
  activateMobileIDForEstonia(user: UserEstonia) {
    if (user.age < 16) {
      throw new Error('User is too young')
    } else {
      user.mobileIDAuthorization = true
    }
  }

  activateEParakstsForLatvia(user: UserLatvia) {
    if (user.age < 18) {
      throw new Error('User is too young')
    } else {
      user.activateEParakstsForLatvia = true
    }
  }
}
