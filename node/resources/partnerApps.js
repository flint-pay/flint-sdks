import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/partnerApps.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createPartnerApp"]:r0,["createPartnerAppCredential"]:r0,["deletePartnerApp"]:r0,["deletePartnerAppCredential"]:r0,["getPartnerApp"]:r0,["getPartnerAppCredential"]:r0,["getPartnerAppInstall"]:r0,["listPartnerAppCredentials"]:r0,["listPartnerAppInstalls"]:r0,["listPartnerApps"]:r0,["revokePartnerAppEnvironmentGrant"]:r0,["revokePartnerAppInstall"]:r0,["rotatePartnerAppSecret"]:r0,["updatePartnerApp"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.partnerApps = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPartnerApp", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPartnerApp", result, path))),
      createCredential: async (partner_app_id, params, options) => this.#runtime.request("createPartnerAppCredential", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPartnerAppCredential", result, path))),
      delete: async (partner_app_id, params, options) => this.#runtime.request("deletePartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePartnerApp", result, path))),
      deleteCredential: async (partner_app_id, partner_app_credential_id, params, options) => this.#runtime.request("deletePartnerAppCredential", _sdkRequestInput([
  "partner_app_id",
  "partner_app_credential_id"
], [partner_app_id, partner_app_credential_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePartnerAppCredential", result, path))),
      get: async (partner_app_id, params, options) => this.#runtime.request("getPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerApp", result, path))),
      getCredential: async (partner_app_id, partner_app_credential_id, params, options) => this.#runtime.request("getPartnerAppCredential", _sdkRequestInput([
  "partner_app_id",
  "partner_app_credential_id"
], [partner_app_id, partner_app_credential_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerAppCredential", result, path))),
      getInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerAppInstall", result, path))),
      listCredentials: async (partner_app_id, params, options) => this.#runtime.request("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerAppCredentials", result, path))),
      listCredentialsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerAppCredentials", result, path)),
      listCredentialsItems: (partner_app_id, params, options) => this.#runtime.items("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listInstalls: async (partner_app_id, params, options) => this.#runtime.request("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerAppInstalls", result, path))),
      listInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerAppInstalls", result, path)),
      listInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerApps", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerApps", result, path)),
      listItems: (params, options) => this.#runtime.items("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      revokeEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokePartnerAppEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokePartnerAppEnvironmentGrant", result, path))),
      revokeInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokePartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokePartnerAppInstall", result, path))),
      rotateSecret: async (partner_app_id, params, options) => this.#runtime.request("rotatePartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotatePartnerAppSecret", result, path))),
      update: async (partner_app_id, params, options) => this.#runtime.request("updatePartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePartnerApp", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePartnerAppCredentialJWKSURLRequest } from '../models/CreatePartnerAppCredentialJWKSURLRequest.js';
export { makeCreatePartnerAppCredentialPublicKeyRequest } from '../models/CreatePartnerAppCredentialPublicKeyRequest.js';
export { makeCreatePartnerAppCredentialRequest } from '../models/CreatePartnerAppCredentialRequest.js';
export { makeCreatePartnerAppCredentialWorkloadIdentityRequest } from '../models/CreatePartnerAppCredentialWorkloadIdentityRequest.js';
export { makeCreatePartnerAppRequest } from '../models/CreatePartnerAppRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePartnerAppCredentialJWKSURLRequest } from '../models/PartnerAppCredentialJWKSURLRequest.js';
export { makePartnerAppCredentialPublicKeyRequest } from '../models/PartnerAppCredentialPublicKeyRequest.js';
export { makePartnerAppCredentialWorkloadIdentityRequest } from '../models/PartnerAppCredentialWorkloadIdentityRequest.js';
export { makePartnerAppPermissionManifestEntryRequest } from '../models/PartnerAppPermissionManifestEntryRequest.js';
export { makeRotatePartnerAppSecretRequest } from '../models/RotatePartnerAppSecretRequest.js';
export { makeUpdatePartnerAppRequest } from '../models/UpdatePartnerAppRequest.js';
export { makeWorkloadIdentityClaimConditionRequest } from '../models/WorkloadIdentityClaimConditionRequest.js';
