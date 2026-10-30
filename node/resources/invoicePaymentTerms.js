import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/invoicePaymentTerms.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createInvoicePaymentTerm"]:r0,["deleteInvoicePaymentTerm"]:r0,["getInvoicePaymentTerm"]:r0,["listInvoicePaymentTerms"]:r0,["updateInvoicePaymentTerm"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoicePaymentTerm", result, path))),
      delete: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInvoicePaymentTerm", result, path))),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentTerm", result, path))),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoicePaymentTerm", result, path))),
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
