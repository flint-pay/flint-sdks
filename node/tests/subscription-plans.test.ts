import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_PLAN = {
  planId: "plan_01ABCDEFGHIJKLMNOPQRSTUV",
  name: "Pro Monthly",
  billingInterval: 1, // MONTHLY
  currency: "USD",
  lineItems: [
    {
      name: "Pro subscription",
      unitPriceMoney: { amount: "2900", currency: "USD" },
    },
  ],
  status: 1, // ACTIVE
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("SubscriptionPlanService", () => {
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

  it("should create a subscription plan", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ plan: MOCK_PLAN }), { status: 200 })
    );

    const plan = await flint.subscriptionPlans.create({
      name: "Pro Monthly",
      billingInterval: "monthly",
      currency: "USD",
      lineItems: [{ name: "Pro subscription", quantity: 1, unitPriceMoney: { amount: 2900, currency: "USD" } }],
    });

    expect(plan.planId).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(plan.name).toBe("Pro Monthly");
    expect(plan.createdAt).toBeInstanceOf(Date);

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("CreateSubscriptionPlan");
  });

  it("should get a subscription plan", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ plan: MOCK_PLAN }), { status: 200 })
    );

    const plan = await flint.subscriptionPlans.get("plan_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(plan.planId).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.planId).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should update a subscription plan", async () => {
    const updated = { ...MOCK_PLAN, name: "Pro Monthly v2" };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ plan: updated }), { status: 200 })
    );

    const plan = await flint.subscriptionPlans.update("plan_01ABCDEFGHIJKLMNOPQRSTUV", {
      name: "Pro Monthly v2",
    });

    expect(plan.name).toBe("Pro Monthly v2");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.name).toBe("Pro Monthly v2");
  });

  it("should archive a subscription plan", async () => {
    const archived = { ...MOCK_PLAN, status: 2 }; // ARCHIVED
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ plan: archived }), { status: 200 })
    );

    const plan = await flint.subscriptionPlans.archive("plan_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(plan.planId).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("ArchiveSubscriptionPlan");
  });

  it("should list subscription plans", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ subscriptionPlans: [MOCK_PLAN], nextPageToken: "" }),
        { status: 200 }
      )
    );

    const plans = [];
    for await (const p of flint.subscriptionPlans.list({ limit: 10 })) {
      plans.push(p);
    }
    expect(plans).toHaveLength(1);
    expect(plans[0]!.planId).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
