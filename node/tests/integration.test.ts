import { describe, it, expect, beforeAll } from "vitest";
import { Flint, FlintError } from "../src/index";

const API_KEY = process.env.FLINT_TEST_API_KEY;
const BASE_URL = process.env.FLINT_TEST_BASE_URL ?? "https://api.staging.withflintpay.com";

// Shared state across tests — populated by earlier tests, consumed by later ones
let flint: Flint;
let testRunId: string;

let customerId: string;
let itemId: string;
let itemId2: string;
let couponId: string;
let couponCode: string;
let orderId: string;
let orderLineItemId: string;
let tipId: string;
let appliedDiscountId: string;
let order2Id: string;
let paymentIntentId: string;
let checkoutSessionId: string;
let paymentMethodId: string;
let merchantId: string;
let paymentLinkId: string;
let subscriptionPlanId: string;
let invoiceId: string;
let apiKeyId: string;
let deviceId: string;
let webhookEndpointId: string;
let userId: string;

describe.skipIf(!API_KEY)("Integration Tests", () => {
  beforeAll(() => {
    flint = new Flint({
      apiKey: API_KEY!,
      baseUrl: BASE_URL,
    });
    testRunId = String(Date.now());
  });

  // ==========================================================================
  // CustomerService
  // ==========================================================================
  describe("CustomerService", () => {
    it("should create a customer with full address and optional fields", async () => {
      const customer = await flint.customers.create({
        name: `Test Customer ${testRunId}`,
        email: `test-${testRunId}@integration.test`,
        billingAddress: {
          line1: "123 Test St",
          line2: "Suite 100",
          city: "San Francisco",
          state: "CA",
          postalCode: "94102",
          country: "US",
        },
        shippingAddress: {
          line1: "456 Ship Ln",
          city: "Oakland",
          state: "CA",
          postalCode: "94612",
          country: "US",
        },
        phoneNumber: "+15551234567",
        merchantNote: "VIP test customer",
        buyerNote: "Prefers express shipping",
        metadata: { testRunId },
      });

      expect(customer.customerId).toMatch(/^cus_/);
      expect(customer.name).toBe(`Test Customer ${testRunId}`);
      expect(customer.email).toBe(`test-${testRunId}@integration.test`);
      // Billing address with line2
      expect(customer.billingAddress?.line1).toBe("123 Test St");
      expect(customer.billingAddress?.line2).toBe("Suite 100");
      expect(customer.billingAddress?.city).toBe("San Francisco");
      expect(customer.billingAddress?.state).toBe("CA");
      expect(customer.billingAddress?.postalCode).toBe("94102");
      expect(customer.billingAddress?.country).toBe("US");
      // Shipping address
      expect(customer.shippingAddress?.line1).toBe("456 Ship Ln");
      expect(customer.shippingAddress?.city).toBe("Oakland");
      // Optional fields
      expect(customer.phoneNumber).toBe("+15551234567");
      expect(customer.merchantNote).toBe("VIP test customer");
      expect(customer.buyerNote).toBe("Prefers express shipping");
      expect(customer.metadata.testRunId).toBe(testRunId);
      expect(customer.merchantId).toBeDefined();
      expect(customer.createdAt).toBeInstanceOf(Date);
      expect(customer.updatedAt).toBeInstanceOf(Date);

      customerId = customer.customerId;
      merchantId = customer.merchantId;
    });

    it("should get a customer by ID", async () => {
      const customer = await flint.customers.get(customerId);

      expect(customer.customerId).toBe(customerId);
      expect(customer.name).toBe(`Test Customer ${testRunId}`);
    });

    it("should get a customer by email", async () => {
      const customer = await flint.customers.getByEmail(`test-${testRunId}@integration.test`);

      expect(customer.customerId).toBe(customerId);
      expect(customer.email).toBe(`test-${testRunId}@integration.test`);
    });

    it("should update a customer name", async () => {
      const customer = await flint.customers.update(customerId, {
        name: `Updated Customer ${testRunId}`,
      });

      expect(customer.name).toBe(`Updated Customer ${testRunId}`);
      expect(customer.customerId).toBe(customerId);
    });

    it("should update a customer billing address", async () => {
      const customer = await flint.customers.update(customerId, {
        billingAddress: {
          line1: "789 Updated Blvd",
          city: "Los Angeles",
          state: "CA",
          postalCode: "90001",
          country: "US",
        },
      });

      expect(customer.billingAddress?.line1).toBe("789 Updated Blvd");
      expect(customer.billingAddress?.city).toBe("Los Angeles");
    });

    it("should list customers", async () => {
      const page = await flint.customers.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.customerId).toMatch(/^cus_/);
      expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
    });

    it("should list customers with sort and date filter", async () => {
      const page = await flint.customers.list({
        limit: 5,
        sortField: "created_at",
        sortDirection: "desc",
        createdAfter: new Date("2020-01-01"),
      });

      expect(page.data.length).toBeGreaterThan(0);
      // Verify descending order — first should be newer than last
      if (page.data.length >= 2) {
        expect(page.data[0]!.createdAt.getTime()).toBeGreaterThanOrEqual(
          page.data[page.data.length - 1]!.createdAt.getTime()
        );
      }
    });

    it("should auto-paginate customers", async () => {
      const customers: string[] = [];
      let count = 0;
      for await (const customer of flint.customers.list({ limit: 2 })) {
        customers.push(customer.customerId);
        count++;
        if (count >= 3) break;
      }
      expect(customers.length).toBeGreaterThan(0);
      expect(customers.every((id) => id.startsWith("cus_"))).toBe(true);
    });
  });

  // ==========================================================================
  // ItemService
  // ==========================================================================
  describe("ItemService", () => {
    it("should create an item", async () => {
      const item = await flint.items.create({
        name: `Integration Widget ${testRunId}`,
        unitPriceMoney: { amount: 1500, currency: "USD" },
        type: "product",
        sku: `SKU-INT-${testRunId}`,
        description: "Test item for integration tests",
        categories: ["test", "integration"],
        metadata: { testRunId },
      });

      expect(item.itemId).toMatch(/^item_/);
      expect(item.name).toBe(`Integration Widget ${testRunId}`);
      expect(item.unitPriceMoney.amount).toBe(1500);
      expect(typeof item.unitPriceMoney.amount).toBe("number");
      expect(item.unitPriceMoney.currency).toBe("USD");
      expect(item.sku).toBe(`SKU-INT-${testRunId}`);
      expect(item.categories).toContain("test");
      expect(item.categories).toContain("integration");
      expect(item.type).toBe("product");
      expect(item.status).toBe("active");
      expect(item.createdAt).toBeInstanceOf(Date);

      itemId = item.itemId;
    });

    it("should create a service-type item", async () => {
      const item = await flint.items.create({
        name: `Integration Service ${testRunId}`,
        unitPriceMoney: { amount: 2500, currency: "USD" },
        type: "service",
        sku: `SKU-INT2-${testRunId}`,
        metadata: { testRunId },
      });

      expect(item.itemId).toMatch(/^item_/);
      expect(item.type).toBe("service");
      itemId2 = item.itemId;
    });

    it("should get an item", async () => {
      const item = await flint.items.get(itemId);

      expect(item.itemId).toBe(itemId);
      expect(item.name).toBe(`Integration Widget ${testRunId}`);
    });

    it("should get an item by SKU", async () => {
      const item = await flint.items.getBySKU(`SKU-INT-${testRunId}`);

      expect(item.itemId).toBe(itemId);
      expect(item.sku).toBe(`SKU-INT-${testRunId}`);
    });

    it("should update an item", async () => {
      const item = await flint.items.update(itemId, {
        description: "Updated description",
      });

      expect(item.description).toBe("Updated description");
    });

    it("should adjust inventory", async () => {
      const item = await flint.items.adjustInventory(itemId, {
        quantityDelta: 50,
        note: "Initial stock for integration test",
        changeReason: "received_stock",
      });

      expect(item.quantityAvailable).toBe(50);
      expect(item.inventoryHistory.length).toBeGreaterThan(0);
      const histEntry = item.inventoryHistory[0]!;
      expect(histEntry.createdAt).toBeInstanceOf(Date);
      expect(typeof histEntry.quantityDelta).toBe("number");
      expect(typeof histEntry.newQuantity).toBe("number");
      expect(histEntry.changeReason).toBe("received_stock");
      expect(histEntry.note).toBe("Initial stock for integration test");
    });

    it("should adjust inventory with negative delta", async () => {
      const item = await flint.items.adjustInventory(itemId, {
        quantityDelta: -10,
        note: "Sold some units",
        changeReason: "order_fulfillment",
      });

      expect(item.quantityAvailable).toBe(40);
      expect(typeof item.quantityAvailable).toBe("number");
    });

    it("should add item categories", async () => {
      const item = await flint.items.addItemCategories(itemId, {
        categories: ["seasonal"],
      });

      expect(item.categories).toContain("seasonal");
    });

    it("should remove item categories", async () => {
      const item = await flint.items.removeItemCategories(itemId, {
        categories: ["seasonal"],
      });

      expect(item.categories).not.toContain("seasonal");
    });

    it("should replace item categories", async () => {
      const item = await flint.items.replaceItemCategories(itemId, {
        categories: ["replaced-category"],
      });

      expect(item.categories).toEqual(["replaced-category"]);
    });

    it("should list items", async () => {
      const page = await flint.items.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.itemId).toMatch(/^item_/);
      expect(typeof page.data[0]!.unitPriceMoney.amount).toBe("number");
    });

    it("should list items with type filter", async () => {
      const page = await flint.items.list({ limit: 5, type: "product", status: "active" });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((i) => i.type === "product")).toBe(true);
      expect(page.data.every((i) => i.status === "active")).toBe(true);
    });

    it("should delete both items", async () => {
      const deleted1 = await flint.items.del(itemId);
      expect(deleted1.itemId).toBe(itemId);

      const deleted2 = await flint.items.del(itemId2);
      expect(deleted2.itemId).toBe(itemId2);
    });
  });

  // ==========================================================================
  // CouponService
  // ==========================================================================
  describe("CouponService", () => {
    it("should create a coupon", async () => {
      couponCode = `INT-${testRunId}`;
      const coupon = await flint.coupons.create({
        name: `Integration Coupon ${testRunId}`,
        couponCode,
        percentOff: 10,
        description: "10% off for integration testing",
        maxUses: 100,
        metadata: { testRunId },
      });

      expect(coupon.couponId).toMatch(/^cpn_/);
      expect(coupon.name).toBe(`Integration Coupon ${testRunId}`);
      expect(coupon.couponCode).toBe(couponCode);
      expect(coupon.percentOff).toBe(10);
      expect(coupon.status).toBe("active");
      expect(coupon.metadata.testRunId).toBe(testRunId);
      expect(coupon.createdAt).toBeInstanceOf(Date);

      couponId = coupon.couponId;
    });

    it("should get a coupon", async () => {
      const coupon = await flint.coupons.get(couponId);

      expect(coupon.couponId).toBe(couponId);
      expect(coupon.percentOff).toBe(10);
    });

    it("should get a coupon by code", async () => {
      const coupon = await flint.coupons.getByCode(couponCode);

      expect(coupon.couponId).toBe(couponId);
      expect(coupon.couponCode).toBe(couponCode);
    });

    it("should update a coupon", async () => {
      const coupon = await flint.coupons.update(couponId, {
        description: "Updated coupon description",
      });

      expect(coupon.description).toBe("Updated coupon description");
    });

    it("should add and remove coupon limit to items", async () => {
      // Create temporary items to limit the coupon to
      const tempItem1 = await flint.items.create({
        name: `Coupon Limit Item A ${testRunId}`,
        unitPriceMoney: { amount: 999, currency: "USD" },
        type: "product",
      });
      const tempItem2 = await flint.items.create({
        name: `Coupon Limit Item B ${testRunId}`,
        unitPriceMoney: { amount: 999, currency: "USD" },
        type: "product",
      });

      // Add both items as limits
      const added = await flint.coupons.addCouponLimitToItems(couponId, {
        limitToItemIds: [tempItem1.itemId, tempItem2.itemId],
      });
      expect(added.limitToItemIds).toContain(tempItem1.itemId);
      expect(added.limitToItemIds).toContain(tempItem2.itemId);

      // Remove one specific item via removeCouponLimitToItems
      const removed = await flint.coupons.removeCouponLimitToItems(couponId, {
        limitToItemIds: [tempItem1.itemId],
      });
      expect(removed.limitToItemIds).not.toContain(tempItem1.itemId);
      expect(removed.limitToItemIds).toContain(tempItem2.itemId);

      // Replace with empty to clear all limits
      const replaced = await flint.coupons.replaceCouponLimitToItems(couponId, {
        limitToItemIds: [],
      });
      expect(replaced.limitToItemIds?.length ?? 0).toBe(0);

      // Clean up temp items
      await flint.items.del(tempItem1.itemId);
      await flint.items.del(tempItem2.itemId);
    });

    it("should create a coupon with expiresAt and discountCalculationBasis", async () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);

      const coupon = await flint.coupons.create({
        name: `Expiring Coupon ${testRunId}`,
        couponCode: `EXP-${testRunId}`,
        percentOff: 5,
        expiresAt: futureDate,
        isStackable: true,
        discountCalculationBasis: "subtotal_pre_tax",
        minimumPurchaseAmount: { amount: 1000, currency: "USD" },
      });

      expect(coupon.couponId).toMatch(/^cpn_/);
      expect(coupon.expiresAt).toBeInstanceOf(Date);
      expect(coupon.expiresAt!.getFullYear()).toBe(futureDate.getFullYear());
      expect(coupon.isStackable).toBe(true);
      expect(coupon.discountCalculationBasis).toBe("subtotal_pre_tax");
      expect(coupon.minimumPurchaseAmount?.amount).toBe(1000);
      expect(typeof coupon.minimumPurchaseAmount?.amount).toBe("number");

      // Clean up
      await flint.coupons.del(coupon.couponId);
    });

    it("should create a coupon with amountOff", async () => {
      const coupon = await flint.coupons.create({
        name: `Amount Off Coupon ${testRunId}`,
        couponCode: `AMT-${testRunId}`,
        amountOffMoney: { amount: 500, currency: "USD" },
      });

      expect(coupon.couponId).toMatch(/^cpn_/);
      expect(coupon.amountOffMoney?.amount).toBe(500);
      expect(coupon.amountOffMoney?.currency).toBe("USD");
      expect(coupon.percentOff).toBeUndefined();

      // Clean up
      await flint.coupons.del(coupon.couponId);
    });

    it("should list coupons", async () => {
      const page = await flint.coupons.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.couponId).toMatch(/^cpn_/);
      expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
    });

    it("should list coupons filtered by status", async () => {
      const page = await flint.coupons.list({ limit: 5, status: "active" });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((c) => c.status === "active")).toBe(true);
    });
  });

  // ==========================================================================
  // OrderService
  // ==========================================================================
  describe("OrderService", () => {
    it("should create an order with line items and customer", async () => {
      const order = await flint.orders.create({
        lineItems: [
          {
            name: "Integration Item A",
            quantity: 2,
            unitPriceMoney: { amount: 1000, currency: "USD" },
            metadata: {},
          },
          {
            name: "Integration Item B",
            quantity: 1,
            unitPriceMoney: { amount: 500, currency: "USD" },
            metadata: {},
          },
        ],
        customerId,
        metadata: { testRunId },
      });

      expect(order.orderId).toMatch(/^ord_/);
      expect(order.status).toBe("open");
      expect(order.merchantId).toBeDefined();
      expect(order.orderNumber).toBeDefined();
      expect(typeof order.orderNumber).toBe("string");

      // LineItem fields
      expect(order.lineItems).toHaveLength(2);
      const li = order.lineItems[0]!;
      expect(li.orderLineItemId).toBeDefined();
      expect(li.name).toBe("Integration Item A");
      expect(li.quantity).toBe(2);
      expect(typeof li.unitPriceMoney.amount).toBe("number");
      expect(li.unitPriceMoney.amount).toBe(1000);
      expect(li.grossMoney.amount).toBe(2000);
      expect(typeof li.discountMoney.amount).toBe("number");
      expect(typeof li.taxMoney.amount).toBe("number");
      expect(typeof li.netMoney.amount).toBe("number");
      expect(li.metadata).toBeDefined();

      // Customer
      expect(order.customerId).toBe(customerId);

      // NetAmounts — all fields present and typed
      expect(order.netAmounts.subtotalMoney.amount).toBe(2500);
      expect(order.netAmounts.balanceMoney.amount).toBe(2500);
      expect(typeof order.netAmounts.discountMoney.amount).toBe("number");
      expect(typeof order.netAmounts.taxMoney.amount).toBe("number");
      expect(typeof order.netAmounts.tipMoney.amount).toBe("number");
      expect(typeof order.netAmounts.paidMoney.amount).toBe("number");
      expect(typeof order.netAmounts.refundedMoney.amount).toBe("number");

      // Source enum
      expect(order.source).toBe("api");

      // Activities
      expect(order.activities.length).toBeGreaterThan(0);
      const activity = order.activities[0]!;
      expect(activity.activityId).toBeDefined();
      expect(activity.type).toBe("created");
      expect(activity.description).toBeDefined();
      expect(typeof activity.balanceDelta.amount).toBe("number");
      expect(typeof activity.runningBalance.amount).toBe("number");
      expect(activity.createdAt).toBeInstanceOf(Date);

      // Arrays default to empty
      expect(Array.isArray(order.paymentIntentIds)).toBe(true);
      expect(Array.isArray(order.refundIds)).toBe(true);
      expect(Array.isArray(order.checkoutSessionIds)).toBe(true);
      expect(Array.isArray(order.nextActions)).toBe(true);

      expect(order.createdAt).toBeInstanceOf(Date);
      expect(order.updatedAt).toBeInstanceOf(Date);
      expect(order.metadata.testRunId).toBe(testRunId);

      orderId = order.orderId;
      orderLineItemId = order.lineItems[1]!.orderLineItemId;
    });

    it("should get an order", async () => {
      const order = await flint.orders.get(orderId);

      expect(order.orderId).toBe(orderId);
      expect(order.status).toBe("open");
      expect(order.lineItems.length).toBe(2);
    });

    it("should update an order", async () => {
      const order = await flint.orders.update(orderId, {
        merchantNote: "Updated by integration test",
      });

      expect(order.merchantNote).toBe("Updated by integration test");
    });

    it("should update an order with buyerNote and metadata", async () => {
      const order = await flint.orders.update(orderId, {
        buyerNote: "Please wrap as gift",
        metadata: { testRunId, gift: "true" },
      });

      expect(order.buyerNote).toBe("Please wrap as gift");
      expect(order.metadata.gift).toBe("true");
    });

    it("should add line items", async () => {
      const order = await flint.orders.addLineItems(orderId, {
        lineItems: [
          {
            name: "Integration Item C",
            quantity: 1,
            unitPriceMoney: { amount: 750, currency: "USD" },
            metadata: {},
          },
        ],
      });

      expect(order.lineItems).toHaveLength(3);
      const newItem = order.lineItems.find((li) => li.name === "Integration Item C");
      expect(newItem).toBeDefined();
      expect(newItem!.unitPriceMoney.amount).toBe(750);
    });

    it("should update a line item", async () => {
      const order = await flint.orders.updateLineItem(orderId, {
        orderLineItemId: orderLineItemId,
        quantity: 3,
      });

      const updatedItem = order.lineItems.find((li) => li.orderLineItemId === orderLineItemId);
      expect(updatedItem!.quantity).toBe(3);
    });

    it("should remove line items", async () => {
      const order = await flint.orders.removeLineItems(orderId, {
        orderLineItemIds: [orderLineItemId],
      });

      expect(order.lineItems).toHaveLength(2);
      expect(order.lineItems.find((li) => li.orderLineItemId === orderLineItemId)).toBeUndefined();
    });

    it("should add a percentage tip", async () => {
      const order = await flint.orders.addTips(orderId, {
        tips: [{ percent: 15, name: "Server tip", metadata: {} }],
      });

      expect(order.tips.length).toBeGreaterThan(0);
      const tip = order.tips[0]!;
      expect(tip.tipId).toBeDefined();
      expect(tip.percent).toBe(15);
      expect(tip.name).toBe("Server tip");

      tipId = tip.tipId;
    });

    it("should add a flat-money tip", async () => {
      const order = await flint.orders.addTips(orderId, {
        tips: [{ amountMoney: { amount: 300, currency: "USD" }, name: "Flat tip", metadata: {} }],
      });

      const flatTip = order.tips.find((t) => t.name === "Flat tip");
      expect(flatTip).toBeDefined();
      expect(flatTip!.amountMoney?.amount).toBe(300);
      expect(typeof flatTip!.amountMoney?.amount).toBe("number");
      expect(flatTip!.amountMoney?.currency).toBe("USD");

      // Remove the flat tip so it doesn't interfere with later tests
      await flint.orders.removeTips(orderId, { orderTipIds: [flatTip!.tipId] });
    });

    it("should update a tip", async () => {
      const order = await flint.orders.updateTip(orderId, {
        tipId,
        percent: 20,
      });

      const tip = order.tips.find((t) => t.tipId === tipId);
      expect(tip!.percent).toBe(20);
    });

    it("should remove tips", async () => {
      const order = await flint.orders.removeTips(orderId, {
        orderTipIds: [tipId],
      });

      expect(order.tips.find((t) => t.tipId === tipId)).toBeUndefined();
    });

    it("should apply a coupon", async () => {
      const order = await flint.orders.applyCoupon(orderId, {
        couponCode,
      });

      expect(order.discounts.length).toBeGreaterThan(0);
      const discount = order.discounts[0]!;
      expect(discount.appliedDiscountId).toBeDefined();
      expect(discount.name).toBeDefined();
      expect(discount.couponCode).toBe(couponCode);
      expect(discount.couponId).toBe(couponId);
      expect(discount.scope).toBe("order");
      expect(discount.status).toBe("pending");
      expect(discount.orderId).toBe(orderId);
      expect(typeof discount.amountMoney.amount).toBe("number");
      expect(typeof discount.appliedMoney.amount).toBe("number");
      expect(discount.appliedMoney.amount).toBeGreaterThan(0);
      expect(Array.isArray(discount.orderLineItemIds)).toBe(true);

      // NetAmounts should reflect the discount
      expect(order.netAmounts.discountMoney.amount).toBeGreaterThan(0);

      appliedDiscountId = discount.appliedDiscountId;
    });

    it("should remove discounts", async () => {
      const order = await flint.orders.removeDiscounts(orderId, {
        appliedDiscountIds: [appliedDiscountId],
      });

      expect(order.discounts.find((d) => d.appliedDiscountId === appliedDiscountId)).toBeUndefined();
    });

    it("should list orders", async () => {
      const page = await flint.orders.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.orderId).toMatch(/^ord_/);
      expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
      expect(typeof page.data[0]!.netAmounts.subtotalMoney.amount).toBe("number");
    });

    it("should list orders filtered by customerId", async () => {
      const page = await flint.orders.list({ limit: 5, customerId });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((o) => o.customerId === customerId)).toBe(true);
    });

    it("should list orders filtered by status", async () => {
      const page = await flint.orders.list({ limit: 5, status: "open" });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((o) => o.status === "open")).toBe(true);
    });

    it("should list orders with sort and date range", async () => {
      const page = await flint.orders.list({
        limit: 5,
        sortField: "created_at",
        sortDirection: "desc",
        createdAfter: new Date("2020-01-01"),
      });

      expect(page.data.length).toBeGreaterThan(0);
      if (page.data.length >= 2) {
        expect(page.data[0]!.createdAt.getTime()).toBeGreaterThanOrEqual(
          page.data[page.data.length - 1]!.createdAt.getTime()
        );
      }
    });

    it("should close the order", async () => {
      const order = await flint.orders.close(orderId, {
        reason: "Integration test cleanup",
      });

      expect(order.orderId).toBe(orderId);
      expect(order.status).toBe("closed");
      expect(order.closedReason).toBe("Integration test cleanup");
    });

    it("should create order2 for downstream tests", async () => {
      const order = await flint.orders.create({
        lineItems: [
          {
            name: "Downstream Test Item",
            quantity: 1,
            unitPriceMoney: { amount: 2000, currency: "USD" },
            metadata: {},
          },
        ],
        metadata: { testRunId },
      });

      expect(order.orderId).toMatch(/^ord_/);
      order2Id = order.orderId;
    });
  });

  // ==========================================================================
  // PaymentIntentService
  // ==========================================================================
  describe("PaymentIntentService", () => {
    it("should create a payment intent (auto-derives amount from order)", async () => {
      const pi = await flint.paymentIntents.create({
        orderId: order2Id,
        metadata: { testRunId },
      });

      expect(pi.paymentIntentId).toMatch(/^pi_/);
      expect(pi.amountMoney.amount).toBe(2000);
      expect(typeof pi.amountMoney.amount).toBe("number");
      expect(pi.amountMoney.currency).toBe("USD");
      expect(pi.orderId).toBe(order2Id);
      expect(pi.status).toBe("requires_payment_method");
      expect(pi.source).toBe("api");
      expect(pi.metadata.testRunId).toBe(testRunId);
      expect(pi.createdAt).toBeInstanceOf(Date);

      paymentIntentId = pi.paymentIntentId;
    });

    it("should get a payment intent with processorDetails", async () => {
      const pi = await flint.paymentIntents.get(paymentIntentId);

      expect(pi.paymentIntentId).toBe(paymentIntentId);
      expect(pi.orderId).toBe(order2Id);
      // processorDetails should be present and the stripe nested converter should run
      expect(pi.processorDetails).toBeDefined();
      expect(pi.processorDetails?.stripe).toBeDefined();
      // clientSecret/accountId may be empty strings or absent before confirmation
      expect("clientSecret" in (pi.processorDetails?.stripe ?? {})).toBe(true);
    });

    it("should update a payment intent", async () => {
      const pi = await flint.paymentIntents.update(paymentIntentId, {
        metadata: { testRunId, updated: "true" },
      });

      expect(pi.metadata.updated).toBe("true");
    });

    it("should cancel a payment intent", async () => {
      const pi = await flint.paymentIntents.cancel(paymentIntentId, {
        cancellationReason: "abandoned",
      });

      expect(pi.paymentIntentId).toBe(paymentIntentId);
      expect(pi.status).toBe("canceled");
      expect(pi.cancellationReason).toBe("abandoned");
    });

    it("should create a standalone payment intent (explicit amount, no order)", async () => {
      const pi = await flint.paymentIntents.create({
        amountMoney: { amount: 5000, currency: "USD" },
        metadata: { testRunId, standalone: "true" },
      });

      expect(pi.paymentIntentId).toMatch(/^pi_/);
      expect(pi.amountMoney.amount).toBe(5000);
      expect(pi.amountMoney.currency).toBe("USD");
      expect(pi.orderId).toBeUndefined();
      expect(pi.status).toBe("requires_payment_method");
      expect(pi.createdAt).toBeInstanceOf(Date);
      expect(pi.updatedAt).toBeInstanceOf(Date);

      // Clean up
      await flint.paymentIntents.cancel(pi.paymentIntentId, { cancellationReason: "duplicate" });
    });

    it("should list payment intents", async () => {
      const page = await flint.paymentIntents.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.paymentIntentId).toMatch(/^pi_/);
      expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
      expect(typeof page.data[0]!.amountMoney.amount).toBe("number");
    });

    it("should list payment intents filtered by orderId", async () => {
      const page = await flint.paymentIntents.list({ limit: 5, orderId: order2Id });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((pi) => pi.orderId === order2Id)).toBe(true);
    });
  });

  // ==========================================================================
  // CheckoutSessionService
  // ==========================================================================
  describe("CheckoutSessionService", () => {
    it("should create a checkout session (quickPay)", async () => {
      const session = await flint.checkoutSessions.create({
        quickPay: {
          name: `Quick Pay ${testRunId}`,
          amountMoney: { amount: 3000, currency: "USD" },
        },
        metadata: { testRunId },
      });

      expect(session.checkoutSessionId).toMatch(/^cs_/);
      expect(session.status).toBe("open");
      expect(session.orderId).toBeDefined();
      expect(session.url).toBeDefined();
      expect(session.metadata.testRunId).toBe(testRunId);
      expect(session.createdAt).toBeInstanceOf(Date);

      checkoutSessionId = session.checkoutSessionId;
    });

    it("should get a checkout session", async () => {
      const session = await flint.checkoutSessions.get(checkoutSessionId);

      expect(session.checkoutSessionId).toBe(checkoutSessionId);
      expect(session.status).toBe("open");
      expect(session.theme).toBeDefined();
      expect(session.payments).toBeDefined();
      expect(session.tip).toBeDefined();
      expect(session.customer).toBeDefined();
    });

    it("should update a checkout session", async () => {
      const session = await flint.checkoutSessions.update(checkoutSessionId, {
        metadata: { testRunId, updated: "true" },
      });

      expect(session.metadata.updated).toBe("true");
    });

    it("should list checkout sessions", async () => {
      const page = await flint.checkoutSessions.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data[0]!.checkoutSessionId).toMatch(/^cs_/);
      expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
    });

    it("should list checkout sessions filtered by status", async () => {
      const page = await flint.checkoutSessions.list({ limit: 5, status: "open" });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.every((s) => s.status === "open")).toBe(true);
    });

    it("should create a checkout session with orderId and rich config", async () => {
      // Create a fresh order for this checkout
      const order = await flint.orders.create({
        lineItems: [
          {
            name: "Checkout Config Test Item",
            quantity: 1,
            unitPriceMoney: { amount: 1500, currency: "USD" },
            metadata: {},
          },
        ],
        metadata: { testRunId },
      });

      const session = await flint.checkoutSessions.create({
        orderId: order.orderId,
        theme: { primaryColor: "#FF5733", title: "Integration Test Checkout" },
        tip: { isEnabled: true, tipPercentages: [15.0, 20.0, 25.0], isCustomTipEnabled: true },
        metadata: { testRunId },
      });

      expect(session.checkoutSessionId).toMatch(/^cs_/);
      expect(session.orderId).toBe(order.orderId);
      expect(session.theme.primaryColor).toBe("#FF5733");
      expect(session.theme.title).toBe("Integration Test Checkout");
      expect(session.tip.isEnabled).toBe(true);
      expect(session.tip.tipPercentages).toEqual([15, 20, 25]);
      expect(session.tip.isCustomTipEnabled).toBe(true);

      // Clean up
      await flint.checkoutSessions.close(session.checkoutSessionId, { reason: "test cleanup" });
      await flint.orders.close(order.orderId, { reason: "test cleanup" });
    });

    it("should create a checkout session with legal, expiration, and customer config", async () => {
      const session = await flint.checkoutSessions.create({
        quickPay: {
          name: `Config Test ${testRunId}`,
          amountMoney: { amount: 1000, currency: "USD" },
        },
        legal: {
          termsOfServiceUrl: "https://example.com/tos",
          requiresTermsOfService: true,
          refundPolicyUrl: "https://example.com/refunds",
        },
        expiration: {
          expirationSeconds: 3600,
        },
        customText: {
          checkoutButtonText: "Complete Order",
        },
        customer: {
          customerNote: "Integration test checkout",
          enableAddressAutocomplete: true,
        },
        metadata: { testRunId },
      });

      expect(session.checkoutSessionId).toMatch(/^cs_/);
      // Legal config
      expect(session.legal.termsOfServiceUrl).toBe("https://example.com/tos");
      expect(session.legal.requiresTermsOfService).toBe(true);
      expect(session.legal.refundPolicyUrl).toBe("https://example.com/refunds");
      // Expiration config
      expect(session.expiration.expirationSeconds).toBe(3600);
      // Custom text config
      expect(session.customText.checkoutButtonText).toBe("Complete Order");
      // Customer config
      expect(session.customer.customerNote).toBe("Integration test checkout");
      expect(session.customer.enableAddressAutocomplete).toBe(true);
      // Source enum
      expect(session.source).toBe("api");

      // Clean up
      await flint.checkoutSessions.close(session.checkoutSessionId, { reason: "test cleanup" });
      await flint.orders.close(session.orderId, { reason: "test cleanup" });
    });

    it("should close a checkout session", async () => {
      const session = await flint.checkoutSessions.close(checkoutSessionId, {
        reason: "Integration test cleanup",
      });

      expect(session.checkoutSessionId).toBe(checkoutSessionId);
      expect(session.status).toBe("closed");
    });
  });

  // ==========================================================================
  // RefundService
  // ==========================================================================
  describe("RefundService", () => {
    it("should fail to create a refund for an unpaid order", async () => {
      await expect(
        flint.refunds.create({
          orderId: order2Id,
          amountMoney: { amount: 100, currency: "USD" },
          reason: "requested_by_customer",
        })
      ).rejects.toThrow(FlintError);
    });

    it("should list refunds (may be empty)", async () => {
      const page = await flint.refunds.list({ limit: 5 });

      expect(Array.isArray(page.data)).toBe(true);
      if (page.data.length > 0) {
        expect(page.data[0]!.refundId).toMatch(/^ref_/);
        expect(page.data[0]!.createdAt).toBeInstanceOf(Date);
        expect(typeof page.data[0]!.amountMoney.amount).toBe("number");
      }
    });
  });

  // ==========================================================================
  // PaymentMethodService
  // ==========================================================================
  describe("PaymentMethodService", () => {
    it("should create a setup-intent-backed payment method", async () => {
      const paymentMethod = await flint.paymentMethods.save(customerId, {
        idempotencyKey: `pm-${testRunId}`,
      });

      expect(paymentMethod.paymentMethodId).toMatch(/^pm_/);
      expect(paymentMethod.customerId).toBe(customerId);
      expect(paymentMethod.status).toBe("active");
      expect(paymentMethod.processorDetails?.stripe?.clientSecret).toBeDefined();

      paymentMethodId = paymentMethod.paymentMethodId;
    });

    it("should get a payment method", async () => {
      const paymentMethod = await flint.paymentMethods.get(paymentMethodId);

      expect(paymentMethod.paymentMethodId).toBe(paymentMethodId);
      expect(paymentMethod.customerId).toBe(customerId);
    });

    it("should list payment methods for the customer", async () => {
      const page = await flint.paymentMethods.list({ customerId, limit: 10 });

      expect(page.data.some((paymentMethod) => paymentMethod.paymentMethodId === paymentMethodId)).toBe(true);
    });

    it("should set the payment method as default", async () => {
      const paymentMethod = await flint.paymentMethods.setDefault(customerId, {
        paymentMethodId,
        idempotencyKey: `pm-default-${testRunId}`,
      });

      expect(paymentMethod.paymentMethodId).toBe(paymentMethodId);
      expect(paymentMethod.customerId).toBe(customerId);
    });

  });

  // ==========================================================================
  // PaymentLinkService
  // ==========================================================================
  describe("PaymentLinkService", () => {
    it("should create, read, update, list, and toggle a payment link", async () => {
      const created = await flint.paymentLinks.create({
        name: `SDK Link ${testRunId}`,
        lineItems: [
          {
            key: "sdk-line-item",
            name: "SDK Integration Item",
            quantity: 1,
            amountMoney: { amount: 1800, currency: "USD" },
          },
        ],
        metadata: { testRunId },
      });

      expect(created.paymentLinkId).toMatch(/^pl_/);
      expect(created.name).toBe(`SDK Link ${testRunId}`);
      paymentLinkId = created.paymentLinkId;

      const fetched = await flint.paymentLinks.get(paymentLinkId);
      expect(fetched.paymentLinkId).toBe(paymentLinkId);

      const updated = await flint.paymentLinks.update(paymentLinkId, {
        name: `SDK Link ${testRunId} Updated`,
        metadata: { testRunId, updated: "true" },
      });
      expect(updated.name).toBe(`SDK Link ${testRunId} Updated`);
      expect(updated.metadata.updated).toBe("true");

      const replacedItems = await flint.paymentLinks.replaceLineItems(paymentLinkId, {
        lineItems: [
          {
            key: "sdk-line-item-2",
            name: "SDK Integration Item 2",
            quantity: 2,
            amountMoney: { amount: 950, currency: "USD" },
          },
        ],
      });
      expect(replacedItems.lineItems).toHaveLength(1);
      expect(replacedItems.lineItems[0]!.key).toBe("sdk-line-item-2");

      const replacedFields = await flint.paymentLinks.replaceCustomFields(paymentLinkId, {
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
      expect(replacedFields.customFields).toHaveLength(1);
      expect(replacedFields.customFields[0]!.key).toBe("shirt_size");

      const page = await flint.paymentLinks.list({ limit: 10, query: testRunId });
      expect(page.data.some((link) => link.paymentLinkId === paymentLinkId)).toBe(true);

      const inactive = await flint.paymentLinks.deactivate(paymentLinkId);
      expect(inactive.status).toBe("inactive");

      const active = await flint.paymentLinks.activate(paymentLinkId);
      expect(active.status).toBe("active");
    });
  });

  // ==========================================================================
  // SubscriptionPlanService
  // ==========================================================================
  describe("SubscriptionPlanService", () => {
    it("should create, read, update, list, and archive a subscription plan", async () => {
      const created = await flint.subscriptionPlans.create({
        name: `SDK Plan ${testRunId}`,
        billingInterval: "monthly",
        currency: "USD",
        lineItems: [
          {
            name: "SDK Monthly Plan",
            quantity: 1,
            unitPriceMoney: { amount: 2900, currency: "USD" },
          },
        ],
        metadata: { testRunId },
      });

      expect(created.planId).toMatch(/^plan_/);
      expect(created.name).toBe(`SDK Plan ${testRunId}`);
      subscriptionPlanId = created.planId;

      const fetched = await flint.subscriptionPlans.get(subscriptionPlanId);
      expect(fetched.planId).toBe(subscriptionPlanId);

      const updated = await flint.subscriptionPlans.update(subscriptionPlanId, {
        name: `SDK Plan ${testRunId} Updated`,
        metadata: { testRunId, updated: "true" },
      });
      expect(updated.name).toBe(`SDK Plan ${testRunId} Updated`);

      const page = await flint.subscriptionPlans.list({ limit: 10, query: testRunId });
      expect(page.data.some((plan) => plan.planId === subscriptionPlanId)).toBe(true);

      const archived = await flint.subscriptionPlans.archive(subscriptionPlanId);
      expect(archived.status).toBe("archived");
    });
  });

  // ==========================================================================
  // SubscriptionService
  // ==========================================================================
  describe("SubscriptionService", () => {
    it("should list subscriptions and hydrate dates", async () => {
      const page = await flint.subscriptions.list({ limit: 5 });

      expect(Array.isArray(page.data)).toBe(true);
      if (page.data.length > 0) {
        const subscription = await flint.subscriptions.get(page.data[0]!.subscriptionId);
        expect(subscription.subscriptionId).toBe(page.data[0]!.subscriptionId);
        expect(subscription.createdAt).toBeInstanceOf(Date);
      }
    });
  });

  // ==========================================================================
  // SettingsService
  // ==========================================================================
  describe("SettingsService", () => {
    it("should get and round-trip merchant settings", async () => {
      const current = await flint.settings.get({ scope: "merchant" });

      expect(current.settingsId).toMatch(/^set_/);
      expect(current.createdAt).toBeInstanceOf(Date);

      const effective = await flint.settings.getEffective({});
      expect(effective.settingsId).toMatch(/^set_/);

      const updated = await flint.settings.update({
        scope: "merchant",
        tipping: {
          isEnabled: current.tipping.isEnabled,
        },
      });

      expect(updated.settingsId).toBe(current.settingsId);
    });
  });

  // ==========================================================================
  // AnalyticsService
  // ==========================================================================
  describe("AnalyticsService", () => {
    it("should read overview, timeseries, and subscription analytics", async () => {
      const overview = await flint.analytics.getOverview({ range: "last_30_days" });
      expect(overview.range).toBe("last_30_days");
      expect(typeof overview.paymentsCount.currentCount).toBe("number");

      const timeseries = await flint.analytics.getPaymentVolumeTimeseries({
        range: "last_30_days",
      });
      expect(timeseries.range).toBe("last_30_days");
      expect(Array.isArray(timeseries.buckets)).toBe(true);

      const subscriptions = await flint.analytics.getSubscriptions({
        range: "last_30_days",
      });
      expect(subscriptions.range).toBe("last_30_days");
      expect(typeof subscriptions.snapshotMetrics.statusCounts.active).toBe("number");
    });
  });

  // ==========================================================================
  // InvoiceService
  // ==========================================================================
  describe("InvoiceService", () => {
    it("should create, read, update, list, and void an invoice draft", async () => {
      const created = await flint.invoices.create({
        quickPay: {
          lineItems: [
            {
              name: "SDK Invoice Item",
              quantity: 1,
              unitPriceMoney: { amount: 2200, currency: "USD" },
            },
          ],
          customerId,
          buyerNote: "SDK integration invoice",
        },
        recipientEmail: `billing-${testRunId}@integration.test`,
        reference: `sdk-invoice-${testRunId}`,
        metadata: { testRunId },
      });

      expect(created.invoiceId).toMatch(/^inv_/);
      expect(created.reference).toBe(`sdk-invoice-${testRunId}`);
      invoiceId = created.invoiceId;

      const fetched = await flint.invoices.get(invoiceId);
      expect(fetched.invoiceId).toBe(invoiceId);

      const updated = await flint.invoices.update(invoiceId, {
        memo: "Updated by SDK integration suite",
        metadata: { testRunId, updated: "true" },
      });
      expect(updated.memo).toBe("Updated by SDK integration suite");

      const page = await flint.invoices.list({ limit: 10, query: testRunId });
      expect(page.data.some((invoice) => invoice.invoiceId === invoiceId)).toBe(true);

      const sent = await flint.invoices.send(invoiceId);
      expect(sent.invoice.invoiceId).toBe(invoiceId);
      expect(sent.publicUrl).toMatch(/^https:\/\/checkout\.[^/]+\/i\//);

      const checkout = await flint.invoices.getCheckoutSession(invoiceId);
      expect(checkout.invoice.invoiceId).toBe(invoiceId);

      const voided = await flint.invoices.void(invoiceId);
      expect(voided.status).toBe("void");
    });
  });

  // ==========================================================================
  // MerchantService
  // ==========================================================================
  describe("MerchantService", () => {
    it("should list merchants, get the active merchant, and read onboarding status", async () => {
      const page = await flint.merchants.list({ limit: 5 });

      expect(page.data.length).toBeGreaterThan(0);
      expect(page.data.some((merchant) => merchant.merchantId === merchantId)).toBe(true);

      const merchant = await flint.merchants.get(merchantId);
      expect(merchant.merchantId).toBe(merchantId);
      expect(merchant.createdAt).toBeInstanceOf(Date);

      const onboarding = await flint.merchants.getOnboardingStatus(merchantId);
      expect(typeof onboarding.isComplete).toBe("boolean");
    });
  });

  // ==========================================================================
  // UserService
  // ==========================================================================
  describe("UserService", () => {
    it("should list users and get the merchant owner", async () => {
      const merchants = await flint.merchants.list({ limit: 5 });
      const merchant = merchants.data.find((entry) => entry.merchantId === merchantId) ?? merchants.data[0]!;
      userId = merchant.ownerId;

      const page = await flint.users.list({ limit: 10 });
      expect(page.data.some((user) => user.userId === userId)).toBe(true);

      const user = await flint.users.get(userId);
      expect(user.userId).toBe(userId);
      expect(user.createdAt).toBeInstanceOf(Date);
    });
  });

  // ==========================================================================
  // ApiKeyService
  // ==========================================================================
  describe("ApiKeyService", () => {
    it("should create, read, update, list, and revoke an api key", async () => {
      const created = await flint.apiKeys.create({
        name: `SDK Key ${testRunId}`,
        scopes: ["commerce.orders.read"],
        keyType: "external",
        idempotencyKey: `api-key-${testRunId}`,
      });

      expect(created.apiKey.apiKeyId).toMatch(/^key_/);
      expect(created.secretKey.startsWith("flint_")).toBe(true);
      apiKeyId = created.apiKey.apiKeyId;

      const fetched = await flint.apiKeys.get(apiKeyId);
      expect(fetched.apiKeyId).toBe(apiKeyId);

      const updated = await flint.apiKeys.update(apiKeyId, {
        name: `SDK Key ${testRunId} Updated`,
        scopes: ["commerce.orders.read"],
      });
      expect(updated.name).toBe(`SDK Key ${testRunId} Updated`);

      const page = await flint.apiKeys.list({ limit: 10 });
      expect(page.data.some((apiKey) => apiKey.apiKeyId === apiKeyId)).toBe(true);

      const revoked = await flint.apiKeys.revoke(apiKeyId, {
        idempotencyKey: `api-key-revoke-${testRunId}`,
      });
      expect(revoked.status).toBe("revoked");
    });
  });

  // ==========================================================================
  // DeviceService
  // ==========================================================================
  describe("DeviceService", () => {
    it("should create, read, update, list, and delete a device", async () => {
      const created = await flint.devices.create({
        name: `SDK Device ${testRunId}`,
        metadata: { testRunId },
        hardwareFingerprint: `sdk-fingerprint-${testRunId}`,
        idempotencyKey: `device-${testRunId}`,
      });

      expect(created.device.deviceId).toMatch(/^dev_/);
      expect(created.device.name).toBe(`SDK Device ${testRunId}`);
      deviceId = created.device.deviceId;

      const fetched = await flint.devices.get(deviceId);
      expect(fetched.deviceId).toBe(deviceId);

      const updated = await flint.devices.update(deviceId, {
        name: `SDK Device ${testRunId} Updated`,
        metadata: { testRunId, updated: "true" },
        idempotencyKey: `device-update-${testRunId}`,
      });
      expect(updated.name).toBe(`SDK Device ${testRunId} Updated`);

      const page = await flint.devices.list({ limit: 10 });
      expect(page.data.some((device) => device.deviceId === deviceId)).toBe(true);

      const deleted = await flint.devices.del(deviceId, {
        idempotencyKey: `device-delete-${testRunId}`,
      });
      expect(deleted.status).toBe("deleted");
    });
  });

  // ==========================================================================
  // WebhookEndpointService
  // ==========================================================================
  describe("WebhookEndpointService", () => {
    it("should create, read, update, rotate, list, and delete a webhook endpoint", async () => {
      const created = await flint.webhooks.create({
        url: `https://example.com/flint-sdk/${testRunId}`,
        subscribedEvents: ["payment_intent.succeeded"],
        description: `SDK webhook ${testRunId}`,
        enabled: true,
        idempotencyKey: `webhook-${testRunId}`,
      });

      expect(created.webhookEndpointId).toMatch(/^whep?_/);
      expect(created.url).toBe(`https://example.com/flint-sdk/${testRunId}`);
      webhookEndpointId = created.webhookEndpointId;

      const fetched = await flint.webhooks.get(webhookEndpointId);
      expect(fetched.webhookEndpointId).toBe(webhookEndpointId);

      const updated = await flint.webhooks.update(webhookEndpointId, {
        description: `SDK webhook ${testRunId} Updated`,
        enabled: true,
        updateMask: ["description", "enabled"],
      });
      expect(updated.description).toBe(`SDK webhook ${testRunId} Updated`);

      const rotated = await flint.webhooks.rotateWebhookSecret(webhookEndpointId);
      expect(rotated.secret.length).toBeGreaterThan(0);

      const page = await flint.webhooks.list({ limit: 20 });
      expect(page.data.some((endpoint) => endpoint.webhookEndpointId === webhookEndpointId)).toBe(true);

      const events = await flint.webhooks.listEvents({
        webhookEndpointId,
        limit: 5,
      });
      expect(Array.isArray(events.data)).toBe(true);

      await flint.webhooks.del(webhookEndpointId);

      await expect(flint.webhooks.get(webhookEndpointId)).rejects.toThrow(FlintError);
    });
  });

  // ==========================================================================
  // Error handling
  // ==========================================================================
  describe("Error handling", () => {
    it("should throw not_found for nonexistent order ID", async () => {
      try {
        // Use a valid ULID format that doesn't exist
        await flint.orders.get("ord_01ZZZZZZZZZZZZZZZZZZZZZZZZ");
        expect.unreachable("should have thrown");
      } catch (err) {
        expect(err).toBeInstanceOf(FlintError);
        const flintErr = err as FlintError;
        expect(flintErr.type).toBe("not_found");
      }
    });

    it("should throw validation error for empty customer create", async () => {
      try {
        // @ts-expect-error — intentionally passing invalid params
        await flint.customers.create({});
        expect.unreachable("should have thrown");
      } catch (err) {
        expect(err).toBeInstanceOf(FlintError);
        const flintErr = err as FlintError;
        expect(flintErr.type).toBe("validation");
      }
    });

    it("should throw authentication error for bad API key", async () => {
      const badClient = new Flint({
        apiKey: "flint_test_invalid_key_000",
        baseUrl: BASE_URL,
        maxRetries: 0,
      });

      try {
        await badClient.customers.list({ limit: 1 });
        expect.unreachable("should have thrown");
      } catch (err) {
        expect(err).toBeInstanceOf(FlintError);
        const flintErr = err as FlintError;
        expect(flintErr.type).toBe("authentication");
        expect(flintErr.httpStatus).toBe(401);
      }
    });
  });

  // ==========================================================================
  // Cleanup
  // ==========================================================================
  describe("Cleanup", () => {
    it("should close order2 (best-effort)", async () => {
      try {
        await flint.orders.close(order2Id, { reason: "Integration test cleanup" });
      } catch {
        // best-effort — don't fail the suite
      }
    });

    it("should delete the coupon (best-effort)", async () => {
      try {
        await flint.coupons.del(couponId);
      } catch {
        // best-effort
      }
    });

    it("should remove the payment method (best-effort)", async () => {
      try {
        await flint.paymentMethods.remove(paymentMethodId, {
          idempotencyKey: `pm-remove-${testRunId}`,
        });
      } catch {
        // best-effort
      }
    });
  });
});
