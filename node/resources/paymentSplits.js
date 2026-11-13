import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentSplits.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["getPaymentSplit"]:r0,["listPaymentSplits"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentSplits = Object.freeze({
      get: async (payment_split_id, params, options) => this.#runtime.request("getPaymentSplit", _sdkRequestInput([
  "payment_split_id"
], [payment_split_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentSplit", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentSplits", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_intent_id",
  "collecting_merchant_id",
  "seller_merchant_id",
  "partner_app_id",
  "partner_app_install_id",
  "external_reference_id",
  "status",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentSplits", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentSplits", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_intent_id",
  "collecting_merchant_id",
  "seller_merchant_id",
  "partner_app_id",
  "partner_app_install_id",
  "external_reference_id",
  "status",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentSplits", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentSplits", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_intent_id",
  "collecting_merchant_id",
  "seller_merchant_id",
  "partner_app_id",
  "partner_app_install_id",
  "external_reference_id",
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
