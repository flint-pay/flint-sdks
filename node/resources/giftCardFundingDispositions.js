import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardFundingDispositions.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCardFundingDisposition"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeGiftCardFundingDispositionResponse } from '../models/GiftCardFundingDispositionResponse.js';
export { makeGiftCardFundingDisposition } from '../models/GiftCardFundingDisposition.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
