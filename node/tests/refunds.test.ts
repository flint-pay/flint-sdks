import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_REFUND = {
  refundId: "ref_01ABCDEFGHIJKLMNOPQRSTUV",
  amountMoney: { amount: "500", currency: "USD" },
  status: 1, // PENDING
  reason: 1, // DUPLICATE
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
  nextActions: [],
};

describe("RefundService", () => {
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

  it("should create a refund", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ refund: MOCK_REFUND }), { status: 200 })
    );

    const refund = await flint.refunds.create({
      paymentIntentId: "pi_01ABCDEFGHIJKLMNOPQRSTUV",
      amountMoney: { amount: 500, currency: "USD" },
      reason: "duplicate",
    });

    expect(refund.refundId).toBe("ref_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(refund.amountMoney.amount).toBe(500);
  });

  it("should update a refund", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ refund: { ...MOCK_REFUND, metadata: { source: "support" } } }), {
        status: 200,
      })
    );

    const refund = await flint.refunds.update("ref_01ABCDEFGHIJKLMNOPQRSTUV", {
      metadata: { source: "support" },
    });

    expect(refund.metadata.source).toBe("support");

    const [, options] = fetchSpy.mock.calls[0]!;
    const body = JSON.parse(options.body);
    expect(body.metadata).toEqual({ source: "support" });
  });

  it("should list refunds", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ refunds: [MOCK_REFUND] }), { status: 200 })
    );

    const refunds = [];
    for await (const refund of flint.refunds.list({ limit: 10 })) {
      refunds.push(refund);
    }

    expect(refunds).toHaveLength(1);
    expect(refunds[0]!.refundId).toBe("ref_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
