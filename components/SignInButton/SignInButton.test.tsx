import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, vi, expect } from "vitest"
import { SignInButton } from "./SignInButton"
import { signIn } from "next-auth/react"

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}))

describe("SignInButton", () => {
  it("renders children correctly", () => {
    render(<SignInButton>Log In</SignInButton>)
    expect(screen.getByText("Log In")).toBeInTheDocument()
  })

  it("calls signIn when clicked", () => {
    render(<SignInButton>Login Now</SignInButton>)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(signIn).toHaveBeenCalled()
  })
})
