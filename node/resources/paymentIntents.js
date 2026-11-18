import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentIntents.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelPaymentIntent"]:r0,["capturePaymentIntent"]:r0,["confirmPaymentIntent"]:r0,["createPaymentIntent"]:r0,["getPaymentIntent"]:r0,["listPaymentIntentActivities"]:r0,["listPaymentIntents"]:r0,["sendPaymentIntentReceipt"]:r0,["updatePaymentIntent"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentIntents = Object.freeze({
      cancel: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPaymentIntent", result, path))),
      capture: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("capturePaymentIntent", result, path))),
      confirm: async (payment_intent_id, params, options) => this.#runtime.request("confirmPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Buyer-Device",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmPaymentIntent", result, path))),
      create: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentIntent", result, path))),
      get: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentIntent", result, path))),
      listActivities: async (payment_intent_id, params, options) => this.#runtime.request("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
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
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path))),
      listActivitiesPages: (payment_intent_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
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
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path)),
      listActivitiesItems: (payment_intent_id, params, options) => this.#runtime.items("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
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
      list: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "email",
  "invoice_id",
  "is_action_required",
  "has_failed_attempts",
  "payment_link_id",
  "decline_code",
  "card_fingerprint",
  "buyer_ip_address",
  "card_last4",
  "card_brand",
  "status",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
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
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "email",
  "invoice_id",
  "is_action_required",
  "has_failed_attempts",
  "payment_link_id",
  "decline_code",
  "card_fingerprint",
  "buyer_ip_address",
  "card_last4",
  "card_brand",
  "status",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
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
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "email",
  "invoice_id",
  "is_action_required",
  "has_failed_attempts",
  "payment_link_id",
  "decline_code",
  "card_fingerprint",
  "buyer_ip_address",
  "card_last4",
  "card_brand",
  "status",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
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
      sendReceipt: async (payment_intent_id, params, options) => this.#runtime.request("sendPaymentIntentReceipt", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendPaymentIntentReceipt", result, path))),
      update: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentIntent", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCancelPaymentIntentRequest } from '../models/CancelPaymentIntentRequest.js';
export { makeCapturePaymentIntentRequest } from '../models/CapturePaymentIntentRequest.js';
export { makeCapturePaymentSplitRequest } from '../models/CapturePaymentSplitRequest.js';
export { makeConfirmPaymentIntentRequest } from '../models/ConfirmPaymentIntentRequest.js';
export { makeCreatePaymentIntentRequest } from '../models/CreatePaymentIntentRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderPaymentSourceCardSelection } from '../models/OrderPaymentSourceCardSelection.js';
export { makeOrderPaymentSourceSelection } from '../models/OrderPaymentSourceSelection.js';
export { makePaymentSourceCredential } from '../models/PaymentSourceCredential.js';
export { makePaymentSourceCredentialPaymentMethod } from '../models/PaymentSourceCredentialPaymentMethod.js';
export { makePaymentSourceCredentialReader } from '../models/PaymentSourceCredentialReader.js';
export { makePaymentSourceCredentialStripeConfirmationToken } from '../models/PaymentSourceCredentialStripeConfirmationToken.js';
export { makePaymentSourceCredentialStripePaymentMethod } from '../models/PaymentSourceCredentialStripePaymentMethod.js';
export { makePaymentSplitRequest } from '../models/PaymentSplitRequest.js';
export { makePlatformFeeMoney } from '../models/PlatformFeeMoney.js';
export { makePlatformFeeRequest } from '../models/PlatformFeeRequest.js';
export { makeReaderPaymentSourceTip } from '../models/ReaderPaymentSourceTip.js';
export { makeSendPaymentIntentReceiptRequest } from '../models/SendPaymentIntentReceiptRequest.js';
export { makeUpdatePaymentIntentRequest } from '../models/UpdatePaymentIntentRequest.js';
