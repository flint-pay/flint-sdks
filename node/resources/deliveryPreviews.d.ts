import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    DeliveryPickupAvailability,
    DeliveryPreview,
    DeliveryPreviewResponse,
    DeliveryPreviewsCreateParams
} from '../declarations/types-20.js';
import type { RequestOptions } from '../declarations/types-61.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
} from '../declarations/types-20.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-79.js';
export type { RequestOptions } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput
} from '../declarations/types-9.js';
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
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryAddressRequest
} from '../declarations/types-18.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-33.js';
export type { CreateOrderLineItemRequestInput, CreateOrderLineItemVariant } from '../declarations/types-12.js';
export type {
    LineItemFulfillmentRequestModelInput,
    LineItemFulfillmentOriginRequestModelInput,
    LocationCoordinate,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-40.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient
} from '../declarations/types-30.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-31.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderCalculatedLineItemTax
} from '../declarations/types-45.js';
export type { MetadataRequestInput, MetadataMap } from '../declarations/types-43.js';
export type {
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderLineItemModifierRequest,
    OrderLineItemModifierInputCatalog,
    OrderLineItemModifierInputText
} from '../declarations/types-46.js';
export type { TextModifierRequestInput, TextModifierRequest, TaxJurisdiction } from '../declarations/types-74.js';
export type { SubscribedLineRequestModelInput, SubscribedLineRequest } from '../declarations/types-68.js';
export type { DimensionsRequestInput, Dimensions } from '../declarations/types-25.js';
export type {
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItem,
    CreateOrderLineItemBundle,
    CreateOrderLineItemCustom
} from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { Address } from '../declarations/types-0.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/types-17.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-19.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-24.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryQuoteLineItemResource } from '../declarations/types-22.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-23.js';
export type { TaxCalculationRequest, TaxComponentRequest } from '../declarations/types-73.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-81.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-83.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest
} from '../declarations/types-84.js';
export { makeDeliveryPickupAvailabilityMaximumDistanceRequest } from '../declarations/types-85.js';
export {
    makeDeliveryWindowRequest,
    makeDimensionsRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-86.js';
export {
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel
} from '../declarations/types-87.js';
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
} from '../declarations/types-88.js';
export { makeSubscribedLineRequestModel } from '../declarations/types-92.js';
export { makeTextModifierRequest } from '../declarations/types-93.js';
export { makeWeightRequest } from '../declarations/types-94.js';
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
