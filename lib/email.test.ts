import { describe, expect, it } from "vitest";
import { checkEmail } from "./email";

describe("checkEmail", () => {
  it("flags an empty field", () => {
    expect(checkEmail("")).toBe("empty");
    expect(checkEmail("   ")).toBe("empty");
  });

  it("rejects malformed addresses", () => {
    for (const v of ["name", "name@", "name@site", "name@site.c", "a b@site.com"]) {
      expect(checkEmail(v)).toBe("invalid");
    }
  });

  it("accepts valid addresses, ignoring surrounding spaces", () => {
    expect(checkEmail("name@example.com")).toBe("ok");
    expect(checkEmail("  coffee-geeks@groundup.com ")).toBe("ok");
  });
});
