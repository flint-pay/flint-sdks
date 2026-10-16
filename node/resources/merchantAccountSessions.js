import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantAccountSessions.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createMerchantAccountSession"]:r0,["refreshMerchantAccountSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeMerchantAccountSessionResponse } from '../models/MerchantAccountSessionResponse.js';
export { makeMerchantAccountSession } from '../models/MerchantAccountSession.js';
export { makeMerchantAccountSessionClientSession } from '../models/MerchantAccountSessionClientSession.js';
export { makeMerchantAccountSessionStripe } from '../models/MerchantAccountSessionStripe.js';
export { makeMerchantAccountSessionStripeAccountSession } from '../models/MerchantAccountSessionStripeAccountSession.js';
export { makeMerchantAccountSessionStripeComponent } from '../models/MerchantAccountSessionStripeComponent.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../models/MerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeRequirements } from '../models/MerchantAccountSessionStripeRequirements.js';
export { makeMerchantAccountSessionEffectivePolicy } from '../models/MerchantAccountSessionEffectivePolicy.js';
export { makeOnboardingRequirements } from '../models/OnboardingRequirements.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
