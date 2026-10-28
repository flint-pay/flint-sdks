import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryRevocations.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';

const _sdkDescriptors = new DescriptorSource(settings, {["getDeliveryRevocation"]:r0,["listDeliveryRevocations"]:r0,["revokeDeliveryDependency"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryRevocations = Object.freeze({
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      getWithResponse: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params), options),
      revokeDeliveryDependency: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeliveryDependency", result, path))),
      revokeDeliveryDependencyWithResponse: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
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
