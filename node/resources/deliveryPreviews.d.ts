import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DeliveryPickupAvailability,
    DeliveryPreview,
    DeliveryPreviewResponse,
    DeliveryPreviewsCreateInput
} from '../declarations/types-12.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type {
    DeliveryPreviewsCreateInput,
    DeliveryPreview,
    DeliveryPickupAvailability,
    DeliveryPreviewResponse,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
    DeliveryPreviewChoiceGroupResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryPickupAvailabilityLocationResource,
    DeliveryPickupAvailabilityCandidateOutcome,
    DeliveryPickupAvailabilityMethodResource,
    DeliveryPickupAvailabilityLocationSummary,
    DeliveryPickupAvailabilityDiagnostic
} from '../declarations/types-12.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { CreateDeliveryPreviewRequestInput } from '../declarations/types-6.js';
export type { CreateDeliveryOptionsPreviewRequestInput, CreateDeliveryPickupLocationsPreviewRequestInput } from '../declarations/types-5.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequest,
    DeliveryBuyerLocationInputAddress,
    DeliveryBuyerLocationInputCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryAddressAdvisoryResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch
} from '../declarations/types-11.js';
export type { CreateOrderLineItemRequestInput, CreateOrderLineItem } from '../declarations/types-7.js';
export type {
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-28.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    ImageReferenceRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient,
    ImageReferenceRequest
} from '../declarations/types-19.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderCalculatedLineItemTax
} from '../declarations/types-32.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-47.js';
export type { SubscribedLineRequestInput, SubscribedLineRequest } from '../declarations/types-44.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-16.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { LocationCoordinate } from '../declarations/types-29.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-15.js';
export type { BuyerInstructionsConfig } from '../declarations/types-1.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryRecipientRequirement, DeliveryQuoteLineItemResource } from '../declarations/types-14.js';
export type { TaxCalculationRequest, TaxComponentRequest, TaxJurisdiction } from '../declarations/types-46.js';
export { makeBuyerInstructionsConfig } from '../declarations/types-61.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-63.js';
export { makeCreateOrderLineItemRequest } from '../declarations/types-64.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryPickupAvailabilityMaximumDistanceRequest,
    makeDeliveryPreviewRoutingSource
} from '../declarations/types-65.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeGiftCardPurchaseDetailsRequest
} from '../declarations/types-66.js';
export { makeGiftCardPurchaseRecipientRequest, makeImageReferenceRequest } from '../declarations/types-67.js';
export {
    makeLineItemFulfillmentOriginRequest,
    makeLineItemFulfillmentRequest,
    makeLocationCoordinate,
    makeMoneyValue,
    makeOrderCalculatedLineItemTax,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequest,
    makeOrderDraftLineItemTaxRequest,
    makeOrderDraftTaxComponentRequest,
    makeOrderDraftTaxJurisdictionRequest,
    makeOrderLineItemModifierRequest
} from '../declarations/types-68.js';
export {
    makeSubscribedLineRequest,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest
} from '../declarations/types-71.js';
export { makeWeight } from '../declarations/types-73.js';
export interface DeliveryPreviewsResource {
    /**
 * Computes delivery options with mode delivery_options or up to 25 pickup locations with mode
 * pickup_locations. Creates no resource, holds no inventory, and does not change the current
 * selection. Pickup locations are nearest first when a buyer location is provided. Merchant
 * callers receive diagnostics. Checkout credentials may use only pickup_locations for their own
 * checkout session.
 * @see reference/deliveryPreviews.md#deliverypreviewscreate
 * POST /v1/delivery-previews
 * @example
 * client.deliveryPreviews.create({body: {currency: "USD", delivery_method_ids: [], line_items:
 * [{variant_id: "example"}], mode: "delivery_options"}})
 */
    create(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>))>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryPreviews.md#deliverypreviewscreate
     */
    createWithResponse(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryPreviews: DeliveryPreviewsResource;
}
