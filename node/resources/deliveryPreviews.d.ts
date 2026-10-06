export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';

import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryPreviewResponse } from '../declarations/DeliveryPreviewResponse.js';
import type { DeliveryPreviewsCreateInput } from '../declarations/DeliveryPreviewsCreateInput.js';
import type { DeliveryPreviewsCreateResponse } from '../declarations/DeliveryPreviewsCreateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryPreviewsResource {
    /**
 * Computes delivery options with mode delivery_options or up to 25 pickup locations with mode pickup_locations. Creates no resource, holds no inventory, and does not change the current selection. Pickup locations are nearest first when a buyer location is provided. Merchant callers receive diagnostics. Checkout credentials may use only pickup_locations for their own checkout session.
 * POST /v1/delivery-previews
 * @example
 * client.deliveryPreviews.create({body: {currency: "USD", delivery_method_ids: [], line_items: [{variant_id: "example"}], mode: "delivery_options"}})
 */
    create(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryPreviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryPreviewsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryPreviews: DeliveryPreviewsResource;
}
export type { DeliveryPreviewsCreateInput } from '../declarations/DeliveryPreviewsCreateInput.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryPreviewResponse } from '../declarations/DeliveryPreviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryPreviewsCreateResponse } from '../declarations/DeliveryPreviewsCreateResponse.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { CreateDeliveryPreviewRequestInput } from '../declarations/CreateDeliveryPreviewRequestInput.js';
export type { DeliveryBuyerLocationRequestInput } from '../declarations/DeliveryBuyerLocationRequestInput.js';
export type { DeliveryAddressRequestInput } from '../declarations/DeliveryAddressRequestInput.js';
export type { DeliveryCoordinateRequestInput } from '../declarations/DeliveryCoordinateRequestInput.js';
export type { DeliveryPreviewRoutingSourceInput } from '../declarations/DeliveryPreviewRoutingSourceInput.js';
export type { CreateOrderLineItemInput } from '../declarations/CreateOrderLineItemInput.js';
export type { LineItemFulfillmentRequestInput } from '../declarations/LineItemFulfillmentRequestInput.js';
export type { LineItemFulfillmentSizeRequestInput } from '../declarations/LineItemFulfillmentSizeRequestInput.js';
export type { LineItemFulfillmentOriginRequestInput } from '../declarations/LineItemFulfillmentOriginRequestInput.js';
export type { LineItemFulfillmentWeightRequestInput } from '../declarations/LineItemFulfillmentWeightRequestInput.js';
export type { GiftCardPurchaseRecipientInput } from '../declarations/GiftCardPurchaseRecipientInput.js';
export type { ImageReferenceRequestInput } from '../declarations/ImageReferenceRequestInput.js';
export type { OrderDraftLineItemInventoryDemandRequestInput } from '../declarations/OrderDraftLineItemInventoryDemandRequestInput.js';
export type { TextModifierRequestInput } from '../declarations/TextModifierRequestInput.js';
export type { OrderDraftLineItemTaxRequestInput } from '../declarations/OrderDraftLineItemTaxRequestInput.js';
export type { OrderDraftLineItemTaxCalculationRequestInput } from '../declarations/OrderDraftLineItemTaxCalculationRequestInput.js';
export type { OrderDraftTaxComponentRequestInput } from '../declarations/OrderDraftTaxComponentRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { OrderDraftTaxJurisdictionRequestInput } from '../declarations/OrderDraftTaxJurisdictionRequestInput.js';
export type { DeliveryPickupAvailabilityMaximumDistanceRequestInput } from '../declarations/DeliveryPickupAvailabilityMaximumDistanceRequestInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DeliveryBuyerLocationResource } from '../declarations/DeliveryBuyerLocationResource.js';
export type { DeliveryAddressResource } from '../declarations/DeliveryAddressResource.js';
export type { DeliveryCoordinateRequest } from '../declarations/DeliveryCoordinateRequest.js';
export type { DeliveryPreviewChoiceGroupResource } from '../declarations/DeliveryPreviewChoiceGroupResource.js';
export type { DeliveryCandidateOutcomeResource } from '../declarations/DeliveryCandidateOutcomeResource.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/DeliveryAddressAdvisoryResource.js';
export type { DeliveryAddressRequest } from '../declarations/DeliveryAddressRequest.js';
export type { DeliveryInputRequirement } from '../declarations/DeliveryInputRequirement.js';
export type { DeliveryInputConstraint } from '../declarations/DeliveryInputConstraint.js';
export type { DeliveryWindowResource } from '../declarations/DeliveryWindowResource.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { DeliveryOptionProjection } from '../declarations/DeliveryOptionProjection.js';
export type { DeliveryArrivalEstimate } from '../declarations/DeliveryArrivalEstimate.js';
export type { BuyerInstructionsConfig } from '../declarations/BuyerInstructionsConfig.js';
export type { DeliveryPlan } from '../declarations/DeliveryPlan.js';
export type { DeliveryQuoteExecutionLegResource } from '../declarations/DeliveryQuoteExecutionLegResource.js';
export type { DeliveryShipmentDetails } from '../declarations/DeliveryShipmentDetails.js';
export type { DeliveryPickupDetails } from '../declarations/DeliveryPickupDetails.js';
export type { DeliveryLocationSummaryResource } from '../declarations/DeliveryLocationSummaryResource.js';
export type { DeliveryRecipientRequirement } from '../declarations/DeliveryRecipientRequirement.js';
export type { DeliveryQuoteLineItemResource } from '../declarations/DeliveryQuoteLineItemResource.js';
export type { CreateOrderLineItem } from '../declarations/CreateOrderLineItem.js';
export type { LineItemFulfillmentRequest } from '../declarations/LineItemFulfillmentRequest.js';
export type { LineItemFulfillmentSizeRequest } from '../declarations/LineItemFulfillmentSizeRequest.js';
export type { LineItemFulfillmentOriginRequest } from '../declarations/LineItemFulfillmentOriginRequest.js';
export type { LineItemFulfillmentWeightRequest } from '../declarations/LineItemFulfillmentWeightRequest.js';
export type { GiftCardPurchaseRecipient } from '../declarations/GiftCardPurchaseRecipient.js';
export type { ImageReferenceRequest } from '../declarations/ImageReferenceRequest.js';
export type { OrderDraftLineItemInventoryDemandRequest } from '../declarations/OrderDraftLineItemInventoryDemandRequest.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { OrderDraftLineItemTaxRequest } from '../declarations/OrderDraftLineItemTaxRequest.js';
export type { OrderDraftLineItemTaxCalculationRequest } from '../declarations/OrderDraftLineItemTaxCalculationRequest.js';
export type { OrderDraftTaxComponentRequest } from '../declarations/OrderDraftTaxComponentRequest.js';
export type { OrderDraftTaxJurisdictionRequest } from '../declarations/OrderDraftTaxJurisdictionRequest.js';
export type { DeliveryMerchantDiagnostic } from '../declarations/DeliveryMerchantDiagnostic.js';
export type { DeliveryEligibilityMismatch } from '../declarations/DeliveryEligibilityMismatch.js';
export type { DeliveryPickupAvailabilityLocationResource } from '../declarations/DeliveryPickupAvailabilityLocationResource.js';
export type { DeliveryPickupAvailabilityCandidateOutcome } from '../declarations/DeliveryPickupAvailabilityCandidateOutcome.js';
export type { DeliveryPickupAvailabilityMethodResource } from '../declarations/DeliveryPickupAvailabilityMethodResource.js';
export type { DeliveryPickupAvailabilityLocationSummary } from '../declarations/DeliveryPickupAvailabilityLocationSummary.js';
export type { DeliveryPickupAvailabilityDiagnostic } from '../declarations/DeliveryPickupAvailabilityDiagnostic.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export { makeDeliveryPreviewResponse } from '../declarations/makeDeliveryPreviewResponse.js';
export { makeDeliveryBuyerLocationResource } from '../declarations/makeDeliveryBuyerLocationResource.js';
export { makeDeliveryAddressResource } from '../declarations/makeDeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../declarations/makeDeliveryCoordinateRequest.js';
export { makeDeliveryPreviewChoiceGroupResource } from '../declarations/makeDeliveryPreviewChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../declarations/makeDeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../declarations/makeDeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../declarations/makeDeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../declarations/makeDeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../declarations/makeDeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../declarations/makeDeliveryWindowResource.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeDeliveryOptionProjection } from '../declarations/makeDeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../declarations/makeDeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../declarations/makeBuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../declarations/makeDeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../declarations/makeDeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../declarations/makeDeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../declarations/makeDeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../declarations/makeDeliveryLocationSummaryResource.js';
export { makeDeliveryRecipientRequirement } from '../declarations/makeDeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../declarations/makeDeliveryQuoteLineItemResource.js';
export { makeCreateOrderLineItem } from '../declarations/makeCreateOrderLineItem.js';
export { makeLineItemFulfillmentRequest } from '../declarations/makeLineItemFulfillmentRequest.js';
export { makeLineItemFulfillmentSizeRequest } from '../declarations/makeLineItemFulfillmentSizeRequest.js';
export { makeLineItemFulfillmentOriginRequest } from '../declarations/makeLineItemFulfillmentOriginRequest.js';
export { makeLineItemFulfillmentWeightRequest } from '../declarations/makeLineItemFulfillmentWeightRequest.js';
export { makeGiftCardPurchaseRecipient } from '../declarations/makeGiftCardPurchaseRecipient.js';
export { makeImageReferenceRequest } from '../declarations/makeImageReferenceRequest.js';
export { makeOrderDraftLineItemInventoryDemandRequest } from '../declarations/makeOrderDraftLineItemInventoryDemandRequest.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeOrderDraftLineItemTaxRequest } from '../declarations/makeOrderDraftLineItemTaxRequest.js';
export { makeOrderDraftLineItemTaxCalculationRequest } from '../declarations/makeOrderDraftLineItemTaxCalculationRequest.js';
export { makeOrderDraftTaxComponentRequest } from '../declarations/makeOrderDraftTaxComponentRequest.js';
export { makeOrderDraftTaxJurisdictionRequest } from '../declarations/makeOrderDraftTaxJurisdictionRequest.js';
export { makeDeliveryMerchantDiagnostic } from '../declarations/makeDeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../declarations/makeDeliveryEligibilityMismatch.js';
export { makeDeliveryPickupAvailabilityLocationResource } from '../declarations/makeDeliveryPickupAvailabilityLocationResource.js';
export { makeDeliveryPickupAvailabilityCandidateOutcome } from '../declarations/makeDeliveryPickupAvailabilityCandidateOutcome.js';
export { makeDeliveryPickupAvailabilityMethodResource } from '../declarations/makeDeliveryPickupAvailabilityMethodResource.js';
export { makeDeliveryPickupAvailabilityLocationSummary } from '../declarations/makeDeliveryPickupAvailabilityLocationSummary.js';
export { makeDeliveryPickupAvailabilityDiagnostic } from '../declarations/makeDeliveryPickupAvailabilityDiagnostic.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
