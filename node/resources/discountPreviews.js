import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/discountPreviews.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["createDiscountPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDiscountPreviewResponse } from '../models/DiscountPreviewResponse.js';
export { makeDiscountPreview } from '../models/DiscountPreview.js';
export { makePromotionCandidate } from '../models/PromotionCandidate.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePromotionCombinesWith } from '../models/PromotionCombinesWith.js';
export { makePromotionExclusivity } from '../models/PromotionExclusivity.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
