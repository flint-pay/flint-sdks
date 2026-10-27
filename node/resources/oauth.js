import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/oauth.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["authorizePartnerInstall"]:r0,["previewPartnerInstallAuthorization"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.oauth = Object.freeze({
      authorizePartnerInstall: async (params, options) => this.#runtime.request("authorizePartnerInstall", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "merchant_id",
  "state"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("previewPartnerInstallAuthorization", result, path))),
      previewPartnerInstallAuthorizationWithResponse: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "state"
], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePartnerAppPermissionManifestEntry } from '../models/PartnerAppPermissionManifestEntry.js';
