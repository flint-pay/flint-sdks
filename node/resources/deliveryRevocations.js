import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryRevocations.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["getDeliveryRevocation"]:r0,["revokeDeliveryDependency"]:r0});
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
