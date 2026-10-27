import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantAccountSessions.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createMerchantAccountSession"]:r0,["refreshMerchantAccountSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMerchantAccountSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshMerchantAccountSession", result, path))),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMerchantAccountSessionCreateRequest } from '../models/MerchantAccountSessionCreateRequest.js';
export { makeMerchantAccountSessionRefreshRequest } from '../models/MerchantAccountSessionRefreshRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
