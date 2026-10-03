import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/onboarding.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

const _sdkDescriptors = new DescriptorSource(settings, {["advanceOnboarding"]:r0,["createOnboardingAPIKey"]:r0,["getOnboardingState"]:r0,["startOnboarding"]:r0,["verifyOnboardingEmail"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.onboarding = Object.freeze({
      advance: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(result => _sdkPayload(result, ["data"])),
      advanceWithResponse: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(_sdkResponse),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAPIKeyWithResponse: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getStateWithResponse: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      startFlow: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      startFlowWithResponse: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      verifyEmailCode: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      verifyEmailCodeWithResponse: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeOnboardingStateResponse } from '../models/OnboardingStateResponse.js';
export { makeCreateAPIKeyResponse } from '../models/CreateAPIKeyResponse.js';
export { makeOnboardingStartResponse } from '../models/OnboardingStartResponse.js';
export { makeOnboardingVerifyEmailResponse } from '../models/OnboardingVerifyEmailResponse.js';
export { makeOnboardingAdvanceRequest } from '../models/OnboardingAdvanceRequest.js';
export { makeOnboardingExternalAction } from '../models/OnboardingExternalAction.js';
export { makeOnboardingLaunchRecommendedPolicy } from '../models/OnboardingLaunchRecommendedPolicy.js';
export { makeOnboardingLaunchReference } from '../models/OnboardingLaunchReference.js';
export { makeOnboardingNextStep } from '../models/OnboardingNextStep.js';
export { makeOnboardingProfile } from '../models/OnboardingProfile.js';
export { makeOnboardingProfileRequest } from '../models/OnboardingProfileRequest.js';
export { makeOnboardingRequirements } from '../models/OnboardingRequirements.js';
export { makeOnboardingStartRequest } from '../models/OnboardingStartRequest.js';
export { makeOnboardingStartResult } from '../models/OnboardingStartResult.js';
export { makeOnboardingState } from '../models/OnboardingState.js';
export { makeOnboardingVerifyEmailRequest } from '../models/OnboardingVerifyEmailRequest.js';
export { makeOnboardingVerifyEmailResult } from '../models/OnboardingVerifyEmailResult.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeAPIKeyWithSecret } from '../models/APIKeyWithSecret.js';
export { makeMerchantAccountSessionStripeLaunch } from '../models/MerchantAccountSessionStripeLaunch.js';
export { makeMerchantAccountSessionStripeComponentLaunch } from '../models/MerchantAccountSessionStripeComponentLaunch.js';
export { makeMerchantAccountSessionStripeComponentProps } from '../models/MerchantAccountSessionStripeComponentProps.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../models/MerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeRequirements } from '../models/MerchantAccountSessionStripeRequirements.js';
export { makeMerchant } from '../models/Merchant.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeBanner } from '../models/Banner.js';
export { makeImage } from '../models/Image.js';
export { makeUser } from '../models/User.js';
