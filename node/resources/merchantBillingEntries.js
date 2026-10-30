import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantBillingEntries.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["listMerchantBillingEntries"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantBillingEntries = Object.freeze({
      list: async (params, options) => this.#runtime.request("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
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
