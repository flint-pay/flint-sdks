import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/onboarding.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';

const _sdkDescriptors = new DescriptorSource(settings, {["advanceOnboarding"]:r0,["createOnboardingAPIKey"]:r0,["getOnboardingState"]:r0,["startOnboarding"]:r0,["verifyOnboardingEmail"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.onboarding = Object.freeze({
      advance: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(result => _sdkPayload(result, ["data"])),
      advanceWithResponse: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(_sdkResponse),
      createAPIKey: (input = {}, options) => this.#runtime.request("createOnboardingAPIKey", input, options).then(result => _sdkPayload(result, ["data"])),
      createAPIKeyWithResponse: (input = {}, options) => this.#runtime.request("createOnboardingAPIKey", input, options).then(_sdkResponse),
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
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      startFlowWithResponse: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
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
export { makeMerchant } from '../models/Merchant.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeBanner } from '../models/Banner.js';
export { makeImage } from '../models/Image.js';
export { makeUser } from '../models/User.js';
