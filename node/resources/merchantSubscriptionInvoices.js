import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantSubscriptionInvoices.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["getMerchantBillingInvoice"]:r0,["listMerchantBillingInvoices"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantSubscriptionInvoices = Object.freeze({
      get: async (merchant_billing_invoice_id, params, options) => this.#runtime.request("getMerchantBillingInvoice", _sdkRequestInput([
  "merchant_billing_invoice_id"
], [merchant_billing_invoice_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantBillingInvoice", result, path))),
      getWithResponse: async (merchant_billing_invoice_id, params, options) => this.#runtime.request("getMerchantBillingInvoice", _sdkRequestInput([
  "merchant_billing_invoice_id"
], [merchant_billing_invoice_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
