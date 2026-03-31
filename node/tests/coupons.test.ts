import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_COUPON = {
  couponId: "cpn_01ABCDEFGHIJKLMNOPQRSTUV",
  name: "Summer Sale",
  couponCode: "SUMMER25",
  status: 1, // ACTIVE
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
  isStackable: true,
  discountCalculationBasis: 1, // SUBTOTAL_PRE_TAX
};

describe("CouponService", () => {
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

  it("should create a coupon", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ coupon: MOCK_COUPON }), { status: 200 })
    );

    const coupon = await flint.coupons.create({
      name: "Summer Sale",
      couponCode: "SUMMER25",
      isStackable: true,
      discountCalculationBasis: "subtotal_pre_tax",
      percentOff: 25,
    });

    expect(coupon.couponId).toBe("cpn_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(coupon.createdAt).toBeInstanceOf(Date);

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/coupons");
    const body = JSON.parse(options.body);
    expect(body.coupon_code).toBe("SUMMER25");
    expect(body.percent_off).toBe(25);
  });

  it("should list coupons with a query filter", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ data: [MOCK_COUPON] }), { status: 200 })
    );

    const page = await flint.coupons.list({ query: "SUMMER25" });
    const coupon = page.data[0]!;
    expect(coupon.couponCode).toBe("SUMMER25");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/coupons");
    expect(url).toContain("query=SUMMER25");
  });

  it("should get a coupon by code", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ data: [MOCK_COUPON] }), { status: 200 })
    );

    const coupon = await flint.coupons.getByCode("SUMMER25");

    expect(coupon?.couponCode).toBe("SUMMER25");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/coupons");
    expect(url).toContain("code=SUMMER25");
  });

  it("should list coupons", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ coupons: [MOCK_COUPON] }), { status: 200 })
    );

    const coupons = [];
    for await (const coupon of flint.coupons.list({ limit: 10 })) {
      coupons.push(coupon);
    }

    expect(coupons).toHaveLength(1);
    expect(coupons[0]!.couponId).toBe("cpn_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should replace coupon item restrictions", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          coupon: {
            ...MOCK_COUPON,
            limitToItemIds: ["item_01ABCDEFGHIJKLMNOPQRSTUV", "item_02ABCDEFGHIJKLMNOPQRSTUV"],
          },
        }),
        { status: 200 }
      )
    );

    const coupon = await flint.coupons.replaceCouponLimitToItems("cpn_01ABCDEFGHIJKLMNOPQRSTUV", {
      limitToItemIds: ["item_01ABCDEFGHIJKLMNOPQRSTUV", "item_02ABCDEFGHIJKLMNOPQRSTUV"],
    });

    expect(coupon.limitToItemIds).toEqual([
      "item_01ABCDEFGHIJKLMNOPQRSTUV",
      "item_02ABCDEFGHIJKLMNOPQRSTUV",
    ]);

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/coupons/cpn_01ABCDEFGHIJKLMNOPQRSTUV/limit-to-items/replace");
    const body = JSON.parse(options.body);
    expect(body.limit_to_item_ids).toEqual([
      "item_01ABCDEFGHIJKLMNOPQRSTUV",
      "item_02ABCDEFGHIJKLMNOPQRSTUV",
    ]);
  });

  it("should delete a coupon", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          coupon: {
            ...MOCK_COUPON,
            status: 5, // DELETED
          },
        }),
        { status: 200 }
      )
    );

    const coupon = await flint.coupons.del("cpn_01ABCDEFGHIJKLMNOPQRSTUV");

    expect(coupon.status).toBe("deleted");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/coupons/cpn_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
