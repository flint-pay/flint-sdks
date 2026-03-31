import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint, FlintError } from "../src/index";

const MOCK_CUSTOMER = {
  customerId: "cus_01ABCDEFGHIJKLMNOPQRSTUV",
  name: "Jane Doe",
  email: "jane@example.com",
  billingAddress: {
    line1: "123 Main St",
    city: "San Francisco",
    state: "CA",
    postalCode: "94102",
    country: "US",
  },
  metadata: { plan: "pro" },
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("CustomerService", () => {
  let flint: Flint;
  let fetchSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    flint = new Flint({
      apiKey: "flint_test_123",
      baseUrl: "http://localhost:8080",
      maxRetries: 0,
    });
    fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should create a customer", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ customer: MOCK_CUSTOMER }), { status: 200 })
    );

    const customer = await flint.customers.create({
      name: "Jane Doe",
      email: "jane@example.com",
    });

    expect(customer.customerId).toBe("cus_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(customer.name).toBe("Jane Doe");
    expect(customer.email).toBe("jane@example.com");
    expect(customer.billingAddress?.line1).toBe("123 Main St");
    expect(customer.createdAt).toBeInstanceOf(Date);
  });

  it("should list customers with an email filter", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ data: [MOCK_CUSTOMER] }), { status: 200 })
    );

    const page = await flint.customers.list({ email: "jane@example.com" });
    const customer = page.data[0]!;
    expect(customer.email).toBe("jane@example.com");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/customers");
    expect(url).toContain("email=jane%40example.com");
  });

  it("should update a customer", async () => {
    const updated = { ...MOCK_CUSTOMER, name: "Jane Smith" };
    fetchSpy.mockResolvedValueOnce(new Response(JSON.stringify({ data: updated }), { status: 200 }));

    const customer = await flint.customers.update("cus_01ABCDEFGHIJKLMNOPQRSTUV", {
      name: "Jane Smith",
    });

    expect(customer.name).toBe("Jane Smith");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.name).toBe("Jane Smith");
  });

  it("should throw FlintError on auth failure", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          code: "unauthenticated",
          message: "invalid API key",
        }),
        { status: 401 }
      )
    );

    try {
      await flint.customers.get("cus_123");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(FlintError);
      const flintErr = err as FlintError;
      expect(flintErr.type).toBe("authentication");
      expect(flintErr.httpStatus).toBe(401);
    }
  });
});
