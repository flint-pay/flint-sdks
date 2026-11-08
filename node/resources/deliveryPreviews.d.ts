import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryPickupAvailability,
    DeliveryPreview,
    DeliveryPreviewResponse,
    DeliveryPreviewsCreateParams
} from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    DeliveryPreviewsCreateParams,
    DeliveryPreview,
    DeliveryPickupAvailability,
    DeliveryPreviewResponse,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
    DeliveryPreviewChoiceGroupResource,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryPickupAvailabilityLocationResource,
    DeliveryPickupAvailabilityCandidateOutcome,
    DeliveryPickupAvailabilityMethodResource,
    DeliveryPickupAvailabilityLocationSummary,
    DeliveryPickupAvailabilityDiagnostic
} from '../declarations/types-18.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput
} from '../declarations/types-8.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryAddressAdvisoryResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch,
    DeliveryAddressRequest
} from '../declarations/types-16.js';
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItem,
    CreateOrderLineItemVariant,
    CreateOrderLineItemBundle,
    CreateOrderLineItemCustom
} from '../declarations/types-10.js';
export type {
    LineItemFulfillmentRequestModelInput,
    LineItemFulfillmentOriginRequestModelInput,
    LocationCoordinate,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-34.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient
} from '../declarations/types-26.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-37.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-27.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderCalculatedLineItemTax
} from '../declarations/types-38.js';
export type { MetadataRequestInput, MetadataMap } from '../declarations/types-36.js';
export type {
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderLineItemModifierRequest,
    OrderLineItemModifierInputCatalog,
    OrderLineItemModifierInputText
} from '../declarations/types-39.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-62.js';
export type { SubscribedLineRequestModelInput, SubscribedLineRequest } from '../declarations/types-57.js';
export type { DimensionsRequestInput, Dimensions } from '../declarations/types-22.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-21.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryQuoteLineItemResource } from '../declarations/types-19.js';
export type { DeliveryLocationSummaryResource, DeliveryMerchantDiagnostic } from '../declarations/types-17.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-20.js';
export type { TaxCalculationRequest, TaxComponentRequest, TaxJurisdiction } from '../declarations/types-61.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-68.js';
export { makeCreateOrderLineItemInputBundle } from '../declarations/types-69.js';
export {
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-70.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest
} from '../declarations/types-71.js';
export {
    makeDeliveryPickupAvailabilityMaximumDistanceRequest,
    makeDeliveryPreviewRoutingSource,
    makeDeliveryWindowRequest,
    makeDimensionsRequest
} from '../declarations/types-72.js';
export {
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-73.js';
export {
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel,
    makeMetadataRequest
} from '../declarations/types-74.js';
export {
    makeMoneyValue,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftLineItemTaxRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel,
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel
} from '../declarations/types-75.js';
export { makeSubscribedLineRequestModel } from '../declarations/types-78.js';
export { makeTextModifierRequest } from '../declarations/types-79.js';
export { makeWeightRequest } from '../declarations/types-80.js';
export interface DeliveryPreviewsResource {
    /**
 * Computes delivery options with mode delivery_options or up to 25 pickup locations with mode
 * pickup_locations. Creates no resource, holds no inventory, and does not change the current
 * selection. Pickup locations are nearest first when a buyer location is provided. Merchant
 * callers receive diagnostics. Checkout credentials may use only pickup_locations for their own
 * checkout session.
 *
 * `POST /v1/delivery-previews`
 * @see https://developers.withflintpay.com/docs/api/delivery-previews#createDeliveryPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryPreviews.create({currency: "USD", line_items: [{type: "variant", variant_id:
 * "var_01KEZF7C004GSH2KT8CNYVMHGX"}], mode: "delivery_options"})
 */
    create(params: DeliveryPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>)), DeliveryPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryPreviews: DeliveryPreviewsResource;
}
