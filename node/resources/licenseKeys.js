import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/licenseKeys.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';

const _sdkDescriptors = new DescriptorSource(settings, {["disableLicenseKey"]:r0,["getLicenseKey"]:r0,["listLicenseKeys"]:r0,["lookupLicenseKey"]:r0,["reinstateLicenseKey"]:r0,["resendLicenseKey"]:r0,["revealLicenseKey"]:r0,["rotateLicenseKeyKey"]:r0,["updateLicenseKey"]:r0,["validateLicenseKey"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.licenseKeys = Object.freeze({
      disable: async (license_key_id, params, options) => this.#runtime.request("disableLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("disableLicenseKey", result, path))),
      get: async (license_key_id, params, options) => this.#runtime.request("getLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLicenseKey", result, path))),
      list: async (params, options) => this.#runtime.request("listLicenseKeys", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "subscription_id",
  "product_id",
  "variant_id",
  "license_key_pool_id",
  "email",
  "status",
  "created_after",
  "created_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLicenseKeys", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLicenseKeys", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "subscription_id",
  "product_id",
  "variant_id",
  "license_key_pool_id",
  "email",
  "status",
  "created_after",
  "created_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLicenseKeys", result, path)),
      listItems: (params, options) => this.#runtime.items("listLicenseKeys", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "subscription_id",
  "product_id",
  "variant_id",
  "license_key_pool_id",
  "email",
  "status",
  "created_after",
  "created_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupLicenseKey", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupLicenseKey", result, path))),
      reinstate: async (license_key_id, params, options) => this.#runtime.request("reinstateLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reinstateLicenseKey", result, path))),
      resend: async (license_key_id, params, options) => this.#runtime.request("resendLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resendLicenseKey", result, path))),
      reveal: async (license_key_id, params, options) => this.#runtime.request("revealLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revealLicenseKey", result, path))),
      rotateKey: async (license_key_id, params, options) => this.#runtime.request("rotateLicenseKeyKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateLicenseKeyKey", result, path))),
      update: async (license_key_id, params, options) => this.#runtime.request("updateLicenseKey", _sdkRequestInput([
  "license_key_id"
], [license_key_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLicenseKey", result, path))),
      validate: async (params, options) => this.#runtime.request("validateLicenseKey", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("validateLicenseKey", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeDisableLicenseKeyRequest } from '../models/DisableLicenseKeyRequest.js';
export { makeLicenseKeyVersionRequest } from '../models/LicenseKeyVersionRequest.js';
export { makeLookupLicenseKeyRequest } from '../models/LookupLicenseKeyRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResendLicenseKeyRequest } from '../models/ResendLicenseKeyRequest.js';
export { makeRevealLicenseKeyRequest } from '../models/RevealLicenseKeyRequest.js';
export { makeUpdateLicenseKeyRequest } from '../models/UpdateLicenseKeyRequest.js';
export { makeValidateLicenseKeyRequest } from '../models/ValidateLicenseKeyRequest.js';
