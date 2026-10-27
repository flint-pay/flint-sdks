import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/onboarding.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["advanceOnboarding"]:r0,["createOnboardingAPIKey"]:r0,["getOnboardingState"]:r0,["startOnboarding"]:r0,["verifyOnboardingEmail"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.onboarding = Object.freeze({
      advance: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceOnboarding", result, path))),
      advanceWithResponse: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOnboardingAPIKey", result, path))),
      createAPIKeyWithResponse: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOnboardingState", result, path))),
      getStateWithResponse: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      startFlow: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startOnboarding", result, path))),
      startFlowWithResponse: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      verifyEmailCode: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyOnboardingEmail", result, path))),
      verifyEmailCodeWithResponse: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeDeveloperInitialAPIKeyRequest } from '../models/DeveloperInitialAPIKeyRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOnboardingAdvanceRequest } from '../models/OnboardingAdvanceRequest.js';
export { makeOnboardingProfileRequest } from '../models/OnboardingProfileRequest.js';
export { makeOnboardingStartRequest } from '../models/OnboardingStartRequest.js';
export { makeOnboardingVerifyEmailRequest } from '../models/OnboardingVerifyEmailRequest.js';
