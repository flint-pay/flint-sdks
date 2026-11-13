import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantSignups.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelMerchantSignup"]:r0,["createMerchantSignup"]:r0,["getMerchantSignup"]:r0,["listMerchantSignups"]:r0,["resendMerchantSignupCode"]:r0,["rotateMerchantSignupAuthorizationCodes"]:r0,["verifyMerchantSignup"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantSignups = Object.freeze({
      cancel: async (merchant_signup_id, params, options) => this.#runtime.request("cancelMerchantSignup", _sdkRequestInput([
  "merchant_signup_id"
], [merchant_signup_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMerchantSignup", result, path))),
      create: async (params, options) => this.#runtime.request("createMerchantSignup", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMerchantSignup", result, path))),
      get: async (merchant_signup_id, params, options) => this.#runtime.request("getMerchantSignup", _sdkRequestInput([
  "merchant_signup_id"
], [merchant_signup_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantSignup", result, path))),
      list: async (params, options) => this.#runtime.request("listMerchantSignups", _sdkRequestInput([], [], [
  "partner_app_id",
  "external_reference_id",
  "owner_email",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantSignups", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantSignups", _sdkRequestInput([], [], [
  "partner_app_id",
  "external_reference_id",
  "owner_email",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMerchantSignups", result, path)),
      listItems: (params, options) => this.#runtime.items("listMerchantSignups", _sdkRequestInput([], [], [
  "partner_app_id",
  "external_reference_id",
  "owner_email",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resendCode: async (merchant_signup_id, params, options) => this.#runtime.request("resendMerchantSignupCode", _sdkRequestInput([
  "merchant_signup_id"
], [merchant_signup_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resendMerchantSignupCode", result, path))),
      rotateAuthorizationCodes: async (merchant_signup_id, params, options) => this.#runtime.request("rotateMerchantSignupAuthorizationCodes", _sdkRequestInput([
  "merchant_signup_id"
], [merchant_signup_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateMerchantSignupAuthorizationCodes", result, path))),
      verify: async (merchant_signup_id, params, options) => this.#runtime.request("verifyMerchantSignup", _sdkRequestInput([
  "merchant_signup_id"
], [merchant_signup_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyMerchantSignup", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateMerchantSignupRequest } from '../models/CreateMerchantSignupRequest.js';
export { makeMerchantSignupOwnerRequest } from '../models/MerchantSignupOwnerRequest.js';
export { makeMerchantSignupTermsAcceptanceRequest } from '../models/MerchantSignupTermsAcceptanceRequest.js';
export { makeMerchantSignupVersionRequest } from '../models/MerchantSignupVersionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeVerifyMerchantSignupRequest } from '../models/VerifyMerchantSignupRequest.js';
