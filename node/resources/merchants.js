import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchants.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["getMerchant"]:r0,["updateMerchant"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchants = Object.freeze({
      get: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeMerchantResponse } from '../models/MerchantResponse.js';
export { makeMerchant } from '../models/Merchant.js';
export { makeAddress } from '../models/Address.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeBanner } from '../models/Banner.js';
export { makeImage } from '../models/Image.js';
export { makeMerchantReadinessAxis } from '../models/MerchantReadinessAxis.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMerchantReadinessRequirements } from '../models/MerchantReadinessRequirements.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
