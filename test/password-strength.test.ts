import {calculatePasswordStrength} from "../src/calculate-password-strength";

test('Verify that password with strength 2 characters is week', () => {
    expect(calculatePasswordStrength("ab")).toBe("Very Weak")
})

test('Verify that password with characters and numbers is moderate', () => {
    expect(calculatePasswordStrength("ab2sdfdsfsdfsf4s")).toBe("Moderate")
})

test('Verify that password with different characters and numbers is strong', () => {
    expect(calculatePasswordStrength("ab2sdfdsfsdfsf4s@@@")).toBe("Strong")
})