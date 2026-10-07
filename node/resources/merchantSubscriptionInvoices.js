import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/merchantSubscriptionInvoices.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';

const _sdkDescriptors = new DescriptorSource(settings, {["getMerchantSubscriptionInvoice"]:r0,["listMerchantSubscriptionInvoices"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.merchantSubscriptionInvoices = Object.freeze({
      get: async (merchant_subscription_invoice_id, params, options) => this.#runtime.request("getMerchantSubscriptionInvoice", _sdkRequestInput([
  "merchant_subscription_invoice_id"
], [merchant_subscription_invoice_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (merchant_subscription_invoice_id, params, options) => this.#runtime.request("getMerchantSubscriptionInvoice", _sdkRequestInput([
  "merchant_subscription_invoice_id"
], [merchant_subscription_invoice_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeMerchantSubscriptionInvoiceResponse } from '../models/MerchantSubscriptionInvoiceResponse.js';
export { makeMerchantSubscriptionInvoiceListResponse } from '../models/MerchantSubscriptionInvoiceListResponse.js';
export { makeMerchantSubscriptionInvoice } from '../models/MerchantSubscriptionInvoice.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeMerchantSubscriptionInvoiceLine } from '../models/MerchantSubscriptionInvoiceLine.js';
