import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/orders.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';

const _sdkDescriptors = new DescriptorSource(settings, {["addOrderCharge"]:r0,["addOrderLineItems"]:r0,["applyOrderDiscount"]:r0,["applyOrderGiftCard"]:r0,["cancelOrderPayment"]:r0,["cancelOrderPaymentAttempt"]:r0,["captureOrderPayment"]:r0,["closeOrder"]:r0,["createFulfillment"]:r0,["createOrder"]:r0,["createOrderPaymentIntent"]:r0,["deleteOrderCharge"]:r0,["deleteOrderLineItem"]:r0,["getOrder"]:r0,["getOrderCurrentDeliverySelection"]:r0,["getOrderPaymentAttempt"]:r0,["listOrderActivities"]:r0,["listOrderPaymentAttempts"]:r0,["listOrders"]:r0,["payOrder"]:r0,["previewOrderDiscounts"]:r0,["removeOrderDiscounts"]:r0,["removeOrderGiftCard"]:r0,["repriceOrderDiscounts"]:r0,["resendOrderReceipt"]:r0,["resolveOrderInventoryException"]:r0,["sendOrderReceipt"]:r0,["updateOrder"]:r0,["updateOrderCharge"]:r0,["updateOrderLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.orders = Object.freeze({
      addCharge: async (order_id, params, options) => this.#runtime.request("addOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addChargeWithResponse: async (order_id, params, options) => this.#runtime.request("addOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      addLineItems: async (order_id, params, options) => this.#runtime.request("addOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addLineItemsWithResponse: async (order_id, params, options) => this.#runtime.request("addOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyDiscountWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Gift-Card-Challenge",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyGiftCardWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Gift-Card-Challenge",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelPayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelPaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      cancelPaymentAttempt: async (order_id, payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "payment_attempt_id"
], [order_id, payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelPaymentAttemptWithResponse: async (order_id, payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "payment_attempt_id"
], [order_id, payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      capturePayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      capturePaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      closeSession: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      closeSessionWithResponse: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createFulfillment: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createFulfillmentWithResponse: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createPaymentIntentWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCurrentDeliverySelectionWithResponse: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentAttempt: async (order_id, payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "payment_attempt_id"
], [order_id, payment_attempt_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentAttemptWithResponse: async (order_id, payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "payment_attempt_id"
], [order_id, payment_attempt_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options), []),
      listActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options)),
      listActivitiesItems: (order_id, params, options) => this.#runtime.items("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentAttemptsWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentAttemptsPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      pay: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(result => _sdkPayload(result, ["data"])),
      payWithResponse: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(_sdkResponse),
      previewDiscounts: async (order_id, params, options) => this.#runtime.request("previewOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      previewDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("previewOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      removeDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      removeGiftCardWithResponse: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      repriceDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resendReceipt: async (order_id, params, options) => this.#runtime.request("resendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resendReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("resendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resolveInventoryExceptionWithResponse: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      sendReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeOrderResponse } from '../models/OrderResponse.js';
export { makeOrderPaymentLifecycleResponse } from '../models/OrderPaymentLifecycleResponse.js';
export { makeCancelOrderPaymentAttemptResponse } from '../models/CancelOrderPaymentAttemptResponse.js';
export { makeCreateFulfillmentResponse } from '../models/CreateFulfillmentResponse.js';
export { makeCreateOrderPaymentIntentResponse } from '../models/CreateOrderPaymentIntentResponse.js';
export { makeDeliverySelectionResponse } from '../models/DeliverySelectionResponse.js';
export { makeOrderPaymentAttemptResponse } from '../models/OrderPaymentAttemptResponse.js';
export { makeOrderActivityListResponse } from '../models/OrderActivityListResponse.js';
export { makeOrderActivity } from '../models/OrderActivity.js';
export { makeOrderPaymentAttemptListResponse } from '../models/OrderPaymentAttemptListResponse.js';
export { makeOrderPaymentAttempt } from '../models/OrderPaymentAttempt.js';
export { makeOrderListResponse } from '../models/OrderListResponse.js';
export { makeOrder } from '../models/Order.js';
export { makeDiscountPreviewResponse } from '../models/DiscountPreviewResponse.js';
export { makeActionResponse } from '../models/ActionResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeCheckoutSessionLineItemModifierUpdate } from '../models/CheckoutSessionLineItemModifierUpdate.js';
export { makeOrderPaymentLifecycleResult } from '../models/OrderPaymentLifecycleResult.js';
export { makePaymentIntent } from '../models/PaymentIntent.js';
export { makePaymentAddOnFee } from '../models/PaymentAddOnFee.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeStripePaymentClientAction } from '../models/StripePaymentClientAction.js';
export { makeErrorRemediation } from '../models/ErrorRemediation.js';
export { makeNextAction } from '../models/NextAction.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makePayOrderResult } from '../models/PayOrderResult.js';
export { makeCreateFulfillmentResult } from '../models/CreateFulfillmentResult.js';
export { makePaymentAttemptGiftCardRedemption } from '../models/PaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../models/PaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../models/PaymentErrorSummary.js';
export { makePendingPaymentAction } from '../models/PendingPaymentAction.js';
export { makeAppliedDiscount } from '../models/AppliedDiscount.js';
export { makeBuyerAction } from '../models/BuyerAction.js';
export { makeOrderCharge } from '../models/OrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeOrderDeliveryDestinationAddress } from '../models/OrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../models/OrderDeliveryDestinationRecipient.js';
export { makeFulfillment } from '../models/Fulfillment.js';
export { makeFulfillmentChargeLink } from '../models/FulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../models/DigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../models/FulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../models/DeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../models/ExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../models/PickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../models/FulfillmentRecipient.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeServiceFulfillmentDetails } from '../models/ServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../models/ExpandedShipmentSummary.js';
export { makeGiftCardMoney } from '../models/GiftCardMoney.js';
export { makeOrderGiftCardAllocation } from '../models/OrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../models/OrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../models/OrderGiftCardSelection.js';
export { makeOrderLineItem } from '../models/OrderLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeGiftCardProductConfiguration } from '../models/GiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../models/GiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../models/GiftCardPurchaseRecipient.js';
export { makeImage } from '../models/Image.js';
export { makeLineItemInventorySnapshot } from '../models/LineItemInventorySnapshot.js';
export { makeLineItemInventoryDemand } from '../models/LineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../models/PurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makePackageItem } from '../models/PackageItem.js';
export { makePaymentCollectionStripe } from '../models/PaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../models/SelectableOrderPaymentIntent.js';
export { makePaymentCollection } from '../models/PaymentCollection.js';
export { makeExpandedPaymentIntentSummary } from '../models/ExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makeRequestedTip } from '../models/RequestedTip.js';
export { makeSubscriptionPlanLineItem } from '../models/SubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeOrderTaxExemption } from '../models/OrderTaxExemption.js';
export { makeOrderTaxLocation } from '../models/OrderTaxLocation.js';
export { makeTaxBreakdown } from '../models/TaxBreakdown.js';
export { makeTip } from '../models/Tip.js';
export { makeTipPaymentIntentAllocation } from '../models/TipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../models/TipValueSettlementAllocation.js';
export { makeCreatePaymentIntentResult } from '../models/CreatePaymentIntentResult.js';
export { makeDeliverySelection } from '../models/DeliverySelection.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliverySelectionChoiceResource } from '../models/DeliverySelectionChoiceResource.js';
export { makeDeliveryPlan } from '../models/DeliveryPlan.js';
export { makeDeliverySelectionInstructionsRequest } from '../models/DeliverySelectionInstructionsRequest.js';
export { makeDeliveryShipmentDetails } from '../models/DeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../models/DeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../models/DeliveryLocationSummaryResource.js';
export { makeDeliveryInputRequirement } from '../models/DeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../models/DeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../models/DeliveryWindowResource.js';
export { makeDeliverySelectionLifecycleEventResource } from '../models/DeliverySelectionLifecycleEventResource.js';
export { makeDiscountPreviewData } from '../models/DiscountPreviewData.js';
export { makeDiscountPreview } from '../models/DiscountPreview.js';
export { makePromotionCandidate } from '../models/PromotionCandidate.js';
export { makePromotionCombinesWith } from '../models/PromotionCombinesWith.js';
export { makePromotionExclusivity } from '../models/PromotionExclusivity.js';
export { makeActionResult } from '../models/ActionResult.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { isOrdersUpdateLineItemResponseKnown } from '../predicates/OrdersUpdateLineItemResponse.js';
