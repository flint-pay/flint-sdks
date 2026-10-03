import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customerSessions.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomerSession"]:r0,["refreshCustomerSession"]:r0,["revokeCustomerSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeWithResponse: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCustomerSessionResponse } from '../models/CustomerSessionResponse.js';
export { makeCustomerSessionRevocationResponse } from '../models/CustomerSessionRevocationResponse.js';
export { makeCustomerSessionsRevocation } from '../models/CustomerSessionsRevocation.js';
export { makeCustomerSessionsRevocationResponse } from '../models/CustomerSessionsRevocationResponse.js';
export { makeCustomerSession } from '../models/CustomerSession.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeCustomerSessionRevocation } from '../models/CustomerSessionRevocation.js';
