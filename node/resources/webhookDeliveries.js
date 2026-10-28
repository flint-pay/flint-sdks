import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/webhookDeliveries.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createWebhookDelivery"]:r0,["getWebhookDelivery"]:r0,["listWebhookDeliveryAttempts"]:r0,["resendWebhookDelivery"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.webhookDeliveries = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookDelivery", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookDelivery", result, path))),
      getWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], false, false, params), options).then(_sdkResponse),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path))),
      listAttemptsWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path)),
      listAttemptsPagesWithResponse: (webhook_delivery_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      resend: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resendWebhookDelivery", result, path))),
      resendWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateWebhookDeliveryRequest } from '../models/CreateWebhookDeliveryRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResendWebhookDeliveryRequest } from '../models/ResendWebhookDeliveryRequest.js';
