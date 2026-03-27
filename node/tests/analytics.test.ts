import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Flint } from "../src";

describe("AnalyticsService", () => {
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

  it("should fetch overview analytics", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          overview: {
            range: 3,
            timezone: "America/New_York",
            grossVolume: { currentMoney: { amount: "1000", currency: "USD" } },
            netVolume: { currentMoney: { amount: "900", currency: "USD" } },
            refundsTotal: { currentMoney: { amount: "100", currency: "USD" } },
            paymentsCount: { currentCount: 10 },
            averagePayment: { currentMoney: { amount: "100", currency: "USD" } },
            newCustomers: { currentCount: 2 },
            activeSubscriptions: { currentCount: 3 },
            hasMultipleCurrencies: false,
            currencies: ["USD"],
          },
        }),
        { status: 200 }
      )
    );

    const overview = await flint.analytics.getOverview({ range: "last_30_days" });

    expect(overview.range).toBe("last_30_days");
    expect(overview.grossVolume.currentMoney.amount).toBe(1000);

    const [, options] = fetchSpy.mock.calls[0]!;
    const body = JSON.parse(options.body);
    expect(body.range).toBe(3);
  });
});
