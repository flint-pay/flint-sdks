import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryRevocations.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryRevocation"]:r0,["getDeliveryRevocation"]:r0,["listDeliveryRevocations"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryRevocations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryRevocation", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRevocation", result, path))),
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeliveryRevocationRequest } from '../models/CreateDeliveryRevocationRequest.js';
export { makeCreateDeliveryRevocationTarget } from '../models/CreateDeliveryRevocationTarget.js';
export { makeCreateDeliveryRevocationTargetDeliveryMethodRevision } from '../models/CreateDeliveryRevocationTargetDeliveryMethodRevision.js';
export { makeCreateDeliveryRevocationTargetDeliveryRateCallbackRevision } from '../models/CreateDeliveryRevocationTargetDeliveryRateCallbackRevision.js';
export { makeCreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey } from '../models/CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey.js';
export { makeCreateDeliveryRevocationTargetLocationGeography } from '../models/CreateDeliveryRevocationTargetLocationGeography.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
