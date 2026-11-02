"use client";

import { useRef, useState, type FormEvent } from "react";
import { checkEmail, DEMO_MESSAGE, EMAIL_ERRORS, type EmailCheck } from "@/lib/email";
import { Alert, Info } from "./Icons";

type Status = "idle" | EmailCheck;

/** Mailing-list form. Validation only: nothing is sent or stored. */
export function Signup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const errorText = status === "empty" || status === "invalid" ? EMAIL_ERRORS[status] : null;
  const isError = errorText !== null;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = checkEmail(email);
    setStatus(result);
    if (result === "ok") setEmail("");
    else inputRef.current?.focus();
  }

  return (
    <section id="signup" className="section on-ember grain signup" aria-labelledby="signup-title">
      <div className="wrap signup-grid">
        <div className="stack" style={{ gap: 16 }}>
          <h2 id="signup-title" className="display h2">Stay in the loop.</h2>
          <p className="lede">Get updates on events, specials, and what’s brewing at Ground Up.</p>
        </div>

        <form className="signup-form" noValidate onSubmit={onSubmit}>
          <label htmlFor="signup-email">Email address</label>
          <div className="signup-row">
            <input
              ref={inputRef}
              id="signup-email"
              className="field"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              aria-invalid={isError}
              aria-describedby="signup-note signup-msg"
            />
            <button type="submit" className="btn btn-light">Sign Me Up</button>
          </div>
          <p id="signup-note" className="signup-note">Class prototype: this form doesn’t send or store anything.</p>
          <div id="signup-msg" role="status" aria-live="polite">
            {isError && (
              <p className="msg msg-error">
                <Alert size={20} strokeWidth={2.4} style={{ color: "var(--ember)" }} />
                <span>{errorText}</span>
              </p>
            )}
            {status === "ok" && (
              <p className="msg msg-demo">
                <Info size={20} strokeWidth={2.4} style={{ color: "var(--ember-light)" }} />
                <span>{DEMO_MESSAGE}</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
