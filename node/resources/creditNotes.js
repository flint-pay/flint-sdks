import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/creditNotes.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';

const _sdkDescriptors = new DescriptorSource(settings, {["createCreditNote"]:r0,["createCreditNoteAllocation"]:r0,["createCreditNoteRefund"]:r0,["getCreditNote"]:r0,["getCreditNoteAllocation"]:r0,["getCreditNotePDF"]:r0,["issueCreditNote"]:r0,["listCreditNoteAllocations"]:r0,["listCreditNoteRefunds"]:r0,["listCreditNotes"]:r0,["reverseCreditNoteAllocation"]:r0,["updateCreditNote"]:r0,["voidCreditNote"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAllocationWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createRefund: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createRefundWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      issueWithResponse: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAllocationsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listAllocationsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      listRefunds: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRefundsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listRefundsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listRefundsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reverseAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCreditNoteResponse } from '../models/CreditNoteResponse.js';
export { makeCreditNoteAllocationResultResponse } from '../models/CreditNoteAllocationResultResponse.js';
export { makeRefundResponse } from '../models/RefundResponse.js';
export { makeCreditNoteAllocationResponse } from '../models/CreditNoteAllocationResponse.js';
export { makeIssueCreditNoteResponse } from '../models/IssueCreditNoteResponse.js';
export { makeCreditNoteAllocationListResponse } from '../models/CreditNoteAllocationListResponse.js';
export { makeCreditNoteAllocation } from '../models/CreditNoteAllocation.js';
export { makeCreditNoteRefundListResponse } from '../models/CreditNoteRefundListResponse.js';
export { makeRefund } from '../models/Refund.js';
export { makeCreditNoteListResponse } from '../models/CreditNoteListResponse.js';
export { makeCreditNote } from '../models/CreditNote.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeCreditNoteAllocationResult } from '../models/CreditNoteAllocationResult.js';
export { makeInvoice } from '../models/Invoice.js';
export { makeInvoiceLateFee } from '../models/InvoiceLateFee.js';
export { makeInvoiceLateFeePolicy } from '../models/InvoiceLateFeePolicy.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeInvoicePaymentTermsSnapshot } from '../models/InvoicePaymentTermsSnapshot.js';
export { makeInvoicePaymentTermCalculation } from '../models/InvoicePaymentTermCalculation.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeInvoiceScheduleEntry } from '../models/InvoiceScheduleEntry.js';
export { makeInvoiceScheduleAmountSpecification } from '../models/InvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleDue } from '../models/InvoiceScheduleDue.js';
export { makeInvoiceSnapshot } from '../models/InvoiceSnapshot.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeOrderCharge } from '../models/OrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeInvoiceDiscount } from '../models/InvoiceDiscount.js';
export { makeInvoiceLineItem } from '../models/InvoiceLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeBundleComponentVariantSummary } from '../models/BundleComponentVariantSummary.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeImage } from '../models/Image.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeInvoiceTip } from '../models/InvoiceTip.js';
export { makeIssuedCreditNote } from '../models/IssuedCreditNote.js';
export { makeTaxIdentity } from '../models/TaxIdentity.js';
export { makeCreditNoteLine } from '../models/CreditNoteLine.js';
export { makeRefundLineItemAllocation } from '../models/RefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../models/RefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../models/RefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../models/RefundAdjustmentReason.js';
export { makeRefundLineItemAutomaticRefund } from '../models/RefundLineItemAutomaticRefund.js';
export { makeRefundLineItemModifierAllocation } from '../models/RefundLineItemModifierAllocation.js';
export { makeRefundTaxBreakdownRefund } from '../models/RefundTaxBreakdownRefund.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makePaymentRefund } from '../models/PaymentRefund.js';
export { makeRefundTenderAllocation } from '../models/RefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../models/RefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../models/RefundUnissuedGiftCardRecovery.js';
