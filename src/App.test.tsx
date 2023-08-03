import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  test("App has text", async () => {
    const wrapper = render(<App />);
    expect(wrapper.getByText(/Some Text/i)).toBeTruthy();
  });
});
