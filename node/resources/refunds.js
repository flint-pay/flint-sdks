import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/refunds.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createRefund"]:r0,["getRefund"]:r0,["listRefunds"]:r0,["updateRefund"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.refunds = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRefund", result, path))),
      get: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRefund", result, path))),
      list: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path)),
      listItems: (params, options) => this.#runtime.items("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRefund", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateRefundRequest } from '../models/CreateRefundRequest.js';
export { makeCreateRefundRequestAmount } from '../models/CreateRefundRequestAmount.js';
export { makeCreateRefundRequestFull } from '../models/CreateRefundRequestFull.js';
export { makeCreateRefundRequestTargets } from '../models/CreateRefundRequestTargets.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRefundAdjustmentAudit } from '../models/RefundAdjustmentAudit.js';
export { makeRefundAdjustmentReasonRequest } from '../models/RefundAdjustmentReasonRequest.js';
export { makeRefundCharge } from '../models/RefundCharge.js';
export { makeRefundDestinations } from '../models/RefundDestinations.js';
export { makeRefundLineItem } from '../models/RefundLineItem.js';
export { makeRefundLineItemAdjustmentIn } from '../models/RefundLineItemAdjustmentIn.js';
export { makeRefundLineItemAdjustmentRefundIn } from '../models/RefundLineItemAdjustmentRefundIn.js';
export { makeRefundTaxBreakdownRefundIn } from '../models/RefundTaxBreakdownRefundIn.js';
export { makeRefundTenderAllocationInputGiftCardRedemption } from '../models/RefundTenderAllocationInputGiftCardRedemption.js';
export { makeRefundTenderAllocationInputPaymentIntent } from '../models/RefundTenderAllocationInputPaymentIntent.js';
export { makeRefundTenderAllocationRequest } from '../models/RefundTenderAllocationRequest.js';
export { makeUpdateRefundRequest } from '../models/UpdateRefundRequest.js';
