import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_PAYMENT_METHOD = {
  paymentMethodId: "pm_01ABCDEFGHIJKLMNOPQRSTUV",
  customerId: "cus_01ABCDEFGHIJKLMNOPQRSTUV",
  type: 1, // CARD
  status: 1, // ACTIVE
  card: {
    brand: 1, // VISA
    last4: "4242",
    expMonth: 12,
    expYear: 2027,
  },
  processorDetails: {
    stripe: {
      paymentMethodId: "pm_stripe_test123",
    },
  },
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("PaymentMethodService", () => {
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

  it("should save a payment method for a customer", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentMethod: MOCK_PAYMENT_METHOD }), { status: 200 })
    );

    const pm = await flint.paymentMethods.save("cus_01ABCDEFGHIJKLMNOPQRSTUV", {
      idempotencyKey: "pm-test-1",
    });

    expect(pm.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(pm.createdAt).toBeInstanceOf(Date);

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.customerId).toBe("cus_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(body.idempotencyKey).toBe("pm-test-1");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("SavePaymentMethod");
  });

  it("should get a payment method", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentMethod: MOCK_PAYMENT_METHOD }), { status: 200 })
    );

    const pm = await flint.paymentMethods.get("pm_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(pm.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(pm.card?.last4).toBe("4242");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should remove a payment method", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({}), { status: 200 })
    );

    await expect(
      flint.paymentMethods.remove("pm_01ABCDEFGHIJKLMNOPQRSTUV")
    ).resolves.toBeUndefined();

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("RemovePaymentMethod");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should set a payment method as default", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentMethod: MOCK_PAYMENT_METHOD }), { status: 200 })
    );

    const pm = await flint.paymentMethods.setDefault(
      "cus_01ABCDEFGHIJKLMNOPQRSTUV",
      { paymentMethodId: "pm_01ABCDEFGHIJKLMNOPQRSTUV" }
    );
    expect(pm.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("SetDefaultPaymentMethod");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.customerId).toBe("cus_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(body.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should list payment methods for a customer", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ paymentMethods: [MOCK_PAYMENT_METHOD], nextPageToken: "" }),
        { status: 200 }
      )
    );

    const pms = [];
    for await (const pm of flint.paymentMethods.list({ customerId: "cus_01ABCDEFGHIJKLMNOPQRSTUV" })) {
      pms.push(pm);
    }
    expect(pms).toHaveLength(1);
    expect(pms[0]!.paymentMethodId).toBe("pm_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
