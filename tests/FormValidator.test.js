import FormValidator from "../common/FormValidator"

test("validateUsername", () => {
    expect(FormValidator.validateUsername("a1", true)).toBe(true);
    expect(FormValidator.validateUsername("a", true)).toBe(false);
    expect(FormValidator.validateUsername("a1", false)).toBe(true);
    expect(FormValidator.validateUsername("a", false)).toBe(false);
});

test("validateEmail", () => {
    expect(FormValidator.validateEmail("email@email.com", true)).toBe(true);
    expect(FormValidator.validateEmail("email", true)).toBe(false);
    expect(FormValidator.validateEmail("email@email.com", false)).toBe(true);
    expect(FormValidator.validateEmail("email", false)).toBe(false);
});

test("validatenNewPassword", () => {
    expect(FormValidator.validatenNewPassword("aaaaaaA1", true)).toBe(true);
    expect(FormValidator.validatenNewPassword("a", true)).toBe(false);
    expect(FormValidator.validatenNewPassword("aaaaaaA1", false)).toBe(true);
    expect(FormValidator.validatenNewPassword("a", false)).toBe(false);
});

test("validateConfirmPassword", () => {
    const pass = "aaaaaaA1";
    expect(FormValidator.validateConfirmPassword(pass, pass)).toBe(true);
    expect(FormValidator.validateConfirmPassword("123", pass)).toBe(false);
});

test("validateRegularWord", () => {
    expect(FormValidator.validateRegularWord("asdf", true)).toBe(true);
    expect(FormValidator.validateRegularWord("a-1", true)).toBe(false);
    expect(FormValidator.validateRegularWord("asdf", false)).toBe(true);
    expect(FormValidator.validateRegularWord("a-1", false)).toBe(false);
});

test("validateDescription", () => {
    const longText = "Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer.asdf";
    expect(FormValidator.validateDescription("asdf", true)).toBe(true);
    expect(FormValidator.validateDescription(longText, true)).toBe(false);
    expect(FormValidator.validateDescription("asdf", false)).toBe(true);
    expect(FormValidator.validateDescription(longText, false)).toBe(false);
});

test("validateState", () => {
    expect(FormValidator.validateState("TX", true)).toBe(true);
    expect(FormValidator.validateState("sdfsfd", true)).toBe(false);
    expect(FormValidator.validateState("TX", false)).toBe(true);
    expect(FormValidator.validateState("sd", false)).toBe(false);
});

test("validateZIP", () => {
    expect(FormValidator.validateZIP("77336", true)).toBe(true);
    expect(FormValidator.validateZIP("7", true)).toBe(false);
    expect(FormValidator.validateZIP("77336", false)).toBe(true);
    expect(FormValidator.validateZIP("7", false)).toBe(false);
});