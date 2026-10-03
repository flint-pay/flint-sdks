import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantAccountSessions.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

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
export { makeMerchantAccountSessionEffectivePolicy } from '../models/MerchantAccountSessionEffectivePolicy.js';
export { makeOnboardingExternalAction } from '../models/OnboardingExternalAction.js';
export { makeMerchantAccountSessionStripeLaunch } from '../models/MerchantAccountSessionStripeLaunch.js';
export { makeMerchantAccountSessionStripeComponentLaunch } from '../models/MerchantAccountSessionStripeComponentLaunch.js';
export { makeMerchantAccountSessionStripeComponentProps } from '../models/MerchantAccountSessionStripeComponentProps.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../models/MerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeRequirements } from '../models/MerchantAccountSessionStripeRequirements.js';
export { makeOnboardingRequirements } from '../models/OnboardingRequirements.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
