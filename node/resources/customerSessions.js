import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customerSessions.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomerSession"]:r0,["refreshCustomerSession"]:r0,["revokeCustomerSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeWithResponse: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id"
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
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeCustomerSessionRevocation } from '../models/CustomerSessionRevocation.js';
export { makeCreateCustomerSessionRequest } from '../models/CreateCustomerSessionRequest.js';
