import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentReviews.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["approvePaymentReview"]:r0,["declinePaymentReview"]:r0,["getPaymentReview"]:r0,["listPaymentReviews"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentReviews = Object.freeze({
      approve: async (payment_review_id, params, options) => this.#runtime.request("approvePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("approvePaymentReview", result, path))),
      decline: async (payment_review_id, params, options) => this.#runtime.request("declinePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("declinePaymentReview", result, path))),
      get: async (payment_review_id, params, options) => this.#runtime.request("getPaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentReview", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeDeclinePaymentReviewRequest } from '../models/DeclinePaymentReviewRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
