import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/platformFeePayouts.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["getPlatformFeePayout"]:r0,["listPlatformFeePayouts"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.platformFeePayouts = Object.freeze({
      get: async (platform_fee_payout_id, params, options) => this.#runtime.request("getPlatformFeePayout", _sdkRequestInput([
  "platform_fee_payout_id"
], [platform_fee_payout_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPlatformFeePayout", result, path))),
      list: async (params, options) => this.#runtime.request("listPlatformFeePayouts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPlatformFeePayouts", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPlatformFeePayouts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPlatformFeePayouts", result, path)),
      listItems: (params, options) => this.#runtime.items("listPlatformFeePayouts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
