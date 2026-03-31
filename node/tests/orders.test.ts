import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_ORDER = {
  orderId: "ord_01ABCDEFGHIJKLMNOPQRSTUV",
  status: 1, // OPEN
  lineItems: [
    {
      orderLineItemId: "li_01ABCDEFGHIJKLMNOPQRSTUV",
      name: "Coffee",
      quantity: 2,
      unitPriceMoney: { amount: "500", currency: "USD" },
      grossMoney: { amount: "1000", currency: "USD" },
    },
  ],
  appliedDiscounts: [],
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
  orderActivity: [
    {
      activityId: "act_1",
      type: 1, // CREATED
      description: "Order created",
      createdAt: "2026-02-01T00:00:00Z",
    },
  ],
  source: 4, // API
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("OrderService", () => {
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

  it("should create an order", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: MOCK_ORDER }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );

    const order = await flint.orders.create({
      lineItems: [
        { name: "Coffee", quantity: 2, unitPriceMoney: { amount: 500, currency: "USD" } },
      ],
    });

    expect(order.orderId).toBe("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(order.status).toBe("open");
    expect(order.lineItems).toHaveLength(1);
    expect(order.lineItems[0]!.name).toBe("Coffee");
    expect(order.lineItems[0]!.quantity).toBe(2);
    expect(order.lineItems[0]!.unitPriceMoney.amount).toBe(500);
    expect(order.netAmounts.subtotalMoney.amount).toBe(1000);
    expect(order.netAmounts.balanceMoney.amount).toBe(1000);
    expect(order.source).toBe("api");
    expect(order.createdAt).toBeInstanceOf(Date);

    // Verify the request
    expect(fetchSpy).toHaveBeenCalledOnce();
    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toBe("http://localhost:8080/v1/orders");
    expect(options.method).toBe("POST");
    expect(options.headers["Authorization"]).toBe("Bearer flint_test_123");
    expect(options.headers["Content-Type"]).toBe("application/json");
    expect(options.headers["Idempotency-Key"]).toBeDefined();

    const body = JSON.parse(options.body);
    expect(body.line_items).toHaveLength(1);
    expect(body.line_items[0].name).toBe("Coffee");
    expect(body.idempotencyKey).toBeUndefined();
  });

  it("should get an order", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: MOCK_ORDER }), { status: 200 })
    );

    const order = await flint.orders.get("ord_01ABCDEFGHIJKLMNOPQRSTUV");

    expect(order.orderId).toBe("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(order.status).toBe("open");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toBe("http://localhost:8080/v1/orders/ord_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should list orders with auto-pagination", async () => {
    fetchSpy
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            orders: [{ ...MOCK_ORDER, orderId: "ord_1" }],
            nextPageToken: "page2",
          }),
          { status: 200 }
        )
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            orders: [{ ...MOCK_ORDER, orderId: "ord_2" }],
          }),
          { status: 200 }
        )
      );

    const orders: string[] = [];
    for await (const order of flint.orders.list({ limit: 1 })) {
      orders.push(order.orderId);
    }

    expect(orders).toEqual(["ord_1", "ord_2"]);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("should list orders as a single page", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          orders: [MOCK_ORDER],
          nextPageToken: "next",
        }),
        { status: 200 }
      )
    );

    const page = await flint.orders.list({ limit: 10 });

    expect(page.data).toHaveLength(1);
    expect(page.hasMore).toBe(true);
    expect(page.nextPageToken).toBe("next");
  });

  it("should close an order", async () => {
    const closedOrder = { ...MOCK_ORDER, status: 2 }; // CLOSED
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: closedOrder }), { status: 200 })
    );

    const order = await flint.orders.close("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(order.status).toBe("closed");
  });

  it("should add line items", async () => {
    const withItems = {
      ...MOCK_ORDER,
      lineItems: [
        ...MOCK_ORDER.lineItems,
        {
          orderLineItemId: "li_02ABCDEFGHIJKLMNOPQRSTUV",
          name: "Muffin",
          quantity: 1,
          unitPriceMoney: { amount: "350", currency: "USD" },
          grossMoney: { amount: "350", currency: "USD" },
        },
      ],
    };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: withItems }), { status: 200 })
    );

    const order = await flint.orders.addLineItems("ord_01ABCDEFGHIJKLMNOPQRSTUV", {
      lineItems: [{ name: "Muffin", quantity: 1, unitPriceMoney: { amount: 350, currency: "USD" } }],
    });

    expect(order.lineItems).toHaveLength(2);
    expect(order.lineItems[1]!.name).toBe("Muffin");
  });

  it("should apply a coupon by code", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: MOCK_ORDER }), { status: 200 })
    );

    await flint.orders.applyCoupon("ord_01ABCDEFGHIJKLMNOPQRSTUV", {
      couponCode: "SUMMER25",
    });

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.coupon_code).toBe("SUMMER25");
  });

  it("should add tips", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: MOCK_ORDER }), { status: 200 })
    );

    await flint.orders.addTips("ord_01ABCDEFGHIJKLMNOPQRSTUV", {
      tips: [{ percent: 15, name: "Server tip" }],
    });

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.tips[0].percent).toBe(15);
    expect(body.tips[0].name).toBe("Server tip");
  });

  it("should throw FlintError on API error", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          code: "not_found",
          message: "order not found",
        }),
        { status: 404 }
      )
    );

    await expect(flint.orders.get("ord_nonexistent")).rejects.toThrow("order not found");
  });

  it("should convert protobuf enum values to strings", async () => {
    const paidOrder = {
      ...MOCK_ORDER,
      status: 3, // PAID
      source: 3, // CHECKOUT
    };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: paidOrder }), { status: 200 })
    );

    const order = await flint.orders.get("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(order.status).toBe("paid");
    expect(order.source).toBe("checkout");
  });

  it("should convert protobuf enum names to strings", async () => {
    const closedOrder = {
      ...MOCK_ORDER,
      status: "ORDER_STATUS_CLOSED",
      source: "SOURCE_API",
    };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: closedOrder }), { status: 200 })
    );

    const order = await flint.orders.get("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(order.status).toBe("closed");
    expect(order.source).toBe("api");
  });

  it("should convert money string amounts to numbers", async () => {
    // Proto JSON encodes int64 as string
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ order: MOCK_ORDER }), { status: 200 })
    );

    const order = await flint.orders.get("ord_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(typeof order.lineItems[0]!.unitPriceMoney.amount).toBe("number");
    expect(order.lineItems[0]!.unitPriceMoney.amount).toBe(500);
  });
});
