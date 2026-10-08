import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantAccountSessions.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';

const _sdkDescriptors = new DescriptorSource(settings, {["createMerchantAccountSession"]:r0,["refreshMerchantAccountSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
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
