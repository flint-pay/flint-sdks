import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/licenseKeyActivations.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';

const _sdkDescriptors = new DescriptorSource(settings, {["createLicenseKeyActivation"]:r0,["getLicenseKeyActivation"]:r0,["listLicenseKeyActivations"]:r0,["releaseLicenseKeyActivation"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.licenseKeyActivations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLicenseKeyActivation", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLicenseKeyActivation", result, path))),
      get: async (license_key_activation_id, params, options) => this.#runtime.request("getLicenseKeyActivation", _sdkRequestInput([
  "license_key_activation_id"
], [license_key_activation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLicenseKeyActivation", result, path))),
      list: async (params, options) => this.#runtime.request("listLicenseKeyActivations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "license_key_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLicenseKeyActivations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLicenseKeyActivations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "license_key_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLicenseKeyActivations", result, path)),
      listItems: (params, options) => this.#runtime.items("listLicenseKeyActivations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "license_key_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      release: async (license_key_activation_id, params, options) => this.#runtime.request("releaseLicenseKeyActivation", _sdkRequestInput([
  "license_key_activation_id"
], [license_key_activation_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseLicenseKeyActivation", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateLicenseKeyActivationRequest } from '../models/CreateLicenseKeyActivationRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReleaseLicenseKeyActivationRequest } from '../models/ReleaseLicenseKeyActivationRequest.js';
