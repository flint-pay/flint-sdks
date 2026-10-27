import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/demoSessions.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createDemoSession"]:r0,["resetDemoSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDemoSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reset: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetDemoSession", result, path))),
      resetWithResponse: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDemoSessionRequest } from '../models/CreateDemoSessionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResetDemoSessionRequest } from '../models/ResetDemoSessionRequest.js';
