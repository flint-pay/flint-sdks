import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/creditNotes.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createCreditNote"]:r0,["createCreditNoteAllocation"]:r0,["createCreditNoteRefund"]:r0,["getCreditNote"]:r0,["getCreditNoteAllocation"]:r0,["getCreditNotePDF"]:r0,["issueCreditNote"]:r0,["listCreditNoteAllocations"]:r0,["listCreditNoteRefunds"]:r0,["listCreditNotes"]:r0,["reverseCreditNoteAllocation"]:r0,["updateCreditNote"]:r0,["voidCreditNote"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNote", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteAllocation", result, path))),
      createAllocationWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createRefund: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteRefund", result, path))),
      createRefundWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNote", result, path))),
      getWithResponse: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNoteAllocation", result, path))),
      getAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], false, false, params), options).then(_sdkResponse),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], false, false, params), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueCreditNote", result, path))),
      issueWithResponse: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path))),
      listAllocationsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path)),
      listAllocationsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      listRefunds: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path))),
      listRefundsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path)),
      listRefundsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listRefundsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseCreditNoteAllocation", result, path))),
      reverseAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCreditNote", result, path))),
      updateWithResponse: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidCreditNote", result, path))),
      voidResourceWithResponse: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeCreateCreditNoteAllocationRequest } from '../models/CreateCreditNoteAllocationRequest.js';
export { makeCreateCreditNoteRefundRequest } from '../models/CreateCreditNoteRefundRequest.js';
export { makeCreateCreditNoteRequest } from '../models/CreateCreditNoteRequest.js';
export { makeCreditNoteCorrectionRequest } from '../models/CreditNoteCorrectionRequest.js';
export { makeCreditNoteCorrectionRequestAmount } from '../models/CreditNoteCorrectionRequestAmount.js';
export { makeCreditNoteCorrectionRequestQuantity } from '../models/CreditNoteCorrectionRequestQuantity.js';
export { makeCreditNoteIssueAllocationRequest } from '../models/CreditNoteIssueAllocationRequest.js';
export { makeCreditNoteLineItemRequest } from '../models/CreditNoteLineItemRequest.js';
export { makeCreditNoteRefundRequest } from '../models/CreditNoteRefundRequest.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeInvoiceLateFeePolicy } from '../models/InvoiceLateFeePolicy.js';
export { makeInvoiceLateFeePolicyFixed } from '../models/InvoiceLateFeePolicyFixed.js';
export { makeInvoiceLateFeePolicyPercentage } from '../models/InvoiceLateFeePolicyPercentage.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoicePaymentTermCalculation } from '../models/InvoicePaymentTermCalculation.js';
export { makeInvoicePaymentTermCalculationDayOfMonth } from '../models/InvoicePaymentTermCalculationDayOfMonth.js';
export { makeInvoicePaymentTermCalculationDayOfNextMonth } from '../models/InvoicePaymentTermCalculationDayOfNextMonth.js';
export { makeInvoicePaymentTermCalculationDaysAfterMonthEnd } from '../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.js';
export { makeInvoicePaymentTermCalculationNetDays } from '../models/InvoicePaymentTermCalculationNetDays.js';
export { makeInvoicePaymentTermCalculationOnReceipt } from '../models/InvoicePaymentTermCalculationOnReceipt.js';
export { makeInvoiceScheduleAmountSpecification } from '../models/InvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleAmountSpecificationFixed } from '../models/InvoiceScheduleAmountSpecificationFixed.js';
export { makeInvoiceScheduleAmountSpecificationPercentage } from '../models/InvoiceScheduleAmountSpecificationPercentage.js';
export { makeInvoiceScheduleAmountSpecificationRemainingBalance } from '../models/InvoiceScheduleAmountSpecificationRemainingBalance.js';
export { makeIssueCreditNoteRequest } from '../models/IssueCreditNoteRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeResourceVersionRequest } from '../models/ResourceVersionRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateCreditNoteRequest } from '../models/UpdateCreditNoteRequest.js';
