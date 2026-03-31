import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_PAYMENT_LINK = {
  paymentLinkId: "pl_01ABCDEFGHIJKLMNOPQRSTUV",
  name: "Test Product",
  status: 1, // ACTIVE
  mode: 0, // STANDARD
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  lineItems: [
    {
      name: "Widget",
      quantity: "1",
      amountMoney: { amount: "1500", currency: "USD" },
    },
  ],
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("PaymentLinkService", () => {
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

  it("should create a payment link", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: MOCK_PAYMENT_LINK }), { status: 200 })
    );

    const link = await flint.paymentLinks.create({
      name: "Test Product",
      lineItems: [{ name: "Widget", quantity: 1, amountMoney: { amount: 1500, currency: "USD" } }],
    });

    expect(link.paymentLinkId).toBe("pl_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(link.name).toBe("Test Product");
    expect(link.createdAt).toBeInstanceOf(Date);

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/payment-links");
  });

  it("should get a payment link", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: MOCK_PAYMENT_LINK }), { status: 200 })
    );

    const link = await flint.paymentLinks.get("pl_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(link.paymentLinkId).toBe("pl_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/payment-links/pl_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(options.body).toBeUndefined();
  });

  it("should update a payment link", async () => {
    const updated = { ...MOCK_PAYMENT_LINK, name: "Updated Product" };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: updated }), { status: 200 })
    );

    const link = await flint.paymentLinks.update("pl_01ABCDEFGHIJKLMNOPQRSTUV", {
      name: "Updated Product",
    });

    expect(link.name).toBe("Updated Product");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.name).toBe("Updated Product");
  });

  it("should activate a payment link", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: MOCK_PAYMENT_LINK }), { status: 200 })
    );

    await flint.paymentLinks.activate("pl_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/payment-links/pl_01ABCDEFGHIJKLMNOPQRSTUV/activate");
  });

  it("should deactivate a payment link", async () => {
    const deactivated = { ...MOCK_PAYMENT_LINK, status: 2 }; // INACTIVE
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: deactivated }), { status: 200 })
    );

    await flint.paymentLinks.deactivate("pl_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/payment-links/pl_01ABCDEFGHIJKLMNOPQRSTUV/deactivate");
  });

  it("should list payment links", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ paymentLinks: [MOCK_PAYMENT_LINK], nextPageToken: "" }),
        { status: 200 }
      )
    );

    const links = [];
    for await (const l of flint.paymentLinks.list({ limit: 10 })) {
      links.push(l);
    }
    expect(links).toHaveLength(1);
    expect(links[0]!.paymentLinkId).toBe("pl_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should serialize custom field enums when replacing custom fields", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ paymentLink: MOCK_PAYMENT_LINK }), { status: 200 })
    );

    await flint.paymentLinks.replaceCustomFields("pl_01ABCDEFGHIJKLMNOPQRSTUV", {
      customFields: [
        {
          key: "shirt_size",
          label: "Shirt Size",
          type: "dropdown",
          isRequired: true,
          options: ["S", "M", "L"],
          sortOrder: 1,
        },
      ],
    });

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.custom_fields).toEqual([
      {
        key: "shirt_size",
        label: "Shirt Size",
        type: "dropdown",
        is_required: true,
        options: ["S", "M", "L"],
        sort_order: 1,
      },
    ]);
  });
});
