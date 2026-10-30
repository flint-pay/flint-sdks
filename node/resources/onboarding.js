import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/onboarding.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["advanceOnboarding"]:r0,["createOnboardingAPIKey"]:r0,["getOnboardingState"]:r0,["startOnboarding"]:r0,["verifyOnboardingEmail"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.onboarding = Object.freeze({
      advance: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceOnboarding", result, path))),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOnboardingAPIKey", result, path))),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOnboardingState", result, path))),
      start: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startOnboarding", result, path))),
      verifyEmail: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyOnboardingEmail", result, path))),
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
