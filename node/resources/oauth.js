import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/oauth.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';

const _sdkDescriptors = new DescriptorSource(settings, {["authorizeCLIDevice"]:r0,["exchangeOAuthToken"]:r0,["listCLIContexts"]:r0,["previewPartnerInstallAuthorization"]:r0,["reauthorizeCLIDevice"]:r0,["revokeOAuthToken"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.oauth = Object.freeze({
      authorizeCLIDevice: async (params, options) => this.#runtime.request("authorizeCLIDevice", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("authorizeCLIDevice", result, path))),
      exchangeToken: async (params, options) => this.#runtime.request("exchangeOAuthToken", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("exchangeOAuthToken", result, path))),
      listCLIContexts: async (params, options) => this.#runtime.request("listCLIContexts", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCLIContexts", result, path))),
      previewPartnerInstallAuthorization: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("previewPartnerInstallAuthorization", result, path))),
      reauthorizeCLIDevice: async (params, options) => this.#runtime.request("reauthorizeCLIDevice", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("reauthorizeCLIDevice", result, path))),
      revokeToken: async (params, options) => this.#runtime.request("revokeOAuthToken", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCLIContextsRequest } from '../models/CLIContextsRequest.js';
export { makeCLIDeviceRequest } from '../models/CLIDeviceRequest.js';
export { makeCLIReauthorizeRequest } from '../models/CLIReauthorizeRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOAuthRevokeRequest } from '../models/OAuthRevokeRequest.js';
export { makeOAuthTokenRequest } from '../models/OAuthTokenRequest.js';
export { makeOAuthTokenRequestAuthorizationCode } from '../models/OAuthTokenRequestAuthorizationCode.js';
export { makeOAuthTokenRequestDeviceCode } from '../models/OAuthTokenRequestDeviceCode.js';
export { makeOAuthTokenRequestRefreshToken } from '../models/OAuthTokenRequestRefreshToken.js';
export { makeOAuthTokenRequestTokenExchange } from '../models/OAuthTokenRequestTokenExchange.js';
