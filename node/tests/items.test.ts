import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_ITEM = {
  itemId: "item_01ABCDEFGHIJKLMNOPQRSTUV",
  name: "Coffee",
  unitPriceMoney: { amount: "500", currency: "USD" },
  type: 1, // PRODUCT
  status: 1, // ACTIVE
  categories: ["drinks"],
  inventoryHistory: [],
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("ItemService", () => {
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

  it("should create an item", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ item: MOCK_ITEM }), { status: 200 })
    );

    const item = await flint.items.create({
      name: "Coffee",
      unitPriceMoney: { amount: 500, currency: "USD" },
      type: "product",
    });

    expect(item.itemId).toBe("item_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(item.unitPriceMoney.amount).toBe(500);
    expect(item.createdAt).toBeInstanceOf(Date);
  });

  it("should get an item by sku", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ item: { ...MOCK_ITEM, sku: "COFFEE-1" } }), { status: 200 })
    );

    const item = await flint.items.getBySKU("COFFEE-1");
    expect(item.sku).toBe("COFFEE-1");

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("GetItemBySKU");
    const body = JSON.parse(options.body);
    expect(body.sku).toBe("COFFEE-1");
  });

  it("should adjust inventory", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          item: {
            ...MOCK_ITEM,
            quantityAvailable: "10",
            inventoryHistory: [
              {
                quantityDelta: "10",
                newQuantity: "10",
                createdAt: "2026-02-01T00:00:00Z",
                changeReason: 2, // RECEIVED_STOCK
              },
            ],
          },
        }),
        { status: 200 }
      )
    );

    const item = await flint.items.adjustInventory("item_01ABCDEFGHIJKLMNOPQRSTUV", {
      quantityDelta: 10,
      changeReason: "received_stock",
    });

    expect(item.quantityAvailable).toBe(10);
    expect(item.inventoryHistory[0]!.quantityDelta).toBe(10);
  });

  it("should replace item categories", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          item: {
            ...MOCK_ITEM,
            categories: ["vip", "events"],
          },
        }),
        { status: 200 }
      )
    );

    const item = await flint.items.replaceItemCategories("item_01ABCDEFGHIJKLMNOPQRSTUV", {
      categories: ["vip", "events"],
    });

    expect(item.categories).toEqual(["vip", "events"]);

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("ReplaceItemCategories");
    const body = JSON.parse(options.body);
    expect(body.itemId).toBe("item_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(body.categories).toEqual(["vip", "events"]);
  });

  it("should delete an item", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          item: {
            ...MOCK_ITEM,
            status: 4, // DELETED
          },
        }),
        { status: 200 }
      )
    );

    const item = await flint.items.del("item_01ABCDEFGHIJKLMNOPQRSTUV");

    expect(item.status).toBe("deleted");

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("DeleteItem");
    const body = JSON.parse(options.body);
    expect(body.itemId).toBe("item_01ABCDEFGHIJKLMNOPQRSTUV");
  });
});
