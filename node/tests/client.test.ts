import { describe, it, expect } from "vitest";
import { Flint } from "../src/index";

describe("Flint client", () => {
  it("should throw if no API key is provided", () => {
    expect(() => new Flint({ apiKey: "" })).toThrow("API key is required");
  });

  it("should create client with default config", () => {
    const flint = new Flint({ apiKey: "flint_test_123" });
    expect(flint.orders).toBeDefined();
    expect(flint.customers).toBeDefined();
    expect(flint.items).toBeDefined();
    expect(flint.coupons).toBeDefined();
    expect(flint.paymentLinks).toBeDefined();
    expect(flint.paymentIntents).toBeDefined();
    expect(flint.paymentMethods).toBeDefined();
    expect(flint.refunds).toBeDefined();
    expect(flint.checkoutSessions).toBeDefined();
    expect(flint.subscriptionPlans).toBeDefined();
    expect(flint.subscriptions).toBeDefined();
    expect(flint.settings).toBeDefined();
    expect(flint.analytics).toBeDefined();
    expect(flint.apiKeys).toBeDefined();
    expect(flint.devices).toBeDefined();
    expect(flint.invoices).toBeDefined();
    expect(flint.merchants).toBeDefined();
    expect(flint.users).toBeDefined();
    expect(flint.webhooks).toBeDefined();
  });

  it("should accept custom base URL", () => {
    const flint = new Flint({
      apiKey: "flint_test_123",
      baseUrl: "http://localhost:8080",
    });
    expect(flint).toBeDefined();
  });

  it("should accept custom timeout", () => {
    const flint = new Flint({
      apiKey: "flint_test_123",
      timeoutMs: 10_000,
    });
    expect(flint).toBeDefined();
  });

  it("should strip trailing slash from base URL", () => {
    // This just verifies it doesn't throw
    const flint = new Flint({
      apiKey: "flint_test_123",
      baseUrl: "http://localhost:8080/",
    });
    expect(flint).toBeDefined();
  });

  it("should reject non-positive timeout", () => {
    expect(() => new Flint({ apiKey: "flint_test_123", timeoutMs: 0 })).toThrow(
      "timeoutMs must be a positive number"
    );
  });

  it("should reject negative maxRetries", () => {
    expect(() => new Flint({ apiKey: "flint_test_123", maxRetries: -1 })).toThrow(
      "maxRetries must be a non-negative integer"
    );
  });

  it("should reject fractional maxRetries", () => {
    expect(() => new Flint({ apiKey: "flint_test_123", maxRetries: 1.5 })).toThrow(
      "maxRetries must be a non-negative integer"
    );
  });
});
