import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Flint } from "../src";

describe("InvoiceService", () => {
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

  it("should send an invoice and return delivery metadata", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          invoice: {
            invoiceId: "inv_01ABCDEFGHIJKLMNOPQRSTUVWX",
            merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUVWX",
            orderId: "ord_01ABCDEFGHIJKLMNOPQRSTUVWX",
            invoiceNumber: "INV-1001",
            status: 2,
            refundStatus: 1,
            snapshot: {
              lineItems: [],
              discounts: [],
              tips: [],
              netAmounts: {
                subtotalMoney: { amount: "1000", currency: "USD" },
                discountMoney: { amount: "0", currency: "USD" },
                taxMoney: { amount: "0", currency: "USD" },
                tipMoney: { amount: "0", currency: "USD" },
                paidMoney: { amount: "0", currency: "USD" },
                refundedMoney: { amount: "0", currency: "USD" },
                balanceMoney: { amount: "1000", currency: "USD" },
              },
            },
            collectibleBalance: { amount: "1000", currency: "USD" },
            paidMoney: { amount: "0", currency: "USD" },
            refundedMoney: { amount: "0", currency: "USD" },
            isOverdue: false,
            createdAt: "2026-03-01T00:00:00Z",
            updatedAt: "2026-03-01T00:00:00Z",
            metadata: {},
            ccEmails: [],
          },
          publicToken: "tok_public_123",
          publicUrl: "https://pay.withflintpay.com/invoice/test",
          deliveryAttempt: {
            invoiceDeliveryAttemptId: "invdel_01ABCDEFGHIJKLMNOPQRST",
            kind: 1,
            channel: 1,
            toEmail: "billing@example.com",
            ccEmails: [],
            status: 2,
            createdAt: "2026-03-01T00:00:00Z",
            sentAt: "2026-03-01T00:00:01Z",
          },
        }),
        { status: 200 }
      )
    );

    const result = await flint.invoices.send("inv_01ABCDEFGHIJKLMNOPQRSTUVWX");

    expect(result.invoice.invoiceId).toBe("inv_01ABCDEFGHIJKLMNOPQRSTUVWX");
    expect(result.publicUrl).toContain("/invoice/test");
    expect(result.deliveryAttempt?.status).toBe("sent");
  });
});
