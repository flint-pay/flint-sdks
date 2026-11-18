import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/licenseKeyPools.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';

const _sdkDescriptors = new DescriptorSource(settings, {["createLicenseKeyPool"]:r0,["createLicenseKeyPoolKeys"]:r0,["deleteLicenseKeyPool"]:r0,["getLicenseKeyPool"]:r0,["listLicenseKeyPoolKeys"]:r0,["listLicenseKeyPools"]:r0,["removeLicenseKeyPoolKeys"]:r0,["updateLicenseKeyPool"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.licenseKeyPools = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLicenseKeyPool", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLicenseKeyPool", result, path))),
      createKeys: async (license_key_pool_id, params, options) => this.#runtime.request("createLicenseKeyPoolKeys", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLicenseKeyPoolKeys", result, path))),
      delete: async (license_key_pool_id, params, options) => this.#runtime.request("deleteLicenseKeyPool", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "expected_version",
  "remove_available_keys",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteLicenseKeyPool", result, path))),
      get: async (license_key_pool_id, params, options) => this.#runtime.request("getLicenseKeyPool", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLicenseKeyPool", result, path))),
      listKeys: async (license_key_pool_id, params, options) => this.#runtime.request("listLicenseKeyPoolKeys", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLicenseKeyPoolKeys", result, path))),
      listKeysPages: (license_key_pool_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listLicenseKeyPoolKeys", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLicenseKeyPoolKeys", result, path)),
      listKeysItems: (license_key_pool_id, params, options) => this.#runtime.items("listLicenseKeyPoolKeys", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listLicenseKeyPools", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLicenseKeyPools", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLicenseKeyPools", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLicenseKeyPools", result, path)),
      listItems: (params, options) => this.#runtime.items("listLicenseKeyPools", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      removeKeys: async (license_key_pool_id, params, options) => this.#runtime.request("removeLicenseKeyPoolKeys", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeLicenseKeyPoolKeys", result, path))),
      update: async (license_key_pool_id, params, options) => this.#runtime.request("updateLicenseKeyPool", _sdkRequestInput([
  "license_key_pool_id"
], [license_key_pool_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLicenseKeyPool", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateLicenseKeyPoolKeysRequest } from '../models/CreateLicenseKeyPoolKeysRequest.js';
export { makeCreateLicenseKeyPoolRequest } from '../models/CreateLicenseKeyPoolRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRemoveLicenseKeyPoolKeysRequest } from '../models/RemoveLicenseKeyPoolKeysRequest.js';
export { makeUpdateLicenseKeyPoolRequest } from '../models/UpdateLicenseKeyPoolRequest.js';
