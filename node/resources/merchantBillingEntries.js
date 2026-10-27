import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantBillingEntries.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingEntries", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantBillingEntries", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
