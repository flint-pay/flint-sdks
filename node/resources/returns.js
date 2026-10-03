import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returns.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';

const _sdkDescriptors = new DescriptorSource(settings, {["addReturnLineItem"]:r0,["cancelReturn"]:r0,["cancelReturnLineItem"]:r0,["completeReturn"]:r0,["createReturn"]:r0,["createReturnDisposition"]:r0,["createReturnInspection"]:r0,["createReturnReceipt"]:r0,["createReturnResolution"]:r0,["decideReturn"]:r0,["deleteReturnLineItem"]:r0,["getReturn"]:r0,["getReturnLineItem"]:r0,["listReturnLineItems"]:r0,["listReturns"]:r0,["processExistingReturn"]:r0,["reopenReturn"]:r0,["updateReturn"]:r0,["updateReturnLineItem"]:r0,["waiveReturnLineInspection"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returns = Object.freeze({
      addLineItem: async (return_id, params, options) => this.#runtime.request("addReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addLineItemWithResponse: async (return_id, params, options) => this.#runtime.request("addReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      completeWithResponse: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createDispositionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createInspectionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReceiptWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createResolutionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      decideWithResponse: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listLineItems: async (return_id, params, options) => this.#runtime.request("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listLineItemsWithResponse: async (return_id, params, options) => this.#runtime.request("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listLineItemsPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listLineItemsPagesWithResponse: (return_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listLineItemsItems: (return_id, params, options) => this.#runtime.items("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options),
      processExisting: async (return_id, params, options) => this.#runtime.request("processExistingReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      processExistingWithResponse: async (return_id, params, options) => this.#runtime.request("processExistingReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      reopenWithResponse: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      waiveLineInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      waiveLineInspectionWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeAddReturnLineItemResponse } from '../models/AddReturnLineItemResponse.js';
export { makeCancelReturnDispositionResponse } from '../models/CancelReturnDispositionResponse.js';
export { makeCreateReturnInspectionResponse } from '../models/CreateReturnInspectionResponse.js';
export { makeCreateReturnReceiptResponse } from '../models/CreateReturnReceiptResponse.js';
export { makeCancelReturnResolutionResponse } from '../models/CancelReturnResolutionResponse.js';
export { makeGetReturnLineItemResponse } from '../models/GetReturnLineItemResponse.js';
export { makeListReturnLineItemsResponse } from '../models/ListReturnLineItemsResponse.js';
export { makeReturnLineItem } from '../models/ReturnLineItem.js';
export { makeListReturnsResponse } from '../models/ListReturnsResponse.js';
export { makeReturnResource } from '../models/ReturnResource.js';
export { makeProcessExistingReturnResponse } from '../models/ProcessExistingReturnResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeReturnDisposition } from '../models/ReturnDisposition.js';
export { makeReturnActor } from '../models/ReturnActor.js';
export { makeReturnInspection } from '../models/ReturnInspection.js';
export { makeReturnInspectionLineItem } from '../models/ReturnInspectionLineItem.js';
export { makeReturnReceipt } from '../models/ReturnReceipt.js';
export { makeReturnReceiptLineItem } from '../models/ReturnReceiptLineItem.js';
export { makeReturnUnverifiedItem } from '../models/ReturnUnverifiedItem.js';
export { makeReturnResolution } from '../models/ReturnResolution.js';
export { makeReturnResolutionAdjustment } from '../models/ReturnResolutionAdjustment.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnResolutionExecutionBlocker } from '../models/ReturnResolutionExecutionBlocker.js';
export { makeReturnResolutionLineItem } from '../models/ReturnResolutionLineItem.js';
export { makeExpandedPaymentIntentSummary } from '../models/ExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makeRefund } from '../models/Refund.js';
export { makeRefundLineItemAllocation } from '../models/RefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../models/RefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../models/RefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../models/RefundAdjustmentReason.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeRefundLineItemModifierAllocation } from '../models/RefundLineItemModifierAllocation.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeRefundTaxBreakdownRefund } from '../models/RefundTaxBreakdownRefund.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makePaymentRefund } from '../models/PaymentRefund.js';
export { makeRefundTenderAllocation } from '../models/RefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../models/RefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../models/RefundUnissuedGiftCardRecovery.js';
export { makeReturnReplacementLineItem } from '../models/ReturnReplacementLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeReturnLineItemEligibility } from '../models/ReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../models/ReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../models/ReturnPolicyAdjustmentProposal.js';
export { makeFulfillmentChargeLink } from '../models/FulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../models/DigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../models/FulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../models/DeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../models/ExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../models/PickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../models/FulfillmentRecipient.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeServiceFulfillmentDetails } from '../models/ServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../models/ExpandedShipmentSummary.js';
export { makeImage } from '../models/Image.js';
export { makeReturnLineItemValue } from '../models/ReturnLineItemValue.js';
export { makeBuyerAction } from '../models/BuyerAction.js';
export { makeReturnCompletionBlocker } from '../models/ReturnCompletionBlocker.js';
export { makeReturnFinancialSummary } from '../models/ReturnFinancialSummary.js';
export { makeReturnHandoffRequirement } from '../models/ReturnHandoffRequirement.js';
export { makeReturnHandoffDestination } from '../models/ReturnHandoffDestination.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeReturnPolicyEvaluation } from '../models/ReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../models/ReturnPolicyEvaluationLineItem.js';
export { makeReturnProcessResult } from '../models/ReturnProcessResult.js';
