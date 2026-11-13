import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/platformFeeBalanceTransactions.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["getPlatformFeeBalanceTransaction"]:r0,["listPlatformFeeBalanceTransactions"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.platformFeeBalanceTransactions = Object.freeze({
      get: async (platform_fee_balance_transaction_id, params, options) => this.#runtime.request("getPlatformFeeBalanceTransaction", _sdkRequestInput([
  "platform_fee_balance_transaction_id"
], [platform_fee_balance_transaction_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPlatformFeeBalanceTransaction", result, path))),
      list: async (params, options) => this.#runtime.request("listPlatformFeeBalanceTransactions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "platform_fee_id",
  "platform_fee_payout_id",
  "type",
  "occurred_after",
  "occurred_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPlatformFeeBalanceTransactions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPlatformFeeBalanceTransactions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "platform_fee_id",
  "platform_fee_payout_id",
  "type",
  "occurred_after",
  "occurred_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPlatformFeeBalanceTransactions", result, path)),
      listItems: (params, options) => this.#runtime.items("listPlatformFeeBalanceTransactions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "platform_fee_id",
  "platform_fee_payout_id",
  "type",
  "occurred_after",
  "occurred_before"
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
