import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/discountPreviews.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';

const _sdkDescriptors = new DescriptorSource(settings, {["createDiscountPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDiscountPreviewResponse } from '../models/DiscountPreviewResponse.js';
export { makeDiscountPreview } from '../models/DiscountPreview.js';
export { makePromotionCandidate } from '../models/PromotionCandidate.js';
export { makePromotionCombinesWith } from '../models/PromotionCombinesWith.js';
export { makePromotionExclusivity } from '../models/PromotionExclusivity.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
