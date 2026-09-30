import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchants.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';

const _sdkDescriptors = new DescriptorSource(settings, {["getMerchant"]:r0,["updateMerchant"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchants = Object.freeze({
      get: async (merchant_id, params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([
  "merchant_id"
], [merchant_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (merchant_id, params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([
  "merchant_id"
], [merchant_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (merchant_id, params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([
  "merchant_id"
], [merchant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (merchant_id, params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([
  "merchant_id"
], [merchant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeMerchantResponse } from '../models/MerchantResponse.js';
export { makeMerchant } from '../models/Merchant.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeBanner } from '../models/Banner.js';
export { makeImage } from '../models/Image.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
