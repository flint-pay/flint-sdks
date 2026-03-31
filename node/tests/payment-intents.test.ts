import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_PAYMENT_INTENT = {
  paymentIntentId: "pi_01ABCDEFGHIJKLMNOPQRSTUV",
  amountMoney: { amount: "500", currency: "USD" },
  status: 1, // REQUIRES_PAYMENT_METHOD
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  source: 4, // API
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
  nextActions: [],
  activities: [],
};

describe("PaymentIntentService", () => {
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
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("should not expose non-public methods", () => {
    expect("sendReceipt" in (flint.paymentIntents as object)).toBe(false);
  });

  it("should create a payment intent", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentIntent: MOCK_PAYMENT_INTENT }), { status: 200 })
    );

    const paymentIntent = await flint.paymentIntents.create({
      amountMoney: { amount: 500, currency: "USD" },
    });

    expect(paymentIntent.paymentIntentId).toBe("pi_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(paymentIntent.amountMoney.amount).toBe(500);

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/payment-intents");
    const body = JSON.parse(options.body);
    expect(body.idempotencyKey).toBeUndefined();
    expect(options.headers["Idempotency-Key"]).toBeDefined();
  });

  it("should confirm a payment intent", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ paymentIntent: { ...MOCK_PAYMENT_INTENT, status: 2 } }),
        { status: 200 }
      )
    );

    const paymentIntent = await flint.paymentIntents.confirm("pi_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(paymentIntent.status).toBe("requires_confirmation");
  });

  it("should attach an abort signal for request timeouts", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentIntent: MOCK_PAYMENT_INTENT }), { status: 200 })
    );

    await flint.paymentIntents.create({
      amountMoney: { amount: 500, currency: "USD" },
    });

    const [, options] = fetchSpy.mock.calls[0]!;
    expect(options.signal).toBeInstanceOf(AbortSignal);
  });

  it("should surface a Flint timeout error when a request exceeds timeoutMs", async () => {
    vi.useFakeTimers();
    flint = new Flint({
      apiKey: "flint_test_123",
      baseUrl: "http://localhost:8080",
      maxRetries: 0,
      timeoutMs: 25,
    });

    fetchSpy.mockImplementationOnce(async (_url, options) => {
      const abortError = new Error("The operation was aborted.");
      abortError.name = "AbortError";

      return await new Promise<Response>((_resolve, reject) => {
        (options.signal as AbortSignal).addEventListener("abort", () => reject(abortError));
      });
    });

    const request = flint.paymentIntents.create({
      amountMoney: { amount: 500, currency: "USD" },
    });
    const assertion = expect(request).rejects.toMatchObject({
      name: "FlintError",
      type: "timeout",
      code: "REQUEST_TIMEOUT",
      httpStatus: 504,
    });

    await vi.advanceTimersByTimeAsync(25);
    await assertion;
  });

  it("should list payment intents", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentIntents: [MOCK_PAYMENT_INTENT] }), { status: 200 })
    );

    const paymentIntents = [];
    for await (const paymentIntent of flint.paymentIntents.list({ limit: 10 })) {
      paymentIntents.push(paymentIntent);
    }

    expect(paymentIntents).toHaveLength(1);
    expect(paymentIntents[0]!.paymentIntentId).toBe("pi_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
