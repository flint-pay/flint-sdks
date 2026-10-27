import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/invoicePaymentTerms.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createInvoicePaymentTerm"]:r0,["deleteInvoicePaymentTerm"]:r0,["getInvoicePaymentTerm"]:r0,["listInvoicePaymentTerms"]:r0,["updateInvoicePaymentTerm"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoicePaymentTerm", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInvoicePaymentTerm", result, path))),
      removeWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentTerm", result, path))),
      getWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoicePaymentTerm", result, path))),
      updateWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInvoicePaymentTermRequest } from '../models/CreateInvoicePaymentTermRequest.js';
export { makeInvoiceLateFeePolicy } from '../models/InvoiceLateFeePolicy.js';
export { makeInvoiceLateFeePolicyFixed } from '../models/InvoiceLateFeePolicyFixed.js';
export { makeInvoiceLateFeePolicyPercentage } from '../models/InvoiceLateFeePolicyPercentage.js';
export { makeInvoicePaymentTermCalculation } from '../models/InvoicePaymentTermCalculation.js';
export { makeInvoicePaymentTermCalculationDayOfMonth } from '../models/InvoicePaymentTermCalculationDayOfMonth.js';
export { makeInvoicePaymentTermCalculationDayOfNextMonth } from '../models/InvoicePaymentTermCalculationDayOfNextMonth.js';
export { makeInvoicePaymentTermCalculationDaysAfterMonthEnd } from '../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.js';
export { makeInvoicePaymentTermCalculationNetDays } from '../models/InvoicePaymentTermCalculationNetDays.js';
export { makeInvoicePaymentTermCalculationOnReceipt } from '../models/InvoicePaymentTermCalculationOnReceipt.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInvoicePaymentTermRequest } from '../models/UpdateInvoicePaymentTermRequest.js';
