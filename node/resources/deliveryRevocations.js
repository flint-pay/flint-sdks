import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryRevocations.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["getDeliveryRevocation"]:r0,["listDeliveryRevocations"]:r0,["revokeDeliveryDependency"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryRevocations = Object.freeze({
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
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
  "created_before"
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      create: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeliveryDependency", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRevokeDeliveryDependencyRequest } from '../models/RevokeDeliveryDependencyRequest.js';
export { makeRevokeDeliveryDependencyTarget } from '../models/RevokeDeliveryDependencyTarget.js';
export { makeRevokeDeliveryDependencyTargetDeliveryMethod } from '../models/RevokeDeliveryDependencyTargetDeliveryMethod.js';
export { makeRevokeDeliveryDependencyTargetDeliveryMethodRevision } from '../models/RevokeDeliveryDependencyTargetDeliveryMethodRevision.js';
export { makeRevokeDeliveryDependencyTargetDeliveryRateCallback } from '../models/RevokeDeliveryDependencyTargetDeliveryRateCallback.js';
export { makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision } from '../models/RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision.js';
export { makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey } from '../models/RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey.js';
export { makeRevokeDeliveryDependencyTargetLocationGeography } from '../models/RevokeDeliveryDependencyTargetLocationGeography.js';
