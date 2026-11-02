export type EmailCheck = "ok" | "empty" | "invalid";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validates the mailing-list field. Nothing is ever sent or stored. */
export function checkEmail(value: string): EmailCheck {
  const v = value.trim();
  if (!v) return "empty";
  return EMAIL_PATTERN.test(v) ? "ok" : "invalid";
}

export const EMAIL_ERRORS: Record<Exclude<EmailCheck, "ok">, string> = {
  empty: "Please enter your email address.",
  invalid: "Please enter a valid email address, like name@example.com.",
};

export const DEMO_MESSAGE = "Demo only—your email has not been submitted or saved.";
