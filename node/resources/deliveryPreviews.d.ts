import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { DeliveryPickupAvailability } from '../declarations/types-18.js';
import type { DeliveryPreview, DeliveryPreviewResponse, DeliveryPreviewsCreateParams } from '../declarations/types-19.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    DeliveryPreviewResponse,
    DeliveryPreviewChoiceGroupResource
} from '../declarations/types-19.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
    DeliveryPickupAvailability,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
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
} from '../declarations/types-18.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput
} from '../declarations/types-8.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch
} from '../declarations/types-17.js';
export type {
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryAddressAdvisoryResource,
    DeliveryArrivalEstimate,
    DeliveryAddressRequest
} from '../declarations/types-16.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-30.js';
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItem,
    CreateOrderLineItemVariant,
    CreateOrderLineItemBundle,
    CreateOrderLineItemCustom
} from '../declarations/types-11.js';
export type {
    LineItemFulfillmentRequestModelInput,
    LineItemFulfillmentOriginRequestModelInput,
    LocationCoordinate,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-35.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient
} from '../declarations/types-27.js';
export type { MoneyValueInput, MetadataRequestInput, MoneyValue, NextAction } from '../declarations/types-38.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-28.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderLineItemModifierInputCatalog,
    OrderLineItemModifierInputText
} from '../declarations/types-40.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-65.js';
export type { SubscribedLineRequestModelInput, SubscribedLineRequest } from '../declarations/types-60.js';
export type { DimensionsRequestInput, Dimensions } from '../declarations/types-23.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { Address } from '../declarations/types-0.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-22.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryQuoteLineItemResource } from '../declarations/types-20.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-21.js';
export type { MetadataMap } from '../declarations/types-37.js';
export type { OrderCalculatedLineItemTax } from '../declarations/types-39.js';
export type { TaxCalculationRequest, TaxComponentRequest, TaxJurisdiction } from '../declarations/types-64.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-72.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-73.js';
export { makeDeliveryAddressRequest, makeDeliveryBuyerLocationInputAddress } from '../declarations/types-74.js';
export {
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryPickupAvailabilityMaximumDistanceRequest
} from '../declarations/types-75.js';
export {
    makeDeliveryWindowRequest,
    makeDimensionsRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-76.js';
export {
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel
} from '../declarations/types-77.js';
export {
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftLineItemTaxRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel,
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel
} from '../declarations/types-78.js';
export { makeSubscribedLineRequestModel, makeTextModifierRequest } from '../declarations/types-82.js';
export { makeWeightRequest } from '../declarations/types-84.js';
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
