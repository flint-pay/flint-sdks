import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/orders.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["applyOrderDiscount"]:r0,["applyOrderGiftCard"]:r0,["cancelOrderPaymentAttempt"]:r0,["closeOrder"]:r0,["createOrder"]:r0,["createOrderAccessLink"]:r0,["createOrderCharge"]:r0,["createOrderEdit"]:r0,["createOrderLineItems"]:r0,["createOrderPaymentIntent"]:r0,["deleteOrderCharge"]:r0,["deleteOrderLineItem"]:r0,["getOrder"]:r0,["getOrderEdit"]:r0,["getOrderPaymentAttempt"]:r0,["getOrderReceiptPDF"]:r0,["listOrderActivities"]:r0,["listOrderCharges"]:r0,["listOrderEdits"]:r0,["listOrderLineItems"]:r0,["listOrderPaymentAttempts"]:r0,["listOrders"]:r0,["payOrder"]:r0,["removeOrderDiscounts"]:r0,["removeOrderGiftCard"]:r0,["repriceOrderDiscounts"]:r0,["resolveOrderInventoryException"]:r0,["retryOrderEditRefund"]:r0,["sendOrderReceipt"]:r0,["updateOrder"]:r0,["updateOrderCharge"]:r0,["updateOrderLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.orders = Object.freeze({
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderDiscount", result, path))),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Gift-Card-Challenge",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderGiftCard", result, path))),
      cancelPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelOrderPaymentAttempt", result, path))),
      close: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeOrder", result, path))),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrder", result, path))),
      createAccessLink: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderAccessLink", result, path))),
      createCharge: async (order_id, params, options) => this.#runtime.request("createOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderCharge", result, path))),
      createEdit: async (order_id, params, options) => this.#runtime.request("createOrderEdit", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderEdit", result, path))),
      createLineItems: async (order_id, params, options) => this.#runtime.request("createOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderLineItems", result, path))),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderPaymentIntent", result, path))),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderCharge", result, path))),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderLineItem", result, path))),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrder", result, path))),
      getEdit: async (order_id, order_edit_id, params, options) => this.#runtime.request("getOrderEdit", _sdkRequestInput([
  "order_id",
  "order_edit_id"
], [order_id, order_edit_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderEdit", result, path))),
      getPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderPaymentAttempt", result, path))),
      getReceiptPDF: async (order_id, params, options) => this.#runtime.request("getOrderReceiptPDF", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path))),
      listActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path)),
      listActivitiesItems: (order_id, params, options) => this.#runtime.items("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listCharges: async (order_id, params, options) => this.#runtime.request("listOrderCharges", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderCharges", result, path))),
      listChargesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderCharges", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderCharges", result, path)),
      listChargesItems: (order_id, params, options) => this.#runtime.items("listOrderCharges", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listEdits: async (order_id, params, options) => this.#runtime.request("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderEdits", result, path))),
      listEditsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderEdits", result, path)),
      listEditsItems: (order_id, params, options) => this.#runtime.items("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listLineItems: async (order_id, params, options) => this.#runtime.request("listOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderLineItems", result, path))),
      listLineItemsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderLineItems", result, path)),
      listLineItemsItems: (order_id, params, options) => this.#runtime.items("listOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path))),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
  "has_unassigned_fulfillment_quantity",
  "has_invoice",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrders", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
  "has_unassigned_fulfillment_quantity",
  "has_invoice",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrders", result, path)),
      listItems: (params, options) => this.#runtime.items("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
  "has_unassigned_fulfillment_quantity",
  "has_invoice",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pay: async (order_id, params, options) => this.#runtime.request("payOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Buyer-Device",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("payOrder", result, path))),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderDiscounts", result, path))),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderGiftCard", result, path))),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("repriceOrderDiscounts", result, path))),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveOrderInventoryException", result, path))),
      retryEditRefund: async (order_id, order_edit_id, params, options) => this.#runtime.request("retryOrderEditRefund", _sdkRequestInput([
  "order_id",
  "order_edit_id"
], [order_id, order_edit_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryOrderEditRefund", result, path))),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendOrderReceipt", result, path))),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrder", result, path))),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderCharge", result, path))),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderLineItem", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddLineItemsRequest } from '../models/AddLineItemsRequest.js';
export { makeAddOrderChargeRequest } from '../models/AddOrderChargeRequest.js';
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeApplyDiscountRequest } from '../models/ApplyDiscountRequest.js';
export { makeApplyDiscountRequestManual } from '../models/ApplyDiscountRequestManual.js';
export { makeApplyDiscountRequestPromotion } from '../models/ApplyDiscountRequestPromotion.js';
export { makeApplyOrderGiftCardRequest } from '../models/ApplyOrderGiftCardRequest.js';
export { makeCancelOrderPaymentAttemptRequest } from '../models/CancelOrderPaymentAttemptRequest.js';
export { makeCheckoutBuyerContactRequest } from '../models/CheckoutBuyerContactRequest.js';
export { makeCloseOrderRequest } from '../models/CloseOrderRequest.js';
export { makeCreateOrderDiscount } from '../models/CreateOrderDiscount.js';
export { makeCreateOrderDiscountManual } from '../models/CreateOrderDiscountManual.js';
export { makeCreateOrderDiscountPromotion } from '../models/CreateOrderDiscountPromotion.js';
export { makeCreateOrderEditRequest } from '../models/CreateOrderEditRequest.js';
export { makeCreateOrderLineItemInputBundle } from '../models/CreateOrderLineItemInputBundle.js';
export { makeCreateOrderLineItemInputCustom } from '../models/CreateOrderLineItemInputCustom.js';
export { makeCreateOrderLineItemInputVariant } from '../models/CreateOrderLineItemInputVariant.js';
export { makeCreateOrderLineItemRequest } from '../models/CreateOrderLineItemRequest.js';
export { makeCreateOrderPaymentIntentRequest } from '../models/CreateOrderPaymentIntentRequest.js';
export { makeCreateOrderRequest } from '../models/CreateOrderRequest.js';
export { makeCreateOrderTip } from '../models/CreateOrderTip.js';
export { makeCreateOrderTipAmount } from '../models/CreateOrderTipAmount.js';
export { makeCreateOrderTipPercent } from '../models/CreateOrderTipPercent.js';
export { makeCustomerTaxExemptionCoverageAllStatesRequest } from '../models/CustomerTaxExemptionCoverageAllStatesRequest.js';
export { makeCustomerTaxExemptionCoverageRequest } from '../models/CustomerTaxExemptionCoverageRequest.js';
export { makeCustomerTaxExemptionCoverageStatesRequest } from '../models/CustomerTaxExemptionCoverageStatesRequest.js';
export { makeDeliveryChargeTaxCalculationRequestModel } from '../models/DeliveryChargeTaxCalculationRequestModel.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDimensionsRequest } from '../models/DimensionsRequest.js';
export { makeGiftCardPurchaseDetailsRequest } from '../models/GiftCardPurchaseDetailsRequest.js';
export { makeGiftCardPurchaseRecipientPatchRequest } from '../models/GiftCardPurchaseRecipientPatchRequest.js';
export { makeGiftCardPurchaseRecipientRequest } from '../models/GiftCardPurchaseRecipientRequest.js';
export { makeImageReferenceRequest } from '../models/ImageReferenceRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeLineItemFulfillmentOriginRequestModel } from '../models/LineItemFulfillmentOriginRequestModel.js';
export { makeLineItemFulfillmentRequestModel } from '../models/LineItemFulfillmentRequestModel.js';
export { makeManualDiscountRequest } from '../models/ManualDiscountRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedChargeTaxRequest } from '../models/OrderCalculatedChargeTaxRequest.js';
export { makeOrderCalculatedLineItemTaxRequest } from '../models/OrderCalculatedLineItemTaxRequest.js';
export { makeOrderChargeInputAmount } from '../models/OrderChargeInputAmount.js';
export { makeOrderChargeInputPercent } from '../models/OrderChargeInputPercent.js';
export { makeOrderChargeRequest } from '../models/OrderChargeRequest.js';
export { makeOrderChargeTaxAssignment } from '../models/OrderChargeTaxAssignment.js';
export { makeOrderDeliveryDestinationRecipientRequest } from '../models/OrderDeliveryDestinationRecipientRequest.js';
export { makeOrderDeliveryDestinationRequest } from '../models/OrderDeliveryDestinationRequest.js';
export { makeOrderDeliveryRequest } from '../models/OrderDeliveryRequest.js';
export { makeOrderDraftLineItemInventoryDemandRequest } from '../models/OrderDraftLineItemInventoryDemandRequest.js';
export { makeOrderDraftLineItemTaxCalculationRequestModel } from '../models/OrderDraftLineItemTaxCalculationRequestModel.js';
export { makeOrderDraftLineItemTaxRequestModel } from '../models/OrderDraftLineItemTaxRequestModel.js';
export { makeOrderDraftTaxComponentRequestModel } from '../models/OrderDraftTaxComponentRequestModel.js';
export { makeOrderDraftTaxJurisdictionRequestModel } from '../models/OrderDraftTaxJurisdictionRequestModel.js';
export { makeOrderEditRemovalRequest } from '../models/OrderEditRemovalRequest.js';
export { makeOrderGiftCardAllocationAcceptance } from '../models/OrderGiftCardAllocationAcceptance.js';
export { makeOrderHandoverRequest } from '../models/OrderHandoverRequest.js';
export { makeOrderLineItemModifierInputCatalogRequest } from '../models/OrderLineItemModifierInputCatalogRequest.js';
export { makeOrderLineItemModifierInputTextRequest } from '../models/OrderLineItemModifierInputTextRequest.js';
export { makeOrderLineItemModifierRequestModel } from '../models/OrderLineItemModifierRequestModel.js';
export { makeOrderLineItemTaxAssignment } from '../models/OrderLineItemTaxAssignment.js';
export { makeOrderPaymentIntentSelection } from '../models/OrderPaymentIntentSelection.js';
export { makeOrderPaymentIntentSelectionAttached } from '../models/OrderPaymentIntentSelectionAttached.js';
export { makeOrderPaymentIntentSelectionPaymentMethod } from '../models/OrderPaymentIntentSelectionPaymentMethod.js';
export { makeOrderPaymentIntentSelectionReader } from '../models/OrderPaymentIntentSelectionReader.js';
export { makeOrderPaymentIntentSelectionStripeConfirmationToken } from '../models/OrderPaymentIntentSelectionStripeConfirmationToken.js';
export { makeOrderPaymentIntentSelectionToken } from '../models/OrderPaymentIntentSelectionToken.js';
export { makeOrderPaymentSourceCardSelection } from '../models/OrderPaymentSourceCardSelection.js';
export { makeOrderPaymentSourceSelection } from '../models/OrderPaymentSourceSelection.js';
export { makeOrderTaxCalculationInputAutomatic } from '../models/OrderTaxCalculationInputAutomatic.js';
export { makeOrderTaxCalculationInputExternal } from '../models/OrderTaxCalculationInputExternal.js';
export { makeOrderTaxCalculationRequest } from '../models/OrderTaxCalculationRequest.js';
export { makeOrderTaxComponentRequest } from '../models/OrderTaxComponentRequest.js';
export { makeOrderTaxExemptionInputCustomer } from '../models/OrderTaxExemptionInputCustomer.js';
export { makeOrderTaxExemptionInputNone } from '../models/OrderTaxExemptionInputNone.js';
export { makeOrderTaxExemptionInputOrder } from '../models/OrderTaxExemptionInputOrder.js';
export { makeOrderTaxExemptionRequest } from '../models/OrderTaxExemptionRequest.js';
export { makeOrderTaxJurisdictionRequest } from '../models/OrderTaxJurisdictionRequest.js';
export { makeOrderTaxLocationFullAddressRequest } from '../models/OrderTaxLocationFullAddressRequest.js';
export { makeOrderTaxLocationInputFullAddress } from '../models/OrderTaxLocationInputFullAddress.js';
export { makeOrderTaxLocationInputPostalCode } from '../models/OrderTaxLocationInputPostalCode.js';
export { makeOrderTaxLocationPostalAddressRequest } from '../models/OrderTaxLocationPostalAddressRequest.js';
export { makeOrderTaxLocationRequest } from '../models/OrderTaxLocationRequest.js';
export { makeOrderTaxRequest } from '../models/OrderTaxRequest.js';
export { makeOrderTaxUpdateRequest } from '../models/OrderTaxUpdateRequest.js';
export { makePaymentSourceCredential } from '../models/PaymentSourceCredential.js';
export { makePaymentSourceCredentialPaymentMethod } from '../models/PaymentSourceCredentialPaymentMethod.js';
export { makePaymentSourceCredentialReader } from '../models/PaymentSourceCredentialReader.js';
export { makePaymentSourceCredentialStripeConfirmationToken } from '../models/PaymentSourceCredentialStripeConfirmationToken.js';
export { makePaymentSourceCredentialToken } from '../models/PaymentSourceCredentialToken.js';
export { makePaymentSplitRequest } from '../models/PaymentSplitRequest.js';
export { makePayOrderRequest } from '../models/PayOrderRequest.js';
export { makePayOrderRequestConfirmPaymentIntents } from '../models/PayOrderRequestConfirmPaymentIntents.js';
export { makePayOrderRequestPay } from '../models/PayOrderRequestPay.js';
export { makePayOrderRequestResume } from '../models/PayOrderRequestResume.js';
export { makePayOrderRequestSetup } from '../models/PayOrderRequestSetup.js';
export { makePlatformFeeRequest } from '../models/PlatformFeeRequest.js';
export { makePromotionRefInputPromotionCode } from '../models/PromotionRefInputPromotionCode.js';
export { makePromotionRefInputPromotionID } from '../models/PromotionRefInputPromotionID.js';
export { makePromotionRefRequest } from '../models/PromotionRefRequest.js';
export { makeReaderPaymentSourceTip } from '../models/ReaderPaymentSourceTip.js';
export { makeRefundCharge } from '../models/RefundCharge.js';
export { makeRefundDestinations } from '../models/RefundDestinations.js';
export { makeRemoveDiscountsRequest } from '../models/RemoveDiscountsRequest.js';
export { makeRepriceDiscountsRequest } from '../models/RepriceDiscountsRequest.js';
export { makeResolveOrderInventoryExceptionRequest } from '../models/ResolveOrderInventoryExceptionRequest.js';
export { makeRetryOrderEditRefundRequest } from '../models/RetryOrderEditRefundRequest.js';
export { makeSendOrderReceiptRequest } from '../models/SendOrderReceiptRequest.js';
export { makeSubscribedLineRequestModel } from '../models/SubscribedLineRequestModel.js';
export { makeSubscriptionDeliveryDestinationInputAddress } from '../models/SubscriptionDeliveryDestinationInputAddress.js';
export { makeSubscriptionDeliveryDestinationInputCustomerAddress } from '../models/SubscriptionDeliveryDestinationInputCustomerAddress.js';
export { makeSubscriptionDeliveryDestinationRequest } from '../models/SubscriptionDeliveryDestinationRequest.js';
export { makeTaxCalculationRequestModel } from '../models/TaxCalculationRequestModel.js';
export { makeTaxCalculationRequestRequest } from '../models/TaxCalculationRequestRequest.js';
export { makeTaxComponentRequestModel } from '../models/TaxComponentRequestModel.js';
export { makeTaxComponentRequestRequest } from '../models/TaxComponentRequestRequest.js';
export { makeTaxJurisdictionRequest } from '../models/TaxJurisdictionRequest.js';
export { makeTaxJurisdictionRequestModel } from '../models/TaxJurisdictionRequestModel.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateLineItemRequest } from '../models/UpdateLineItemRequest.js';
export { makeUpdateOrderChargeRequest } from '../models/UpdateOrderChargeRequest.js';
export { makeUpdateOrderRequest } from '../models/UpdateOrderRequest.js';
export { makeWeightRequest } from '../models/WeightRequest.js';
