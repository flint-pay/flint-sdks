import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/onboarding.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

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
