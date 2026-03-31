import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_SUBSCRIPTION = {
  subscriptionId: "sub_01ABCDEFGHIJKLMNOPQRSTUV",
  planId: "plan_01ABCDEFGHIJKLMNOPQRSTUV",
  customerId: "cus_01ABCDEFGHIJKLMNOPQRSTUV",
  paymentMethodId: "pm_01ABCDEFGHIJKLMNOPQRSTUV",
  status: 2, // ACTIVE
  currentPeriodStart: "2026-02-01T00:00:00Z",
  currentPeriodEnd: "2026-03-01T00:00:00Z",
  nextBillingDate: "2026-03-01T00:00:00Z",
  cancelAtPeriodEnd: false,
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("SubscriptionService", () => {
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

  it("should create a subscription", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: MOCK_SUBSCRIPTION }), { status: 200 })
    );

    const sub = await flint.subscriptions.create({
      planId: "plan_01ABCDEFGHIJKLMNOPQRSTUV",
      customerId: "cus_01ABCDEFGHIJKLMNOPQRSTUV",
      idempotencyKey: "sub-test-1",
    });

    expect(sub.subscriptionId).toBe("sub_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(sub.createdAt).toBeInstanceOf(Date);

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.plan_id).toBe("plan_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(fetchSpy.mock.calls[0]![1].headers["Idempotency-Key"]).toBe("sub-test-1");
  });

  it("should get a subscription", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: MOCK_SUBSCRIPTION }), { status: 200 })
    );

    const sub = await flint.subscriptions.get("sub_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(sub.subscriptionId).toBe("sub_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should cancel a subscription at period end by default", async () => {
    const canceled = { ...MOCK_SUBSCRIPTION, cancelAtPeriodEnd: true };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: canceled }), { status: 200 })
    );

    const sub = await flint.subscriptions.cancel("sub_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(sub.cancelAtPeriodEnd).toBe(true);

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/subscriptions/sub_01ABCDEFGHIJKLMNOPQRSTUV/cancel");
  });

  it("should cancel a subscription immediately", async () => {
    const canceled = { ...MOCK_SUBSCRIPTION, status: 5 }; // CANCELED
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: canceled }), { status: 200 })
    );

    await flint.subscriptions.cancel("sub_01ABCDEFGHIJKLMNOPQRSTUV", {
      cancelImmediately: true,
    });

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.cancel_immediately).toBe(true);
  });

  it("should pause a subscription", async () => {
    const paused = { ...MOCK_SUBSCRIPTION, status: 3 }; // PAUSED
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: paused }), { status: 200 })
    );

    await flint.subscriptions.pause("sub_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/subscriptions/sub_01ABCDEFGHIJKLMNOPQRSTUV/pause");
  });

  it("should resume a subscription", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ subscription: MOCK_SUBSCRIPTION }), { status: 200 })
    );

    await flint.subscriptions.resume("sub_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/subscriptions/sub_01ABCDEFGHIJKLMNOPQRSTUV/resume");
  });

  it("should list subscriptions", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ subscriptions: [MOCK_SUBSCRIPTION], nextPageToken: "" }),
        { status: 200 }
      )
    );

    const subs = [];
    for await (const s of flint.subscriptions.list({ limit: 10 })) {
      subs.push(s);
    }
    expect(subs).toHaveLength(1);
    expect(subs[0]!.subscriptionId).toBe("sub_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
