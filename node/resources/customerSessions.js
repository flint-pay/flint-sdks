import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customerSessions.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomerSession"]:r0,["refreshCustomerSession"]:r0,["revokeCustomerSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshCustomerSession", result, path))),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSession", result, path))),
      revokeWithResponse: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateCustomerSessionRequest } from '../models/CreateCustomerSessionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRefreshCustomerSessionRequest } from '../models/RefreshCustomerSessionRequest.js';
