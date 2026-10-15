import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customerVerifications.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["confirmCustomerVerification"]:r0,["createCustomerVerification"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customerVerifications = Object.freeze({
      confirm: async (customer_verification_id, params, options) => this.#runtime.request("confirmCustomerVerification", _sdkRequestInput([
  "customer_verification_id"
], [customer_verification_id], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmWithResponse: async (customer_verification_id, params, options) => this.#runtime.request("confirmCustomerVerification", _sdkRequestInput([
  "customer_verification_id"
], [customer_verification_id], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createCustomerVerification", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerVerification", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCustomerVerificationResponse } from '../models/CustomerVerificationResponse.js';
export { makeCustomerVerification } from '../models/CustomerVerification.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
