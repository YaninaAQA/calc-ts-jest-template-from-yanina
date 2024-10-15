import {calculatePasswordStrength} from "../src/calculate-password-strength";

test('Verify that password with strength 2 characters is very week', () => {
    expect(calculatePasswordStrength("ab")).toBe("Very Weak")
})

test('Verify that password with characters and numbers is moderate', () => {
    expect(calculatePasswordStrength("ab2sdfdsfsdfsf4s")).toBe("Moderate")
})

test('Verify that password with different characters and numbers is strong', () => {
    expect(calculatePasswordStrength("ab2sdfdsfsdfsf4s@@@")).toBe("Strong")
})

test('Verify that password with just numbers is very weak', () => {
    expect(calculatePasswordStrength("1234567")).toBe("Very Weak");
});

test('Verify that password with uppercase, lowercase and length is weak', () => {
    expect(calculatePasswordStrength("Abcdefgh")).toBe("Weak");
});

test('Verify that password with uppercase, lowercase, numbers and special characters is strong', () => {
    expect(calculatePasswordStrength("Abc123!@#")).toBe("Strong");
});