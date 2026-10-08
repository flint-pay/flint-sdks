import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryPreviews.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDeliveryPreviewResponse } from '../models/DeliveryPreviewResponse.js';
export { makeDeliveryBuyerLocationResource } from '../models/DeliveryBuyerLocationResource.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliveryPreviewChoiceGroupResource } from '../models/DeliveryPreviewChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../models/DeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../models/DeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../models/DeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../models/DeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../models/DeliveryWindowResource.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeDeliveryOptionProjection } from '../models/DeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../models/DeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../models/DeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../models/DeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../models/DeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../models/DeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../models/DeliveryLocationSummaryResource.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../models/DeliveryQuoteLineItemResource.js';
export { makeCreateOrderLineItem } from '../models/CreateOrderLineItem.js';
export { makeLineItemFulfillmentRequest } from '../models/LineItemFulfillmentRequest.js';
export { makeLineItemFulfillmentSizeRequest } from '../models/LineItemFulfillmentSizeRequest.js';
export { makeLineItemFulfillmentOriginRequest } from '../models/LineItemFulfillmentOriginRequest.js';
export { makeLineItemFulfillmentWeightRequest } from '../models/LineItemFulfillmentWeightRequest.js';
export { makeGiftCardPurchaseRequest } from '../models/GiftCardPurchaseRequest.js';
export { makeGiftCardPurchaseRecipient } from '../models/GiftCardPurchaseRecipient.js';
export { makeImageReferenceRequest } from '../models/ImageReferenceRequest.js';
export { makeOrderDraftLineItemInventoryDemandRequest } from '../models/OrderDraftLineItemInventoryDemandRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeSubscribedLineRequest } from '../models/SubscribedLineRequest.js';
export { makeOrderDraftLineItemTaxRequest } from '../models/OrderDraftLineItemTaxRequest.js';
export { makeOrderDraftLineItemTaxCalculationRequest } from '../models/OrderDraftLineItemTaxCalculationRequest.js';
export { makeOrderDraftTaxComponentRequest } from '../models/OrderDraftTaxComponentRequest.js';
export { makeOrderDraftTaxJurisdictionRequest } from '../models/OrderDraftTaxJurisdictionRequest.js';
export { makeDeliveryMerchantDiagnostic } from '../models/DeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../models/DeliveryEligibilityMismatch.js';
export { makeDeliveryPickupAvailabilityLocationResource } from '../models/DeliveryPickupAvailabilityLocationResource.js';
export { makeDeliveryPickupAvailabilityCandidateOutcome } from '../models/DeliveryPickupAvailabilityCandidateOutcome.js';
export { makeDeliveryPickupAvailabilityMethodResource } from '../models/DeliveryPickupAvailabilityMethodResource.js';
export { makeDeliveryPickupAvailabilityLocationSummary } from '../models/DeliveryPickupAvailabilityLocationSummary.js';
export { makeDeliveryPickupAvailabilityDiagnostic } from '../models/DeliveryPickupAvailabilityDiagnostic.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
